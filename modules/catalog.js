/**
 * PREINDUCOL S.A.S. - MÓDULO: CATÁLOGO DE PRODUCTOS
 * Portafolio oficial filtrable por líneas (Hogar, Industrial, Nitrilo, Cuero).
 */
window.CatalogModule = (function () {
  const mountId = 'catalog-mount';

  function render() {
    return `
  <section class="section-block" id="catalogo">
    <div class="container-max">
      
      <div class="header-editorial">
        <div class="badge-pill">
          <span>PORTAFOLIO OFICIAL</span>
        </div>
        <h2 class="title-editorial">Catálogo de Guantes y Soluciones de Protección</h2>
        <p class="desc-editorial">
          Especializados para trabajo doméstico, aseo institucional, industria química, alimentaria, metalmecánica y construcción.
        </p>
      </div>

      <!-- Filtros Dinámicos -->
      <div class="catalog-filters-strip">
        <button class="filter-tab active" data-filter="all">
          <span>Todos los Productos</span>
          <span class="filter-count">9</span>
        </button>
        <button class="filter-tab" data-filter="hogar">
          <span>Látex Hogar & Aseo</span>
          <span class="filter-count">2</span>
        </button>
        <button class="filter-tab" data-filter="industrial">
          <span>Látex Industrial</span>
          <span class="filter-count">4</span>
        </button>
        <button class="filter-tab" data-filter="nitrilo">
          <span>Nitrilo & Bioseguridad</span>
          <span class="filter-count">1</span>
        </button>
        <button class="filter-tab" data-filter="cuero">
          <span>Cuero & Soldadura</span>
          <span class="filter-count">2</span>
        </button>
      </div>

      <!-- Catálogo de Productos con Tarjetas de Alta Gama -->
      <div class="products-deck" id="catalogGrid">
        
        <!-- CARD 1: RUBERPLUS™ (INSIGNIA) -->
        <article class="product-tile featured-tile tile-amber" data-category="hogar">
          <div class="tile-header-tags">
            <span class="badge-highlight-gold">★ PRODUCTO INSIGNIA</span>
            <span class="badge-calibre-chip">CALIBRE 20 PAREJO</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_palma.png" alt="Guante Ruberplus Preinducol" class="tile-product-img">
            <div class="tile-eco-badge">🌱 100% Biodegradable</div>
          </div>

          <div class="tile-body">
            <div class="tile-category">LÍNEA HOGAR E INDUSTRIA</div>
            <h3 class="tile-title">Guante Ruberplus™</h3>
            <p class="tile-desc">
              Látex natural para mayor suavidad, labrado especial antideslizante en dedos y palma, calibre parejo y diseño anatómico curvo de descanso.
            </p>

            <!-- Medidores de Rendimiento Técnico -->
            <div class="tile-performance-bars">
              <div class="perf-bar-row">
                <span class="perf-label">Agarre Antideslizante</span>
                <div class="perf-meter"><div class="perf-fill" style="width: 98%;"></div></div>
                <span class="perf-score">98%</span>
              </div>
              <div class="perf-bar-row">
                <span class="perf-label">Resistencia Cáusticos/Jabón</span>
                <div class="perf-meter"><div class="perf-fill" style="width: 95%;"></div></div>
                <span class="perf-score">95%</span>
              </div>
              <div class="perf-bar-row">
                <span class="perf-label">Flexibilidad & Confort</span>
                <div class="perf-meter"><div class="perf-fill" style="width: 99%;"></div></div>
                <span class="perf-score">99%</span>
              </div>
            </div>

            <!-- Colores Oficiales -->
            <div class="tile-swatches-row">
              <span class="swatches-label">Colores:</span>
              <div class="swatches-list">
                <span class="swatch-bubble" style="background:#facc15;" title="Amarillo Clásico"></span>
                <span class="swatch-bubble" style="background:#0284c7;" title="Azul Institucional"></span>
                <span class="swatch-bubble" style="background:#dc2626;" title="Rojo Ruberplus"></span>
                <span class="swatch-bubble" style="background:#15803d;" title="Verde Preinducol"></span>
              </div>
              <span class="tile-length-badge">30 cm Oficial</span>
            </div>

            <div class="tile-footer-actions">
              <a href="#visor-3d" class="btn-tile-3d">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                <span>Inspeccionar 3D</span>
              </a>
              <button class="btn-tile-quote" data-product="Guante Ruberplus Calibre 20">Cotizar Pedido</button>
            </div>
          </div>
        </article>

        <!-- CARD 2: RUBERPLUS™ 25 -->
        <article class="product-tile tile-blue" data-category="hogar">
          <div class="tile-header-tags">
            <span class="badge-calibre-chip">CALIBRE 25 REFORZADO</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_dorso.png" alt="Guante Ruberplus Calibre 25" class="tile-product-img">
          </div>

          <div class="tile-body">
            <div class="tile-category">LÁTEX SEMIPESADO</div>
            <h3 class="tile-title">Ruberplus™ Calibre 25</h3>
            <p class="tile-desc">
              Espesor aumentado para labores institucionales que requieren mayor resistencia a la fricción y desinfectantes concentrados en hoteles, hospitales y colegios.
            </p>

            <ul class="tile-specs-list">
              <li><span>📏 Largo:</span> 30 cm con orillo</li>
              <li><span>🛡️ Calibre:</span> 25 Parejo Homogéneo</li>
              <li><span>🧼 Aplicación:</span> Aseo institucional pesado</li>
            </ul>

            <div class="tile-footer-actions">
              <button class="btn-tile-quote full-width" data-product="Ruberplus Calibre 25">Cotizar Ruberplus 25</button>
            </div>
          </div>
        </article>

        <!-- CARD 3: INDUMAX™ INDUSTRIAL -->
        <article class="product-tile tile-emerald" data-category="industrial">
          <div class="tile-header-tags">
            <span class="badge-industrial-chip">USO INDUSTRIAL SEVERO</span>
            <span class="badge-calibre-chip">CALIBRE 25</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_palma.png" alt="Guante Indumax 25" class="tile-product-img">
          </div>

          <div class="tile-body">
            <div class="tile-category">LÍNEA INDUSTRIAL</div>
            <h3 class="tile-title">Guante Indumax™</h3>
            <p class="tile-desc">
              Formulación robusta desarrollada para manipulación continua en fábricas químicas, agroindustria, floricultura y procesamiento de alimentos.
            </p>

            <ul class="tile-specs-list">
              <li><span>🏭 Destino:</span> Plantas de producción e industria</li>
              <li><span>🧪 Resistencia:</span> Ácidos diluidos y cáusticos</li>
              <li><span>👌 Suavidad:</span> Interior satinado antifatiga</li>
            </ul>

            <div class="tile-footer-actions">
              <button class="btn-tile-quote full-width" data-product="Guante Indumax Industrial">Cotizar Indumax™</button>
            </div>
          </div>
        </article>

        <!-- CARD 4: RUBBER 50™ (CALIBRE 50 EXTREMO) -->
        <article class="product-tile tile-red" data-category="industrial">
          <div class="tile-header-tags">
            <span class="badge-extreme-chip">CALIBRE 50 EXTRA PESADO</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_dorso.png" alt="Guante Rubber 50 Calibre 50" class="tile-product-img">
          </div>

          <div class="tile-body">
            <div class="tile-category">PROTECCIÓN QUÍMICA EXTENSA</div>
            <h3 class="tile-title">Rubber 50™ (Calibre 50)</h3>
            <p class="tile-desc">
              Espesor de alta graduación para inmersión química severa, curtiembres, industria petrolera y limpieza de tanques con ácidos concentrados.
            </p>

            <ul class="tile-specs-list">
              <li><span>🧱 Calibre:</span> 50 Extra Grueso</li>
              <li><span>⚡ Máxima Densidad:</span> Barrera impenetrable</li>
              <li><span>📦 Presentación:</span> Docena sellada</li>
            </ul>

            <div class="tile-footer-actions">
              <button class="btn-tile-quote full-width" data-product="Guante Rubber 50 Calibre 50">Cotizar Calibre 50</button>
            </div>
          </div>
        </article>

        <!-- CARD 5: MOSQUETERO™ MANGA LARGA -->
        <article class="product-tile tile-purple" data-category="industrial">
          <div class="tile-header-tags">
            <span class="badge-industrial-chip">MANGA LARGA EXTENDIDA</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_palma.png" alt="Guante Mosquetero" class="tile-product-img">
          </div>

          <div class="tile-body">
            <div class="tile-category">INMERSIÓN PROFUNDA</div>
            <h3 class="tile-title">Guante Mosquetero™</h3>
            <p class="tile-desc">
              Longitud especial extendida que protege completamente la mano, muñeca y antebrazo contra salpicaduras profundas de líquidos y químicos.
            </p>

            <ul class="tile-specs-list">
              <li><span>📏 Longitud:</span> Cobertura total de antebrazo</li>
              <li><span>🌊 Uso:</span> Inmersión en tanques y fosas</li>
              <li><span>🛑 Terminación:</span> Orillo rígido antiescurrimiento</li>
            </ul>

            <div class="tile-footer-actions">
              <button class="btn-tile-quote full-width" data-product="Guante Mosquetero Manga Larga">Cotizar Mosquetero</button>
            </div>
          </div>
        </article>

        <!-- CARD 6: CORRUGADO ANTIDESLIZANTE -->
        <article class="product-tile tile-orange" data-category="industrial">
          <div class="tile-header-tags">
            <span class="badge-highlight-gold">ALTO AGARRE</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_dorso.png" alt="Guante Corrugado Antideslizante" class="tile-product-img">
          </div>

          <div class="tile-body">
            <div class="tile-category">SUPERFICIE TEXTURIZADA</div>
            <h3 class="tile-title">Guante Corrugado™</h3>
            <p class="tile-desc">
              Grabado de alta tracción para sujeción firme de piezas resbaladizas, vidrios mojados, láminas metálicas aceitosas y faenas de pesca.
            </p>

            <ul class="tile-specs-list">
              <li><span>🖐️ Relieve:</span> Acabado corrugado de alta fricción</li>
              <li><span>💧 Comportamiento:</span> Cero deslizamiento en húmedo</li>
              <li><span>🐟 Destino:</span> Manejo de alimentos y vidrios</li>
            </ul>

            <div class="tile-footer-actions">
              <button class="btn-tile-quote full-width" data-product="Guante Corrugado Antideslizante">Cotizar Corrugado</button>
            </div>
          </div>
        </article>

        <!-- CARD 7: GUANTES DE NITRILO -->
        <article class="product-tile tile-cyan" data-category="nitrilo">
          <div class="tile-header-tags">
            <span class="badge-cyan-chip">100% LIBRE DE LÁTEX</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_palma.png" alt="Guantes de Nitrilo Preinducol" class="tile-product-img">
          </div>

          <div class="tile-body">
            <div class="tile-category">BIOSEGURIDAD & SOLVENTES</div>
            <h3 class="tile-title">Guantes de Nitrilo Industrial</h3>
            <p class="tile-desc">
              Alta resistencia química frente a solventes aromáticos, hidrocarburos, aceites y grasas animales. Totalmente libre de alérgenos de látex y talco.
            </p>

            <ul class="tile-specs-list">
              <li><span>🧪 Resistencia:</span> Grasas animales, solventes y derivados</li>
              <li><span>🥩 Industria:</span> Frigoríficos, lácteos y químicos</li>
              <li><span>✨ Propiedad:</span> No genera alergias cutáneas</li>
            </ul>

            <div class="tile-footer-actions">
              <button class="btn-tile-quote full-width" data-product="Guantes de Nitrilo Industrial">Cotizar Nitrilo</button>
            </div>
          </div>
        </article>

        <!-- CARD 8: CUERO VAQUETA -->
        <article class="product-tile tile-leather" data-category="cuero">
          <div class="tile-header-tags">
            <span class="badge-leather-chip">CUERO VACUNO SELECCIONADO</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_dorso.png" alt="Guantes Cuero Vaqueta" class="tile-product-img">
          </div>

          <div class="tile-body">
            <div class="tile-category">LÍNEA CUERO INDUSTRIAL</div>
            <h3 class="tile-title">Guantes Cuero Vaqueta</h3>
            <p class="tile-desc">
              Confección en cuero vacuno suave de primera calidad. Excelente flexibilidad para operaciones mecánicas, montaje de tuberías, conducción y carga.
            </p>

            <ul class="tile-specs-list">
              <li><span>🐄 Material:</span> Vaqueta de res de alta tenacidad</li>
              <li><span>🚚 Áreas:</span> Transporte, logística y mantenimiento</li>
              <li><span>🧵 Costura:</span> Hilo poliéster reforzado</li>
            </ul>

            <div class="tile-footer-actions">
              <button class="btn-tile-quote full-width" data-product="Guantes Cuero Vaqueta">Cotizar Vaqueta</button>
            </div>
          </div>
        </article>

        <!-- CARD 9: CUERO CARNAZA (SOLDADURA) -->
        <article class="product-tile tile-dark" data-category="cuero">
          <div class="tile-header-tags">
            <span class="badge-leather-chip">PROTECCIÓN TÉRMICA SEVERA</span>
          </div>

          <div class="tile-image-stage">
            <img src="assets/guante_palma.png" alt="Guantes Cuero Carnaza" class="tile-product-img">
          </div>

          <div class="tile-body">
            <div class="tile-category">METALMECÁNICA & SOLDADURA</div>
            <h3 class="tile-title">Guantes Cuero Carnaza</h3>
            <p class="tile-desc">
              Protección mecánica y térmica pesada contra chispas de soldadura de electrodo y MIG, corte de piezas con oxicorte y calor radiante.
            </p>

            <ul class="tile-specs-list">
              <li><span>🔥 Resistencia:</span> Chispas incandescentes y calor</li>
              <li><span>⚡ Diseño:</span> Manga larga de seguridad 14 pulgadas</li>
              <li><span>🛡️ Abrasión:</span> Máximo rendimiento al corte</li>
            </ul>

            <div class="tile-footer-actions">
              <button class="btn-tile-quote full-width" data-product="Guantes Cuero Carnaza Soldadura">Cotizar Carnaza</button>
            </div>
          </div>
        </article>

      </div>

    </div>
  </section>
`;
  }

  function init() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const productTiles = document.querySelectorAll('.product-tile');

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        productTiles.forEach(tile => {
          const category = tile.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            tile.style.display = 'flex';
            tile.style.opacity = '1';
          } else {
            tile.style.display = 'none';
          }
        });
      });
    });

    const quoteButtons = document.querySelectorAll('.btn-tile-quote');
    quoteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const productName = btn.getAttribute('data-product') || 'Guantes Ruberplus';
        
        const productSelect = document.getElementById('formProducto');
        if (productSelect) {
          for (let i = 0; i < productSelect.options.length; i++) {
            if (productSelect.options[i].text.includes(productName) || productSelect.options[i].value.includes(productName)) {
              productSelect.selectedIndex = i;
              break;
            }
          }
        }

        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          const nameInput = document.getElementById('formNombre');
          if (nameInput) setTimeout(() => nameInput.focus(), 600);
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