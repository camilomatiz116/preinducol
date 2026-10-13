/**
 * PREINDUCOL S.A.S. - MASTER APPLICATION ORCHESTRATOR
 * Monta y coordina todos los componentes modulares de la plataforma.
 * Código 100% modular, desacoplado y libre de código espagueti.
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Inicializando plataforma Preinducol S.A.S. en modo modular...');

  // 1. Montar Cabecera y Navegación Principal
  if (window.NavbarModule) window.NavbarModule.mount();

  // 2. Montar Hero Editorial Studds Reference
  if (window.HeroModule) window.HeroModule.mount();

  // 3. Montar Categorías de Producto con Repisa Flotante
  if (window.CategoriesModule) window.CategoriesModule.mount();

  // 4. Montar Banda Cinematográfica Oscura del Proceso
  if (window.ProcessModule) window.ProcessModule.mount();

  // 5. Montar Carrusel Horizontal de Modelos y Variaciones
  if (window.VariationsModule) window.VariationsModule.mount();

  // 6. Montar Centro de Fichas Técnicas & Panel Admin con PIN
  if (window.FichasModule) window.FichasModule.mount();

  // 7. Montar Catálogo de Productos Filtrable
  if (window.CatalogModule) window.CatalogModule.mount();

  // 8. Montar Laboratorio y Visor 3D Three.js
  if (window.Visor3DModule) window.Visor3DModule.mount();

  // 9. Montar Información Corporativa, Planta y Formulario de Contacto
  if (window.CompanyModule) window.CompanyModule.mount();

  // 10. Montar Pie de Página y Trigger Flotante de WhatsApp
  if (window.FooterModule) window.FooterModule.mount();

  console.log('✅ Todos los módulos Preinducol montados correctamente.');
});
