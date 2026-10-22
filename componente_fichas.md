# Manual Técnico: Componente Fichas Técnicas & Portal Administrativo
**PREINDUCOL S.A.S. — Sistema Modular Desacoplado**

> **Propósito de este documento:** Este manual detalla la arquitectura, conexiones de datos, credenciales y ubicación exacta de cada archivo que compone el sistema de **Fichas Técnicas Oficiales**. Sirve como guía definitiva para desarrolladores y asistentes de IA.

---

## 🗺️ 1. Mapa de Archivos: ¿Dónde está cada cosa?

El componente está dividido en 4 archivos independientes sin código espagueti:

| Rol / Función | Archivo | Responsabilidad Principal |
| :--- | :--- | :--- |
| **Lógica Pública (JS)** | [`modules/fichas.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/fichas.js) | Carga datos de `localStorage`, abre/cierra el modal público, filtra por categoría/búsqueda, visor de PDF y sincroniza el badge. |
| **Estilos Públicos (CSS)** | [`css/fichas.css`](file:///c:/Users/Camilo/Desktop/wendy/css/fichas.css) | Estilos visuales del modal flotante, tarjetas de producto, cuadrícula responsiva, visor de PDF y animaciones. |
| **Portal Administrativo Oculto** | [`admin.html`](file:///c:/Users/Camilo/Desktop/wendy/admin.html) | Plataforma de gestión privada protegida por usuario y contraseña. Permite crear, editar, eliminar fichas y subir PDFs. |
| **Activador en Navbar** | [`modules/navbar.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/navbar.js) | Enlaza el botón "Fichas Técnicas" al modal público, muestra el badge numérico reactivo y escucha el atajo secreto. |
| **Contenedor en el HTML** | [`index.html`](file:///c:/Users/Camilo/Desktop/wendy/index.html) | Contiene `<div id="fichas-mount"></div>` como modal flotante (fuera del flujo de lectura de la página). |

---

## 🔐 2. Portal Administrativo Oculto (`admin.html`)

El panel de administración fue **completamente desacoplado del sitio público** para evitar botones visibles a los clientes.

### Credenciales de Acceso Oficiales:
* **URL directa:** Abrir `admin.html` en el navegador (ej: `file:///c:/Users/Camilo/Desktop/wendy/admin.html`).
* **Atajo de teclado secreto en la web:** Presionar **`Ctrl + Shift + A`** en cualquier momento dentro de `index.html`.
* **Usuario:** `camilomatiz115`
* **Contraseña:** `12345`

### Capacidades del Administrador:
1. **Crear Ficha:** Formulario con código (ej: `FT-RUB20`), título, categoría, calibre, longitud, color, descripción y cargador de archivo PDF.
2. **Editar Ficha:** Modifica cualquier campo existente o reemplaza el PDF.
3. **Eliminar Ficha:** Borra la ficha con confirmación.
4. **Cierre de Sesión:** Protege la sesión mediante `sessionStorage`.

---

## 🔄 3. Conexiones y Flujo de Datos

```
+-------------------------------------------------------------+
|                     admin.html (Panel)                      |
|   - Usuario: camilomatiz115 | Clave: 12345                 |
|   - Crear / Editar / Borrar Fichas                         |
+-------------------------------------------------------------+
                              │
                              ▼ (Guarda en)
+-------------------------------------------------------------+
|           localStorage: 'preinducol_fichas_tecnicas_db'     |
+-------------------------------------------------------------+
                              │
             ┌────────────────┴────────────────┐
             ▼ (Evento 'storage' reactivo)     ▼ (Lectura directa)
+--------------------------------+   +--------------------------------+
|       modules/navbar.js        |   |       modules/fichas.js        |
|  - Actualiza el badge (ej: 4)  |   |  - Renderiza tarjetas en modal |
|  - Atajo: Ctrl + Shift + A     |   |  - Abre visor de PDF           |
+--------------------------------+   +--------------------------------+
```

### 1. Clave de Almacenamiento Central (`STORAGE_KEY`)
* Ambas partes (el sitio público y `admin.html`) comparten la misma clave de `localStorage`:
  ```javascript
  const STORAGE_KEY = 'preinducol_fichas_tecnicas_db';
  ```
* Cada elemento de la lista contiene la estructura:
  ```json
  {
    "id": "ft-rub20",
    "codigo": "FT-RUB20",
    "titulo": "Guante de Látex Ruberplus™ Calibre 20",
    "categoria": "hogar",
    "categoriaNombre": "Látex Hogar & Aseo",
    "calibre": "Calibre 20 Parejo (0.50 mm)",
    "longitud": "30 cm (12 pulgadas)",
    "color": "Amarillo / Bicolor",
    "descripcion": "...",
    "fechaRev": "Enero 2026",
    "pdfNombre": "Ficha_Tecnica_Ruberplus_Cal20_Preinducol.pdf",
    "pdfData": "data:application/pdf;base64,..."
  }
  ```

### 2. Sincronización en Tiempo Real (Multi-pestaña)
En [`modules/fichas.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/fichas.js) existe un escucha del evento nativo:
```javascript
window.addEventListener('storage', (e) => {
  if (e.key === 'preinducol_fichas_tecnicas_db') {
    syncBadge();
    renderCards();
  }
});
```
*Si tienes la página principal abierta en una pestaña y realizas un cambio en el panel `admin.html` en otra pestaña, el badge y el catálogo de fichas de la página principal se actualizan al instante sin recargar la página.*

---

## 🖥️ 4. Experiencia en el Sitio Público (`fichas.html`)

1. **Página Web Completa e Independiente:** Al hacer clic en **"Fichas Técnicas (4)"** en el menú de navegación, el usuario navega directamente a la página web dedicada [`fichas.html`](file:///c:/Users/Camilo/Desktop/wendy/fichas.html) (sin pop-ups ni modales invasivos).
2. **Navegación Fluida:** Cuenta con cabecera completa, botón para regresar a Inicio (`← Volver a Preinducol Inicio`), barra de búsqueda en vivo, pestañas de categorías y visor de PDF integrado.
3. **Sincronización en Vivo:** Al estar conectada al mismo `localStorage`, cualquier modificación realizada por el administrador en [`admin.html`](file:///c:/Users/Camilo/Desktop/wendy/admin.html) se refleja de inmediato en [`fichas.html`](file:///c:/Users/Camilo/Desktop/wendy/fichas.html) y en el badge del Navbar de [`index.html`](file:///c:/Users/Camilo/Desktop/wendy/index.html).

---

## 🛠️ 5. Guía de Modificaciones Rápidas

* **¿Cómo cambiar las fichas iniciales por defecto?**
  Edita el arreglo `DEFAULT_FICHAS` en [`modules/fichas.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/fichas.js) (líneas 16–80) y en [`admin.html`](file:///c:/Users/Camilo/Desktop/wendy/admin.html) (líneas 490–540).
* **¿Cómo cambiar el usuario o contraseña del administrador?**
  Edita las constantes `VALID_USER` y `VALID_PASS` en [`admin.html`](file:///c:/Users/Camilo/Desktop/wendy/admin.html) (líneas 474–475).
* **¿Cómo ajustar el diseño de las tarjetas públicas?**
  Edita las clases `.ft-card`, `.ft-specs-list` o `.btn-ft-view` en [`css/fichas.css`](file:///c:/Users/Camilo/Desktop/wendy/css/fichas.css).
* **¿Cómo cambiar el atajo secreto del admin?**
  Edita el escuchador `keydown` en [`modules/navbar.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/navbar.js) (líneas 113–118).
