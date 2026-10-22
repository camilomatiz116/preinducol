# PREINDUCOL S.A.S. — Guía de Arquitectura y Reglas del Asistente

> **Propósito de este archivo:** Este documento es leído automáticamente por el asistente de IA al iniciar cada sesión. Define el mapa exacto de la arquitectura modular del proyecto y las reglas de rendimiento para aplicar cambios de forma instantánea sin perder tiempo buscando o ejecutando comandos innecesarios.

---

## ⚡ Regla de Oro para el Asistente: Rendimiento y Velocidad

1. **Edición Directa Obligatoria:** 
   - Modifica y lee archivos utilizando **exclusivamente las herramientas de edición de archivos del editor** (`replace_file_content`, `view_file`, `grep_search`).
   - **NO ejecutes comandos de PowerShell/terminal** para tareas como inspeccionar carpetas, buscar texto o leer archivos. La edición directa es instantánea (0 ms), mientras que la consola en este sistema tiene latencia elevada.
2. **Mantener la Arquitectura Modular:**
   - No concentres código en un solo archivo. Si se modifica un componente, edita su módulo específico en `css/` o `modules/`.
   - No instales dependencias de Node.js o frameworks a menos que el usuario lo solicite expresamente. La web es 100% Vanilla (HTML5 + CSS3 + JS moderno).

---

## 🗺️ Mapa de Componentes y Archivos

Cada sección de la página está desacoplada en su propio archivo CSS y módulo JavaScript:

| Sección / Funcionalidad | Estilos (CSS) | Lógica (JavaScript) | Contenedor HTML |
| :--- | :--- | :--- | :--- |
| **Variables, Reset & Paleta Base** | [`css/base.css`](file:///c:/Users/Camilo/Desktop/wendy/css/base.css) | N/A | `:root`, `body` |
| **Cabecera & Menú Móvil** | [`css/navbar.css`](file:///c:/Users/Camilo/Desktop/wendy/css/navbar.css) | [`modules/navbar.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/navbar.js) | `#main-header` / `#main-nav` |
| **Hero Editorial & Slider** | [`css/hero.css`](file:///c:/Users/Camilo/Desktop/wendy/css/hero.css) | [`modules/hero.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/hero.js) | `#hero-section` |
| **Quiénes Somos, Wendy & Valores** | [`css/about.css`](file:///c:/Users/Camilo/Desktop/wendy/css/about.css) | [`modules/about.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/about.js) | `#about-mount` / `#nosotros` |
| **Proceso de Fabricación (Banda Oscura)** | [`css/process.css`](file:///c:/Users/Camilo/Desktop/wendy/css/process.css) | [`modules/process.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/process.js) | `#process-section` |
| **Fichas Técnicas & Portal Admin** | [`css/fichas.css`](file:///c:/Users/Camilo/Desktop/wendy/css/fichas.css) / [`admin.html`](file:///c:/Users/Camilo/Desktop/wendy/admin.html) | [`modules/fichas.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/fichas.js) | Ver [`componente_fichas.md`](file:///c:/Users/Camilo/Desktop/wendy/componente_fichas.md) |
| **Catálogo de Productos & Filtros** | [`css/catalog.css`](file:///c:/Users/Camilo/Desktop/wendy/css/catalog.css) | [`modules/catalog.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/catalog.js) | [`catalogo.html`](file:///c:/Users/Camilo/Desktop/wendy/catalogo.html) (Página dedicada independiente) |
| **Laboratorio & Visor 3D (Three.js)** | [`css/visor3d.css`](file:///c:/Users/Camilo/Desktop/wendy/css/visor3d.css) | [`modules/visor3d.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/visor3d.js) / [`modules/visor3d-data.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/visor3d-data.js) | [`visor3d.html`](file:///c:/Users/Camilo/Desktop/wendy/visor3d.html) (Ver [`componente_visor3d.md`](file:///c:/Users/Camilo/Desktop/wendy/componente_visor3d.md)) |
| **Información Corporativa & Contacto** | [`css/company.css`](file:///c:/Users/Camilo/Desktop/wendy/css/company.css) | [`modules/company.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/company.js) | `#company-section` |
| **Pie de Página & Botón WhatsApp** | [`css/footer.css`](file:///c:/Users/Camilo/Desktop/wendy/css/footer.css) | [`modules/footer.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/footer.js) | `#main-footer` |
| **Reglas Globales Responsive** | [`css/responsive.css`](file:///c:/Users/Camilo/Desktop/wendy/css/responsive.css) | N/A | Media queries globales |

---

## 🎨 Paleta de Color y Tokens Centrales

Definidos en [`css/base.css`](file:///c:/Users/Camilo/Desktop/wendy/css/base.css):
* **Fondo Canvas Principal:** `var(--c-bg-canvas)` (`#ffffff`)
* **Fondo Sutil:** `var(--c-bg-subtle)` (`#f8fafc`)
* **Texto Principal:** `var(--c-text-main)` (`#0f172a`)
* **Texto Secundario:** `var(--c-text-muted)` (`#475569`)
* **Verde Corporativo Preinducol:** `var(--c-brand-green)` (`#059669`) / Hover: `#047857`
* **Bordes:** `var(--c-border-light)` (`#e2e8f0`)

---

## 🏗️ Orquestación de la Aplicación

1. **HTML Maestro:** [`index.html`](file:///c:/Users/Camilo/Desktop/wendy/index.html) importa el CSS unificado y carga los scripts en orden.
2. **CSS Maestro:** [`style.css`](file:///c:/Users/Camilo/Desktop/wendy/style.css) importa ordenadamente cada uno de los 12 archivos CSS mediante `@import url('css/...')`.
3. **JS Maestro:** [`app.js`](file:///c:/Users/Camilo/Desktop/wendy/app.js) inicializa cada módulo bajo el patrón `window.<Nombre>Module.mount()` cuando el DOM está listo (`DOMContentLoaded`).

---

## 📌 Guía Rápida para el Usuario

Cuando solicites un cambio al asistente, puedes ser tan directo como:
* *"Cambia el color de acento en el Navbar"* (El asistente irá directo a [`css/navbar.css`](file:///c:/Users/Camilo/Desktop/wendy/css/navbar.css)).
* *"Ajusta la velocidad del carrusel en Variaciones"* (Irá directo a [`modules/variations.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/variations.js)).
* *"Agrega una nueva tarjeta en Categorías"* (Irá directo a [`modules/categories.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/categories.js) o [`index.html`](file:///c:/Users/Camilo/Desktop/wendy/index.html)).
