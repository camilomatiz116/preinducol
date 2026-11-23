@echo off
chcp 65001 > nul
title Preinducol - Subir Cambios a GitHub
echo ========================================================
echo   PREINDUCOL - SUBIR CAMBIOS A GITHUB (CASA / OFICINA)
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/3] Verificando estado del repositorio...
git status -s > "%temp%\git_status.tmp"
set /p STATUS=<"%temp%\git_status.tmp"
del "%temp%\git_status.tmp" 2>nul

git status -s
echo.

set /p MSG="Escribe una descripcion de tus cambios (o Enter para fecha automatica): "
if "%MSG%"=="" (
    set MSG=Actualizacion Preinducol %date% %time%
)

echo.
echo [2/3] Guardando cambios locales...
git add -A
git commit -m "%MSG%"

echo.
echo [3/3] Subiendo cambios a GitHub (git push origin main)...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   [EXITO] Cambios subidos correctamente a GitHub.
    echo   Ya puedes hacer 'bajar_de_github.bat' en tu otro PC.
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   [ERROR] No se pudo subir a GitHub.
    echo   Verifica tu conexion o si hay cambios remotos pendientes.
    echo ========================================================
)

echo.
pause
