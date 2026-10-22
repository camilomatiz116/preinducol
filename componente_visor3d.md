# Manual Técnico: Componente Visor 3D Holográfico & Motor de Inspección Multi-Producto
**PREINDUCOL S.A.S. — Sistema Modular Desacoplado**

> **Propósito de este documento:** Este manual detalla la arquitectura, motor Three.js, desacople de datos técnicos, parámetros de URL y ubicación exacta de cada archivo que conforma el **Laboratorio de Inspección 3D Holográfica**. Sirve como guía definitiva para desarrolladores y asistentes de IA.

---

## 🗺️ 1. Mapa de Archivos: ¿Dónde está cada cosa?

El componente 3D está desacoplado en 4 módulos independientes sin código espagueti:

| Rol / Función | Archivo | Responsabilidad Principal |
| :--- | :--- | :--- |
| **Página Web Dedicada** | [`visor3d.html`](file:///c:/Users/Camilo/Desktop/wendy/visor3d.html) | Página independiente que aloja el canvas WebGL, el selector de productos, la ficha lateral y la navegación de retorno. |
| **Datos Técnicos de Productos** | [`modules/visor3d-data.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/visor3d-data.js) | Matriz con especificaciones, acabados, colores oficiales, resistencia química y puntos de inspección (hotspots) para los 9 guantes. |
| **Motor 3D Three.js** | [`modules/visor3d.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/visor3d.js) | Inicialización de escena, luces de estudio 3-point, carga de modelo GLTF/Base64, proyección matemática de pines a pantalla y cambio reactivo de material. |
| **Estilos del Laboratorio** | [`css/visor3d.css`](file:///c:/Users/Camilo/Desktop/wendy/css/visor3d.css) | Estética de laboratorio blanco, brackets holográficos, píldoras selectoras, botones de vista de cámara y ficha técnica responsive. |

---

## 🔄 2. Flujo de Datos y Conexión con el Catálogo

```
+---------------------------------------------------------------------------------+
|                                catalogo.html                                    |
|   - Botón "Inspeccionar 3D" en cada una de las 9 tarjetas de producto           |
|   - Enlace: visor3d.html?producto=[id-del-producto]                             |
+---------------------------------------------------------------------------------+
                                      │
                                      ▼ (Abre en página dedicada)
+---------------------------------------------------------------------------------+
|                                 visor3d.html                                    |
|   1. Lee URLSearchParams: 'producto' (ej: 'indumax', 'rubber-50', etc.)         |
|   2. Consulta Visor3DData.getProduct(id)                                        |
+---------------------------------------------------------------------------------+
                                      │
                 ┌────────────────────┴────────────────────┐
                 ▼                                         ▼
+---------------------------------+       +---------------------------------+
|       modules/visor3d.js        |       |    Panel Lateral (Ficha)        |
|  - Aplica color y rugosidad     |       |  - Título, código y línea       |
|  - Proyecta pines 3D a pantalla |       |  - Grilla de especificaciones   |
|  - Permite rotar 360° y zoom    |       |  - Guía química alta/baja       |
+---------------------------------+       |  - Botón de cotización WhatsApp |
                                          +---------------------------------+
```

---

## 🧤 3. Catálogo de Productos Soportados (9 Líneas Oficiales)

El módulo [`modules/visor3d-data.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/visor3d-data.js) soporta las siguientes claves de producto:

1. `ruberplus-20`: Guante Ruberplus™ Calibre 20 (Insignia, Látex Biodegradable).
2. `ruberplus-25`: Ruberplus™ Calibre 25 (Látex Semipesado Institucional).
3. `indumax`: Guante Indumax™ Industrial (Uso Industrial Severo).
4. `rubber-50`: Rubber 50™ Calibre 50 (Inmersión Química Severa).
5. `mosquetero`: Guante Mosquetero™ Manga Larga (40 cm de cobertura).
6. `corrugado`: Guante Corrugado™ Antideslizante (Superficie Texturizada).
7. `nitrilo`: Guantes de Nitrilo Industrial (Bioseguridad & Solventes).
8. `cuero-vaqueta`: Guantes Cuero Vaqueta (Vaqueta de Res Seleccionada).
9. `cuero-carnaza`: Guantes Cuero Carnaza Soldadura (Protección Térmica).

---

## ⚙️ 4. Capacidades del Visor 3D

1. **Selector Rápido In-Situ:** En [`visor3d.html`](file:///c:/Users/Camilo/Desktop/wendy/visor3d.html) existe una barra superior de píldoras que permite cambiar de producto inmediatamente sin recargar la página.
2. **Selector Dinámico de Colores:** Cada guante expone sus propios colores oficiales autorizados (amarillo, azul, rojo, verde, naranja, negro, miel, etc.), actualizando el material 3D en tiempo real.
3. **Pines Interactivos (Hotspots):** Cada producto define sus puntos clave (dedos, palma, manga, dorso) con cámara orbital enfocada y texto descriptivo.
4. **Vistas Rápidas de Cámara:** Botones preconfigurados para Palma (Frente), Dorso (Reverso), Perfil Lateral y Giro Automático 360°.
5. **Cotización Directa:** Al presionar "Solicitar Cotización de este Producto", se genera un enlace a WhatsApp pre-llenado con el nombre exacto y código del producto inspeccionado.

---

## 🛠️ 5. Guía de Modificaciones Rápidas

* **¿Cómo agregar o modificar especificaciones de un guante?**
  Edita el objeto correspondiente en [`modules/visor3d-data.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/visor3d-data.js).
* **¿Cómo ajustar la iluminación o material Three.js?**
  Edita `setupLights()` o `material3D` en [`modules/visor3d.js`](file:///c:/Users/Camilo/Desktop/wendy/modules/visor3d.js).
* **¿Cómo cambiar el diseño visual del escenario 3D?**
  Edita [`css/visor3d.css`](file:///c:/Users/Camilo/Desktop/wendy/css/visor3d.css).
