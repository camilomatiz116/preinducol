/**
 * PREINDUCOL S.A.S. - MÓDULO: PROCESO CINEMATOGRÁFICO (BANDA OSCURA STUDDS)
 * Tarjeta central destacada con marco rojo brillante y etapas del proceso de manufactura.
 */
window.ProcessModule = (function () {
  const mountId = 'process-mount';

  function render() {
    return `
    <section class="section-studds-dark-band" id="proceso-dark">
      <div class="dark-band-backdrop"></div>
      
      <div class="container-max">
        <div class="studds-cinematic-grid">
          
          <!-- Tarjeta Izquierda: Etapa 01 -->
          <div class="cine-card-photo">
            <div class="cine-img-overlay"></div>
            <div class="cine-card-info">
              <span class="cine-tag">ETAPA 01 • INMERSIÓN</span>
              <h4>Moldes Curvos Ergonómicos</h4>
              <p>Doble baño en látex natural 100% puro Hevea brasiliensis con grabado microestructurado antideslizante.</p>
            </div>
          </div>

          <!-- Tarjeta Central Destacada con Marco Rojo (Studds Red Framed Feature Box) -->
          <div class="cine-card-center-highlight">
            <div class="highlight-red-frame">
              <div class="frame-badge">PROCESO CERTIFICADO</div>
              <div class="frame-content">
                <span class="frame-eyebrow">LABORATORIO PREINDUCOL</span>
                <h3>ENSAYOS MECÁNICOS Y QUÍMICOS</h3>
                <p>Pruebas continuas de elongación superior al 700%, resistencia a la tracción y hermeticidad electrónica cero fugas.</p>
                <a href="#manufactura" class="btn-pill-studds btn-pill-accent btn-pill-red">
                  <span>conocer planta</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Tarjeta Derecha: Etapa 04 -->
          <div class="cine-card-photo">
            <div class="cine-img-overlay"></div>
            <div class="cine-card-info">
              <span class="cine-tag">ETAPA 04 • CONTROL 100%</span>
              <h4>Vulcanizado y Acabado</h4>
              <p>Curado térmico con bactericida activo incorporado, enrollado de orillo en boca y empaque sellado al vacío.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
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
