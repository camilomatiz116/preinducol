/**
 * PREINDUCOL S.A.S. - MÓDULO: VARIACIONES Y MODELOS (CARRUSEL STUDDS)
 * Carrusel horizontal de líneas y especificaciones con navegación por flechas.
 */
window.VariationsModule = (function () {
  const mountId = 'variations-mount';

  function render() {
    return `
    <section class="section-studds-variations" id="modelos-variaciones">
      <div class="container-max">
        
        <div class="variations-header text-center">
          <span class="studds-eyebrow text-accent-red">LÍNEAS DESTACADAS</span>
          <h2 class="studds-title-display" style="font-size: 2.8rem;">MODELOS Y ESPECIFICACIONES</h2>
        </div>

        <div class="variations-carousel-wrap">
          <button class="var-arrow-btn var-arrow-left" id="btnVarPrev" aria-label="Anterior">‹</button>
          
          <div class="variations-strip" id="variationsStrip">
            
            <div class="var-item-card" data-ref="RUBERPLUS-20">
              <div class="var-img-box">
                <img src="assets/guante_palma.png" alt="Ruberplus Calibre 20">
              </div>
              <div class="var-meta">
                <h4>Ruberplus™ 20</h4>
                <p>Látex Natural • Calibre 20</p>
                <a href="#fichas-tecnicas" class="btn-pill-studds btn-pill-sm" data-target-ft="FT-RUB20">Ficha Técnica</a>
              </div>
            </div>

            <div class="var-item-card active-featured" data-ref="RUBERPLUS-25">
              <div class="var-badge">DESTACADO</div>
              <div class="var-img-box">
                <img src="assets/guante_dorso.png" alt="Ruberplus Calibre 25">
              </div>
              <div class="var-meta">
                <h4>Ruberplus™ 25</h4>
                <p>Semipesado • Calibre 25</p>
                <a href="#fichas-tecnicas" class="btn-pill-studds btn-pill-sm btn-pill-accent" data-target-ft="FT-RUB25">Ficha Técnica</a>
              </div>
            </div>

            <div class="var-item-card" data-ref="INDUMAX-25">
              <div class="var-img-box">
                <img src="assets/guante.png" alt="Indumax Industrial">
              </div>
              <div class="var-meta">
                <h4>Indumax™ Industrial</h4>
                <p>Química Severa • Calibre 25</p>
                <a href="#fichas-tecnicas" class="btn-pill-studds btn-pill-sm" data-target-ft="FT-IND25">Ficha Técnica</a>
              </div>
            </div>

            <div class="var-item-card" data-ref="RUBBER-50">
              <div class="var-img-box">
                <img src="assets/guante_dorso.png" alt="Rubber 50 Extrapesado">
              </div>
              <div class="var-meta">
                <h4>Rubber 50™</h4>
                <p>Extrapesado • Calibre 50</p>
                <a href="#fichas-tecnicas" class="btn-pill-studds btn-pill-sm" data-target-ft="FT-RUB50">Ficha Técnica</a>
              </div>
            </div>

          </div>

          <button class="var-arrow-btn var-arrow-right" id="btnVarNext" aria-label="Siguiente">›</button>
        </div>

      </div>
    </section>
    `;
  }

  function init() {
    const strip = document.getElementById('variationsStrip');
    const btnLeft = document.getElementById('btnVarPrev');
    const btnRight = document.getElementById('btnVarNext');

    if (strip && btnLeft && btnRight) {
      btnLeft.addEventListener('click', () => {
        strip.scrollBy({ left: -280, behavior: 'smooth' });
      });

      btnRight.addEventListener('click', () => {
        strip.scrollBy({ left: 280, behavior: 'smooth' });
      });
    }

    // Al hacer clic en un enlace a ficha técnica, filtrar o abrir la ficha
    const ftLinks = document.querySelectorAll('.var-item-card [data-target-ft]');
    ftLinks.forEach(link => {
      link.addEventListener('click', () => {
        const targetCode = link.getAttribute('data-target-ft');
        if (targetCode && window.FichasModule && typeof window.FichasModule.searchAndHighlight === 'function') {
          setTimeout(() => {
            window.FichasModule.searchAndHighlight(targetCode);
          }, 300);
        }
      });
    });
  }

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      container.innerHTML = render();
      init();
    }
  }

  return {
    mount
  };
})();
