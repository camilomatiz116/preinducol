"""
Script de despliegue a 1 SOLO CLIC para PREINDUCOL
Sube los cambios a GitHub y publica directamente en:
https://www.emcilabs.com/preinducolprueba/
"""

import os
import sys
import subprocess
import time

try:
    import paramiko
except ImportError:
    print("[*] Instalando paramiko para conexion segura...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko"])
    import paramiko

# Configuracion del Servidor Contabo
SERVER_IP = "89.117.51.32"
SERVER_PORT = 22
SERVER_USER = "root"
SERVER_PASS = "19851958Moi*"
PRIMARY_REMOTE_DIR = "/var/www/mclabs/preinducolprueba"
FALLBACK_REMOTE_DIR = "/var/www/preinducolprueba"

LOCAL_DIR = os.path.dirname(os.path.abspath(__file__))

IGNORED_NAMES = {
    ".git", ".gitignore", "__pycache__", ".vscode", ".idea",
    "deploy_emcilabs.py", "publicar_preinducol.bat", "subir_a_github.bat",
    "bajar_de_github.bat"
}

def sync_github():
    print("\n========================================================")
    print("  [1/3] Sincronizando con GitHub (Git Push)...")
    print("========================================================")
    try:
        status = subprocess.check_output(["git", "status", "--porcelain"], cwd=LOCAL_DIR).decode('utf-8', errors='ignore').strip()
        if status:
            commit_msg = f"deploy(auto): actualizacion preinducol {time.strftime('%Y-%m-%d %H:%M:%S')}"
            subprocess.check_call(["git", "add", "-A"], cwd=LOCAL_DIR)
            subprocess.check_call(["git", "commit", "-m", commit_msg], cwd=LOCAL_DIR)
            print(" -> Commit generado automaticamente.")
        else:
            print(" -> Sin cambios locales nuevos por commitear.")

        print(" -> Enviando cambios a GitHub (origin main)...")
        subprocess.check_call(["git", "push", "origin", "main"], cwd=LOCAL_DIR)
        print(" [OK] GitHub sincronizado.")
    except Exception as e:
        print(f" [!] GitHub aviso: {e}. Continuando despliegue al servidor...")

def upload_directory(sftp, local_dir, remote_dir):
    try:
        sftp.mkdir(remote_dir)
    except Exception:
        pass

    for item in os.listdir(local_dir):
        if item in IGNORED_NAMES or item.endswith(('.tmp', '.log')):
            continue

        l_path = os.path.join(local_dir, item)
        r_path = f"{remote_dir}/{item}".replace("\\", "/")

        if os.path.isdir(l_path):
            upload_directory(sftp, l_path, r_path)
        else:
            sftp.put(l_path, r_path)

def deploy_to_server():
    print("\n========================================================")
    print(f"  [2/3] Conectando por SSH a {SERVER_IP}...")
    print("========================================================")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    try:
        ssh.connect(
            hostname=SERVER_IP,
            port=SERVER_PORT,
            username=SERVER_USER,
            password=SERVER_PASS,
            timeout=15
        )
        print(" [OK] Conectado exitosamente al servidor.")

        # Determinar la ruta remota
        stdin, stdout, stderr = ssh.exec_command(f"if [ -d '{PRIMARY_REMOTE_DIR}' ]; then echo 'PRIMARY'; elif [ -d '{FALLBACK_REMOTE_DIR}' ]; then echo 'FALLBACK'; else echo 'NEW'; fi")
        res = stdout.read().decode('utf-8', errors='ignore').strip()

        if res == 'FALLBACK':
            remote_target = FALLBACK_REMOTE_DIR
        elif res == 'PRIMARY':
            remote_target = PRIMARY_REMOTE_DIR
        else:
            remote_target = PRIMARY_REMOTE_DIR
            ssh.exec_command(f"mkdir -p {remote_target}")

        print(f" -> Destino en servidor: {remote_target}")
        
        sftp = ssh.open_sftp()
        print(" -> Subiendo todos los archivos...")
        upload_directory(sftp, LOCAL_DIR, remote_target)
        sftp.close()

        print(" -> Aplicando permisos www-data...")
        ssh.exec_command(f"chown -R www-data:www-data {remote_target} && chmod -R 755 {remote_target}")

        print(" -> Recargando Nginx...")
        ssh.exec_command("systemctl reload nginx")
        print(" [OK] Servidor actualizado y Nginx recargado.")

        print("\n========================================================")
        print("  [3/3] Verificacion en vivo...")
        print("========================================================")
        stdin, stdout, stderr = ssh.exec_command("curl -s -o /dev/null -w '%{http_code}' https://www.emcilabs.com/preinducolprueba/")
        http_code = stdout.read().decode('utf-8', errors='ignore').strip()
        print(f" -> Codigo HTTP: {http_code}")

        print("\n" + "="*56)
        print("  ✅ [LISTO] Preinducol actualizado con exito!")
        print("  🌐 Enlace: https://www.emcilabs.com/preinducolprueba/")
        print("="*56 + "\n")

    except Exception as e:
        print(f"\n [ERROR] Fallo el despliegue al servidor: {e}")
        sys.exit(1)
    finally:
        ssh.close()

if __name__ == "__main__":
    sync_github()
    deploy_to_server()
