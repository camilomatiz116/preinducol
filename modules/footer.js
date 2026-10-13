/**
 * PREINDUCOL S.A.S. - MÓDULO: FOOTER & BOTÓN FLOTANTE WHATSAPP
 * Pie de página corporativo editorial y trigger directo de WhatsApp.
 */
window.FooterModule = (function () {
  const mountId = 'footer-mount';

  function render() {
    return `
    <footer class="footer-master">
      <div class="container-max">
        
        <div class="footer-columns-grid">
          
          <div class="f-col-brand">
            <img src="assets/logo.png" alt="Preinducol S.A.S." class="footer-brand-logo">
            <p class="f-brand-desc">
              Fabricantes colombianos líderes en bioseguridad y protección manual. Desarrollamos guantes de látex 100% natural, nitrilo y cuero para el hogar, la industria química, alimentos y trabajo pesado.
            </p>
            <div class="colombia-pride-pill">
              <span>🇨🇴 Hecho en Colombia con Calidad de Exportación</span>
            </div>
          </div>

          <div class="f-col">
            <h4 class="f-title">Navegación</h4>
            <ul class="f-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Quiénes Somos</a></li>
              <li><a href="#manufactura">Planta & Proceso</a></li>
              <li><a href="#catalogo">Catálogo de Guantes</a></li>
              <li><a href="#fichas-tecnicas">Fichas Técnicas</a></li>
              <li><a href="#visor-3d">Visor 3D Ruberplus™</a></li>
              <li><a href="#sostenibilidad">Sostenibilidad & Eco</a></li>
              <li><a href="#contacto">Contacto & Cotizaciones</a></li>
            </ul>
          </div>

          <div class="f-col">
            <h4 class="f-title">Líneas de Producción</h4>
            <ul class="f-list">
              <li><a href="#catalogo">Guante Ruberplus™ Cal. 20</a></li>
              <li><a href="#catalogo">Ruberplus™ Calibre 25</a></li>
              <li><a href="#catalogo">Guante Indumax™ Industrial</a></li>
              <li><a href="#catalogo">Rubber 50™ Trabajo Pesado</a></li>
              <li><a href="#catalogo">Guante Mosquetero™</a></li>
              <li><a href="#catalogo">Guantes de Nitrilo y Cuero</a></li>
            </ul>
          </div>

          <div class="f-col">
            <h4 class="f-title">Canales Directos</h4>
            <div class="f-contacts">
              <p><strong>Comercial:</strong> +57 311 842 0561</p>
              <p><strong>Servicio al Cliente:</strong> +57 313 895 7129</p>
              <p><strong>Ubicación:</strong> Bogotá D.C., Colombia</p>
              <p><strong>Horario:</strong> Lunes a Viernes 8:00 AM – 5:30 PM</p>
            </div>
          </div>

        </div>

        <div class="footer-legal-bar">
          <p>Copyright &copy; 2026 <strong>PREINDUCOL S.A.S.</strong> Todos los derechos reservados.</p>
          <div class="f-legal-badges">
            <span>Látex 100% Biodegradable</span>
            <span>•</span>
            <span>Acción Antibacterial Activa</span>
            <span>•</span>
            <span>Industria Colombiana</span>
          </div>
        </div>

      </div>
    </footer>

    <!-- Botón Flotante WhatsApp Oficial -->
    <a href="https://wa.me/573118420561?text=Hola%20Preinducol,%20deseo%20solicitar%20informaci%C3%B3n%20comercial%20y%20cotizaciones" target="_blank" rel="noopener noreferrer" class="wa-floating-trigger" title="Chatear con Preinducol en WhatsApp">
      <div class="wa-bubble-prompt">
        <span class="prompt-status">En línea</span>
        <span>¿Necesitas asesoría técnica o cotización? <strong>Escríbenos aquí</strong></span>
      </div>
      <div class="wa-icon-glow">
        <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.3-.777.98-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.268-.468-2.416-1.493-.893-.799-1.496-1.786-1.672-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.585-.493-.506-.677-.515l-.578-.01c-.2 0-.526.075-.802.376-.276.3-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.899.12.579-.087 1.78-.727 2.03-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.438 5.176L2 22l4.982-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.176c-1.597 0-3.097-.47-4.364-1.284l-.313-.199-3.238.908.913-3.155-.205-.327A8.14 8.14 0 0 1 3.824 12c0-4.509 3.667-8.176 8.176-8.176 4.509 0 8.176 3.667 8.176 8.176 0 4.509-3.667 8.176-8.176 8.176z"/>
        </svg>
      </div>
    </a>
    `;
  }

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      container.innerHTML = render();
    }
  }

  return {
    mount
  };
})();
