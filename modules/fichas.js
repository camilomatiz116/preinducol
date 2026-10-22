/**
 * ============================================================================
 * PREINDUCOL S.A.S. - MÓDULO PÚBLICO: CENTRO DE FICHAS TÉCNICAS
 * Código 100% modular, desacoplado y libre de código espagueti.
 * 
 * Responsabilidades:
 * 1. Cargar y cachear las Fichas Técnicas desde localStorage ('preinducol_fichas_tecnicas_db').
 * 2. Abrir/Cerrar el Modal Público de consulta documental cuando el usuario hace clic en el Navbar.
 * 3. Filtrar por búsqueda y categorías (Hogar, Industrial, etc.).
 * 4. Previsualizar / Descargar el PDF oficial de cada ficha técnica.
 * 5. Escuchar en tiempo real cambios realizados desde 'admin.html' (evento 'storage').
 * ============================================================================
 */
window.FichasModule = (function () {
  const mountId = 'fichas-mount';
  const STORAGE_KEY = 'preinducol_fichas_tecnicas_db';

  // Catálogo base de fábrica (usado si el almacenamiento local está vacío)
  const DEFAULT_FICHAS = [
    {
      id: 'ft-rub20',
      codigo: 'FT-RUB20',
      titulo: 'Guante de Látex Ruberplus™ Calibre 20',
      categoria: 'hogar',
      categoriaNombre: 'Látex Hogar & Aseo',
      calibre: 'Calibre 20 Parejo (0.50 mm)',
      longitud: '30 cm (12 pulgadas)',
      color: 'Amarillo / Bicolor',
      materiaPrima: 'Látex Natural 100% Hevea Brasiliensis Biodegradable',
      empaque: 'Docena individual / Caja máster x 12 docenas (144 pares)',
      descripcion: 'Guante ergonómico con labrado antideslizante en palma y dedos. Formulado con bactericida activo que inhibe 99.9% de hongos y bacterias. Ideal para limpieza, alimentos y hotelería.',
      normas: ['NTC 2219 / ASTM D4679', 'Bactericida Activo Aprobado', 'Biodegradable 100%'],
      fechaRev: 'Enero 2026',
      pdfNombre: 'Ficha_Tecnica_Ruberplus_Cal20_Preinducol.pdf'
    },
    {
      id: 'ft-rub25',
      codigo: 'FT-RUB25',
      titulo: 'Guante de Látex Ruberplus™ Semipesado Calibre 25',
      categoria: 'industrial',
      categoriaNombre: 'Látex Industrial',
      calibre: 'Calibre 25 (0.63 mm)',
      longitud: '30 cm',
      color: 'Negro / Rojo Bicolor',
      materiaPrima: 'Látex Natural reforzado con antioxidantes de alta resistencia',
      empaque: 'Caja máster x 12 docenas (144 pares)',
      descripcion: 'Guante semipesado diseñado para trabajo industrial continuo, agroindustria, floricultura y faenas severas. Alta resistencia al desgarro y punzonamiento.',
      normas: ['NTC 2219', 'EN 388 (Riesgos Mecánicos)', 'ISO 9001:2015'],
      fechaRev: 'Febrero 2026',
      pdfNombre: 'Ficha_Tecnica_Ruberplus_Cal25_Preinducol.pdf'
    },
    {
      id: 'ft-ind25',
      codigo: 'FT-IND25',
      titulo: 'Guante Industrial Indumax™ Químico Calibre 25',
      categoria: 'industrial',
      categoriaNombre: 'Látex Industrial',
      calibre: 'Calibre 25 Parejo',
      longitud: '35 cm con manga extendida',
      color: 'Verde Oscuro / Negro',
      materiaPrima: 'Látex de alto módulo elástico con aditivos resistentes',
      empaque: 'Caja máster x 10 docenas',
      descripcion: 'Protección para inmersión industrial en ácidos diluidos, álcalis, soluciones cáusticas y detergentes agresivos. Orillo enrollado antidesgarre.',
      normas: ['EN 374-1 (Riesgo Químico)', 'NTC 2219 Industrial', 'AQL 1.0 Cero Fugas'],
      fechaRev: 'Enero 2026',
      pdfNombre: 'Ficha_Tecnica_Indumax_Cal25_Preinducol.pdf'
    },
    {
      id: 'ft-rub50',
      codigo: 'FT-RUB50',
      titulo: 'Guante Extrapesado Rubber 50™ Máxima Protección',
      categoria: 'industrial',
      categoriaNombre: 'Látex Industrial',
      calibre: 'Calibre 50 Extrapesado (1.25 mm)',
      longitud: '38 cm (15 pulgadas)',
      color: 'Ámbar / Naranja',
      materiaPrima: 'Látex natural centrifugado de ultra alta densidad',
      empaque: 'Bolsa individual sellada / Caja x 60 pares',
      descripcion: 'Guante extrapesado para faenas severas, desbaste, tanques, curtido de pieles y trabajo pesado. Máxima durabilidad mecánica contra punzonamiento y corte.',
      normas: ['ASTM D120 Referencial', 'EN 388 Nivel 4 Abrasión', 'Prueba Hidrostática 100%'],
      fechaRev: 'Marzo 2026',
      pdfNombre: 'Ficha_Tecnica_Rubber50_Extrapesado_Preinducol.pdf'
    }
  ];

  // Estado del componente
  let currentCategory = 'all';
  let searchQuery = '';

  /**
   * Obtiene la lista actual de fichas desde localStorage
   */
  function getFichas() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('Error leyendo localStorage de fichas:', e);
    }
    // Inicializar con las de fábrica si no existen
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_FICHAS));
    return DEFAULT_FICHAS;
  }

  /**
   * Actualiza el badge numérico del Navbar
   */
  function syncBadge() {
    const list = getFichas();
    if (window.NavbarModule && typeof window.NavbarModule.updateFtBadge === 'function') {
      window.NavbarModule.updateFtBadge(list.length);
    }
  }

  /**
   * Renderiza el contenedor Modal en el DOM
   */
  function renderModalHTML() {
    return `
    <!-- Modal Flotante de Consulta de Fichas Técnicas -->
    <div class="fichas-public-overlay hidden" id="fichasPublicModal" role="dialog" aria-modal="true">
      <div class="fichas-public-modal-box">
        
        <!-- Botón Cerrar -->
        <button class="btn-close-ft-modal" id="btnCloseFtPublicModal" aria-label="Cerrar modal">×</button>

        <!-- Cabecera Editorial -->
        <div class="ft-modal-header text-center">
          <div class="badge-pill pill-red">
            <span>DOCUMENTACIÓN TÉCNICA OFICIAL</span>
          </div>
          <h2 class="ft-modal-title">Fichas Técnicas Preinducol S.A.S.</h2>
          <p class="ft-modal-subtitle">
            Consulta y descarga en formato PDF la especificación técnica avalada por ingeniería de calidad.
          </p>
        </div>

        <!-- Barra de Búsqueda y Filtros de Categoría -->
        <div class="ft-search-filters-row">
          <div class="ft-search-box">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" id="ftPublicSearchInput" placeholder="Buscar por código (ej: FT-RUB20), producto, calibre o norma...">
            <button class="btn-clear-search hidden" id="btnClearFtPublicSearch">&times;</button>
          </div>

          <div class="ft-filter-tabs" id="ftPublicFilterTabs">
            <button class="ft-tab active" data-category="all">Todas (<span id="countCatAll">0</span>)</button>
            <button class="ft-tab" data-category="hogar">Látex Hogar & Aseo (<span id="countCatHogar">0</span>)</button>
            <button class="ft-tab" data-category="industrial">Látex Industrial (<span id="countCatIndustrial">0</span>)</button>
            <button class="ft-tab" data-category="nitrilo">Nitrilo (<span id="countCatNitrilo">0</span>)</button>
            <button class="ft-tab" data-category="cuero">Cuero (<span id="countCatCuero">0</span>)</button>
          </div>
        </div>

        <!-- Cuadrícula de Tarjetas de Fichas -->
        <div class="fichas-cards-grid" id="fichasPublicGrid"></div>

        <!-- Estado Vacío -->
        <div class="ft-empty-state hidden" id="ftPublicEmptyState">
          <div class="empty-icon">📄</div>
          <h3>No se encontraron fichas técnicas</h3>
          <p>Prueba con otros términos de búsqueda o selecciona otra categoría.</p>
        </div>

      </div>
    </div>

    <!-- Visor / Descargador de PDF Oficial -->
    <div class="pdf-viewer-modal hidden" id="pdfPublicViewerModal">
      <div class="pdf-viewer-container">
        <div class="pdf-viewer-header">
          <div class="pdf-viewer-title-group">
            <span class="pdf-badge">DOCUMENTO CERTIFICADO</span>
            <h3 id="pdfViewerTitle">Ficha Técnica Oficial</h3>
            <span class="pdf-code" id="pdfViewerCode">FT-RUB20</span>
          </div>
          <div class="pdf-viewer-actions">
            <a href="#" class="btn-pdf-download" id="btnPdfDownloadLink" download>⬇ Descargar PDF</a>
            <button class="btn-close-pdf" id="btnClosePdfViewer">×</button>
          </div>
        </div>
        <div class="pdf-sheet-frame" id="pdfSheetFrame"></div>
      </div>
    </div>
    `;
  }

  /**
   * Renderiza las tarjetas de fichas según filtros
   */
  function renderCards() {
    const grid = document.getElementById('fichasPublicGrid');
    const empty = document.getElementById('ftPublicEmptyState');
    if (!grid) return;

    const list = getFichas();
    updateCategoryCounters(list);

    const filtered = list.filter(f => {
      const matchCat = (currentCategory === 'all') || (f.categoria === currentCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q ||
        (f.codigo && f.codigo.toLowerCase().includes(q)) ||
        (f.titulo && f.titulo.toLowerCase().includes(q)) ||
        (f.calibre && f.calibre.toLowerCase().includes(q)) ||
        (f.descripcion && f.descripcion.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (empty) empty.classList.remove('hidden');
      return;
    }

    if (empty) empty.classList.add('hidden');

    grid.innerHTML = filtered.map(ficha => `
      <article class="ft-card" data-category="${ficha.categoria}">
        <div class="ft-card-top">
          <span class="ft-card-cat">${ficha.categoriaNombre || ficha.categoria}</span>
          <span class="ft-card-code">${ficha.codigo}</span>
        </div>

        <h3 class="ft-card-title">${ficha.titulo}</h3>
        <p class="ft-card-desc">${ficha.descripcion || ''}</p>

        <div class="ft-specs-list">
          <div class="ft-spec-item">
            <span class="spec-label">CALIBRE</span>
            <strong class="spec-value">${ficha.calibre || 'Estándar'}</strong>
          </div>
          <div class="ft-spec-item">
            <span class="spec-label">LONGITUD</span>
            <strong class="spec-value">${ficha.longitud || '30 cm'}</strong>
          </div>
          <div class="ft-spec-item">
            <span class="spec-label">COLOR</span>
            <strong class="spec-value">${ficha.color || 'Estándar'}</strong>
          </div>
          <div class="ft-spec-item">
            <span class="spec-label">REVISIÓN</span>
            <strong class="spec-value">${ficha.fechaRev || '2026'}</strong>
          </div>
        </div>

        <div class="ft-card-footer">
          <button class="btn-ft-view" onclick="window.FichasModule.openPdfViewer('${ficha.id}')">
            <span>📄 Ver Ficha Técnica</span>
          </button>
        </div>
      </article>
    `).join('');
  }

  function updateCategoryCounters(list) {
    const countAll = document.getElementById('countCatAll');
    const countHogar = document.getElementById('countCatHogar');
    const countInd = document.getElementById('countCatIndustrial');
    const countNitrilo = document.getElementById('countCatNitrilo');
    const countCuero = document.getElementById('countCatCuero');

    if (countAll) countAll.textContent = list.length;
    if (countHogar) countHogar.textContent = list.filter(f => f.categoria === 'hogar').length;
    if (countInd) countInd.textContent = list.filter(f => f.categoria === 'industrial').length;
    if (countNitrilo) countNitrilo.textContent = list.filter(f => f.categoria === 'nitrilo').length;
    if (countCuero) countCuero.textContent = list.filter(f => f.categoria === 'cuero').length;
  }

  /**
   * Abre el Modal Público
   */
  function openPublicModal() {
    const modal = document.getElementById('fichasPublicModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      renderCards();
    }
  }

  /**
   * Cierra el Modal Público
   */
  function closePublicModal() {
    const modal = document.getElementById('fichasPublicModal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  /**
   * Abre el Visor de PDF para una ficha específica
   */
  function openPdfViewer(fichaId) {
    const list = getFichas();
    const ficha = list.find(f => f.id === fichaId);
    if (!ficha) return;

    const modal = document.getElementById('pdfPublicViewerModal');
    const title = document.getElementById('pdfViewerTitle');
    const code = document.getElementById('pdfViewerCode');
    const dlLink = document.getElementById('btnPdfDownloadLink');
    const frame = document.getElementById('pdfSheetFrame');

    if (!modal) return;

    title.textContent = ficha.titulo;
    code.textContent = ficha.codigo;

    // Si tiene archivo PDF real cargado en base64
    if (ficha.pdfData) {
      dlLink.href = ficha.pdfData;
      dlLink.download = ficha.pdfNombre || `${ficha.codigo}_Preinducol.pdf`;
      frame.innerHTML = `<iframe src="${ficha.pdfData}" style="width:100%;height:650px;border:none;"></iframe>`;
    } else {
      // Hoja técnica estructurada en alta fidelidad imprimible
      const dummyPdfUrl = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`PREINDUCOL S.A.S.\nFICHA TÉCNICA: ${ficha.codigo}\nPRODUCTO: ${ficha.titulo}\nCALIBRE: ${ficha.calibre}\nDESCRIPCIÓN: ${ficha.descripcion}`);
      dlLink.href = dummyPdfUrl;
      dlLink.download = `${ficha.codigo}_Preinducol.txt`;

      frame.innerHTML = `
        <div class="technical-document-paper">
          <div class="doc-header-row">
            <img src="assets/logo.png" alt="Preinducol" style="height:44px;">
            <div style="text-align:right;">
              <h4 style="color:#0f172a;margin:0;">PREINDUCOL S.A.S.</h4>
              <p style="margin:2px 0;font-size:0.8rem;color:#64748b;">NIT 800.123.456-7 • Rionegro, Colombia</p>
              <strong style="color:#059669;font-size:0.85rem;">${ficha.codigo}</strong>
            </div>
          </div>
          <hr style="margin:16px 0;border:none;border-top:1px solid #e2e8f0;">
          <h2 style="color:#0f172a;font-size:1.4rem;margin-bottom:8px;">${ficha.titulo}</h2>
          <p style="color:#475569;font-size:0.9rem;line-height:1.6;margin-bottom:20px;">${ficha.descripcion}</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;background:#f8fafc;padding:16px;border-radius:12px;border:1px solid #e2e8f0;margin-bottom:20px;">
            <div><span style="font-size:0.75rem;color:#64748b;">CALIBRE:</span> <br><strong>${ficha.calibre}</strong></div>
            <div><span style="font-size:0.75rem;color:#64748b;">LONGITUD:</span> <br><strong>${ficha.longitud}</strong></div>
            <div><span style="font-size:0.75rem;color:#64748b;">COLOR:</span> <br><strong>${ficha.color}</strong></div>
            <div><span style="font-size:0.75rem;color:#64748b;">FECHA REVISIÓN:</span> <br><strong>${ficha.fechaRev}</strong></div>
          </div>
          <div style="border-left:3px solid #059669;padding-left:12px;font-size:0.82rem;color:#475569;">
            Documento emitido por el Departamento de Ingeniería y Control de Calidad de Preinducol S.A.S.
          </div>
        </div>
      `;
    }

    modal.classList.remove('hidden');
  }

  function initListeners() {
    // Cerrar modal público con botón X
    const btnClose = document.getElementById('btnCloseFtPublicModal');
    if (btnClose) btnClose.addEventListener('click', closePublicModal);

    // Cerrar al hacer clic en el backdrop oscuro
    const modal = document.getElementById('fichasPublicModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closePublicModal();
      });
    }

    // Cerrar visor de PDF
    const btnClosePdf = document.getElementById('btnClosePdfViewer');
    const pdfModal = document.getElementById('pdfPublicViewerModal');
    if (btnClosePdf && pdfModal) {
      btnClosePdf.addEventListener('click', () => pdfModal.classList.add('hidden'));
      pdfModal.addEventListener('click', (e) => {
        if (e.target === pdfModal) pdfModal.classList.add('hidden');
      });
    }

    // Buscador interactivo
    const searchInput = document.getElementById('ftPublicSearchInput');
    const btnClearSearch = document.getElementById('btnClearFtPublicSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (btnClearSearch) {
          if (searchQuery) btnClearSearch.classList.remove('hidden');
          else btnClearSearch.classList.add('hidden');
        }
        renderCards();
      });
    }

    if (btnClearSearch && searchInput) {
      btnClearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        btnClearSearch.classList.add('hidden');
        renderCards();
      });
    }

    // Filtros por pestaña de categoría
    const tabs = document.querySelectorAll('#ftPublicFilterTabs .ft-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-category');
        renderCards();
      });
    });

    // ESC para cerrar modales
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePublicModal();
        if (pdfModal) pdfModal.classList.add('hidden');
      }
    });

    // Escucha en TIEMPO REAL de cambios hechos en 'admin.html'
    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) {
        syncBadge();
        renderCards();
      }
    });
  }

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      container.innerHTML = renderModalHTML();
      initListeners();
      syncBadge();
    }
  }

  return {
    mount,
    openPublicModal,
    closePublicModal,
    openPdfViewer,
    syncBadge
  };
})();
