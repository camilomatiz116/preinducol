/**
 * PREINDUCOL S.A.S. - MÓDULO: FICHAS TÉCNICAS & PANEL ADMINISTRADOR DE PDF
 * Centro de documentación técnica oficial, catálogo dinámico, visor de PDF
 * y panel de administración con PIN (1234) para subir, editar y eliminar fichas.
 * Sincronizado reactivamente con el badge del menú principal.
 */
window.FichasModule = (function () {
  const mountId = 'fichas-mount';
  const STORAGE_KEY = 'preinducol_fichas_tecnicas_db';
  const ADMIN_PIN = '1234';

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
      empaque: 'Docena empaque individual / Caja máster x 12 docenas (144 pares)',
      descripcion: 'Guante ergonómico de alta pureza con labrado antideslizante en palma y dedos. Formulado con bactericida activo que inhibe 99.9% de hongos y bacterias. Aprobado para contacto seguro en labores de limpieza, manipulación de alimentos y hotelería.',
      normas: ['NTC 2219 / ASTM D4679', 'Bactericida Activo Grado Aprobado', 'Biodegradabilidad 100%'],
      fechaRev: 'Enero 2026',
      pdfData: null,
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
      descripcion: 'Guante semipesado diseñado para trabajo industrial continuo, agroindustria, plantas florícolas y aseo severo. Mayor resistencia al desgarro, punzonamiento y abrasión mecánica.',
      normas: ['NTC 2219', 'EN 388 (Riesgos Mecánicos)', 'ISO 9001:2015'],
      fechaRev: 'Febrero 2026',
      pdfData: null,
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
      materiaPrima: 'Látex de alto módulo elástico con aditivos anticongelantes',
      empaque: 'Caja máster x 10 docenas',
      descripcion: 'Protección para inmersión industrial en ácidos diluidos, álcalis, soluciones cáusticas y detergentes agresivos. Orillo enrollado que evita desgarres al calzar.',
      normas: ['EN 374-1 (Riesgo Químico)', 'NTC 2219 Industrial', 'Cero Fugas Pinhole AQL 1.0'],
      fechaRev: 'Enero 2026',
      pdfData: null,
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
      color: 'Ámbar / Naranja Dieléctrico',
      materiaPrima: 'Látex natural centrifugado de ultra alta densidad',
      empaque: 'Bolsa individual sellada / Caja x 60 pares',
      descripcion: 'Guante extrapesado para faenas severas, desbaste, manipulación de tanques, curtido de pieles y trabajo pesado. Máxima durabilidad mecánica contra punzamiento y corte.',
      normas: ['ASTM D120 Referencial', 'EN 388 Nivel 4 Abrasión', 'Prueba Hidrostática 100%'],
      fechaRev: 'Marzo 2026',
      pdfData: null,
      pdfNombre: 'Ficha_Tecnica_Rubber50_Extrapesado_Preinducol.pdf'
    }
  ];

  let currentCategory = 'all';
  let searchQuery = '';
  let pendingPdfFile = null;

  function loadFichas() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Error leyendo localStorage de fichas:', e);
    }
    saveFichas(DEFAULT_FICHAS);
    return DEFAULT_FICHAS;
  }

  function saveFichas(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      notifyBadgeUpdate(list.length);
    } catch (e) {
      console.error('Error guardando fichas en localStorage:', e);
    }
  }

  function notifyBadgeUpdate(count) {
    if (window.NavbarModule && typeof window.NavbarModule.updateFtBadge === 'function') {
      window.NavbarModule.updateFtBadge(count);
    }
    const adminCount = document.getElementById('adminFtBadgeCount');
    if (adminCount) adminCount.textContent = count;
    const totalLabel = document.getElementById('ftTotalCountLabel');
    if (totalLabel) totalLabel.textContent = `${count} Fichas Técnicas Oficiales`;
  }

  function renderSectionHTML() {
    return `
    <section class="section-block section-fichas-tecnicas" id="fichas-tecnicas">
      <div class="container-max">
        
        <!-- Encabezado Editorial -->
        <div class="header-editorial">
          <div class="badge-pill pill-red">
            <span>CENTRO DE DOCUMENTACIÓN TÉCNICA</span>
          </div>
          <h2 class="title-editorial">Fichas Técnicas Oficiales Preinducol S.A.S.</h2>
          <p class="desc-editorial">
            Descarga o consulta en línea la ficha técnica oficial de cada línea de producto. Información avalada por nuestro departamento de ingeniería y control de calidad.
          </p>
        </div>

        <!-- Barra de Estado y Acceso de Administrador -->
        <div class="ft-admin-status-bar">
          <div class="ft-counter-box">
            <span class="ft-status-dot"></span>
            <span>Catálogo Documental: <strong id="ftTotalCountLabel">4 Fichas Técnicas Oficiales</strong></span>
          </div>

          <div class="ft-admin-actions">
            <button class="btn-admin-manage" id="btnOpenAdminModal">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
              </svg>
              <span>Panel de Administración (Subir / Editar PDF)</span>
            </button>
          </div>
        </div>

        <!-- Barra de Filtros y Búsqueda -->
        <div class="ft-search-filters-row">
          <div class="ft-search-box">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" id="ftSearchInput" placeholder="Buscar por título, código (ej: FT-RUB20), calibre o aplicación...">
            <button class="btn-clear-search hidden" id="btnClearFtSearch">&times;</button>
          </div>

          <div class="ft-filter-tabs" id="ftFilterTabs">
            <button class="ft-tab active" data-category="all">Todas (<span id="countCatAll">4</span>)</button>
            <button class="ft-tab" data-category="hogar">Látex Hogar & Aseo (<span id="countCatHogar">2</span>)</button>
            <button class="ft-tab" data-category="industrial">Látex Industrial (<span id="countCatIndustrial">2</span>)</button>
            <button class="ft-tab" data-category="nitrilo">Nitrilo (<span id="countCatNitrilo">0</span>)</button>
            <button class="ft-tab" data-category="cuero">Cuero & Soldadura (<span id="countCatCuero">0</span>)</button>
          </div>
        </div>

        <!-- Cuadrícula Dinámica de Fichas Técnicas -->
        <div class="fichas-cards-grid" id="fichasGrid"></div>

        <!-- Estado Vacío -->
        <div class="ft-empty-state hidden" id="ftEmptyState">
          <div class="empty-icon">📄</div>
          <h3>No se encontraron fichas técnicas</h3>
          <p>Intenta con otros términos de búsqueda o selecciona otra categoría.</p>
          <button class="btn-pill-studds btn-pill-sm" id="btnResetFtFilters">Restablecer Filtros</button>
        </div>

      </div>
    </section>

    <!-- =============================================================== -->
    <!-- MODAL 1: VISOR DOCUMENTAL DE PDF OFICIAL                        -->
    <!-- =============================================================== -->
    <div class="pdf-modal-overlay hidden" id="pdfViewerModal">
      <div class="pdf-modal-container">
        <div class="pdf-modal-header">
          <div class="pdf-header-info">
            <div class="pdf-doc-badge">DOCUMENTO TÉCNICO OFICIAL</div>
            <h3 id="pdfModalTitle">Ficha Técnica Oficial</h3>
            <span class="pdf-ref-tag" id="pdfModalRef">REFERENCIA: FT-RUB20</span>
          </div>
          <div class="pdf-header-controls">
            <button class="btn-pdf-action btn-pdf-print" id="btnPdfPrint" title="Imprimir Ficha Técnica">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              <span>Imprimir</span>
            </button>
            <a href="#" class="btn-pdf-action btn-pdf-download" id="btnPdfDirectDownload" download="Ficha_Tecnica_Preinducol.pdf">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Descargar PDF</span>
            </a>
            <button class="btn-close-pdf-modal" id="btnClosePdfModal" title="Cerrar Visor">&times;</button>
          </div>
        </div>
        <div class="pdf-modal-body" id="pdfModalBody"></div>
      </div>
    </div>

    <!-- =============================================================== -->
    <!-- MODAL 2: PANEL DE ADMINISTRACIÓN DE FICHAS TÉCNICAS (CON PIN)   -->
    <!-- =============================================================== -->
    <div class="admin-modal-overlay hidden" id="adminFtModal">
      <div class="admin-modal-container">
        <div class="admin-modal-header">
          <div class="admin-header-title">
            <span class="admin-badge-lock">🔐 MÓDULO ADMINISTRADOR</span>
            <h3>Gestor de Fichas Técnicas Preinducol</h3>
          </div>
          <button class="btn-close-admin-modal" id="btnCloseAdminModal">&times;</button>
        </div>

        <!-- Pantalla 1: Acceso Seguro con PIN -->
        <div class="admin-gate-screen" id="adminGateScreen">
          <div class="gate-icon-box">🛡️</div>
          <h3>Acceso Restringido para Administradores</h3>
          <p>Ingresa el código PIN maestro para cargar, editar o eliminar fichas técnicas y archivos PDF oficiales.</p>
          <div class="pin-input-group">
            <input type="password" id="adminPinInput" placeholder="Clave (Por defecto: 1234)" autofocus>
            <button class="btn-pin-submit" id="btnAdminPinSubmit">Desbloquear</button>
          </div>
          <span class="pin-error-msg hidden" id="adminPinError">Clave incorrecta. Por favor intenta de nuevo.</span>
          <span class="pin-hint-text">Nota de demostración: La clave de fábrica es <strong>1234</strong></span>
        </div>

        <!-- Pantalla 2: Panel de Gestión (Dashboard) -->
        <div class="admin-dashboard-screen hidden" id="adminDashboardScreen">
          <div class="admin-tabs-nav">
            <button class="admin-nav-tab active" data-tab="upload" id="tabBtnUpload">
              <span>➕ Publicar / Cargar Ficha Técnica (PDF)</span>
            </button>
            <button class="admin-nav-tab" data-tab="list" id="tabBtnList">
              <span>📋 Gestionar Fichas Publicadas (<span id="adminFtBadgeCount">4</span>)</span>
            </button>
          </div>

          <!-- Pestaña 1: Formulario de Carga / Edición -->
          <div class="admin-tab-content" id="uploadTabContent">
            <form id="adminUploadForm" class="admin-form-pro">
              <input type="hidden" id="adminEditingFichaId" value="">
              <div class="form-row-2">
                <div class="form-field">
                  <label for="adminFtTitulo">Título de la Ficha Técnica *</label>
                  <input type="text" id="adminFtTitulo" required placeholder="Ej: Guante Ruberplus™ Calibre 20">
                </div>
                <div class="form-field">
                  <label for="adminFtCodigo">Código de Referencia *</label>
                  <input type="text" id="adminFtCodigo" required placeholder="Ej: FT-RUB20">
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-field">
                  <label for="adminFtCategoria">Línea de Producto *</label>
                  <select id="adminFtCategoria" required>
                    <option value="hogar">Látex Hogar & Aseo</option>
                    <option value="industrial" selected>Látex Industrial</option>
                    <option value="nitrilo">Nitrilo & Químico</option>
                    <option value="cuero">Cuero & Soldadura</option>
                  </select>
                </div>
                <div class="form-field">
                  <label for="adminFtCalibre">Calibre y Longitud *</label>
                  <input type="text" id="adminFtCalibre" required placeholder="Ej: Calibre 20 Parejo • 30 cm">
                </div>
              </div>

              <div class="form-field">
                <label for="adminFtDescripcion">Descripción Técnica y Aplicaciones *</label>
                <textarea id="adminFtDescripcion" rows="3" required placeholder="Describe la formulación (ej: Látex 100% natural biodegradable), bactericida activo y usos industriales recomendados..."></textarea>
              </div>

              <div class="form-row-2">
                <div class="form-field">
                  <label for="adminFtMateria">Materia Prima Principal</label>
                  <input type="text" id="adminFtMateria" placeholder="Ej: Látex Natural Hevea Brasiliensis">
                </div>
                <div class="form-field">
                  <label for="adminFtEmpaque">Presentación y Empaque</label>
                  <input type="text" id="adminFtEmpaque" placeholder="Ej: Cajas máster x 12 docenas (144 pares)">
                </div>
              </div>

              <!-- Carga de Archivo PDF -->
              <div class="form-field">
                <label>Archivo PDF Oficial de la Ficha Técnica</label>
                <div class="pdf-drop-zone" id="pdfDropZone">
                  <input type="file" id="adminPdfFileInput" accept="application/pdf" class="file-input-hidden">
                  <div class="drop-zone-content" id="dropZoneContent">
                    <div class="drop-icon">📎</div>
                    <strong id="dropZonePrompt">Arrastra tu archivo PDF aquí o haz clic para seleccionarlo</strong>
                    <span id="dropZoneInfo">Archivos PDF oficiales (.pdf) hasta 15MB</span>
                  </div>
                  <div class="file-preview-strip hidden" id="filePreviewStrip">
                    <div class="pdf-mini-badge">PDF</div>
                    <div class="preview-pdf-info">
                      <strong id="previewFileName">ficha_tecnica.pdf</strong>
                      <span id="previewFileSize">1.2 MB</span>
                    </div>
                    <button type="button" class="btn-remove-file" id="btnRemoveFile" title="Quitar archivo">&times;</button>
                  </div>
                </div>
                <small class="upload-note">Si no adjuntas un archivo PDF personalizado, el sistema generará automáticamente la hoja documental certificada con diseño Preinducol.</small>
              </div>

              <div class="admin-form-actions">
                <button type="button" class="btn-cancel-admin" id="btnCancelAdminEdit">Cancelar</button>
                <button type="submit" class="btn-save-ft" id="btnSaveFtSubmit">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                  <span id="btnSaveFtLabel">Publicar Ficha Técnica y Reflejar en Menú</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Pestaña 2: Lista de Fichas Publicadas -->
          <div class="admin-tab-content hidden" id="listTabContent">
            <div class="admin-list-toolbar">
              <span class="toolbar-info">Fichas técnicas activas en el sitio:</span>
              <button class="btn-reset-default-fts" id="btnResetDefaultFts" title="Restaura las 4 fichas iniciales">
                ↺ Restaurar Fichas de Fábrica
              </button>
            </div>
            <div class="admin-fts-list" id="adminFtsList"></div>
          </div>
        </div>

      </div>
    </div>
    `;
  }

  function renderCards() {
    const list = loadFichas();
    const grid = document.getElementById('fichasGrid');
    const emptyState = document.getElementById('ftEmptyState');
    if (!grid) return;

    let filtered = list.filter(item => {
      const matchCat = currentCategory === 'all' || item.categoria === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q ||
        item.titulo.toLowerCase().includes(q) ||
        item.codigo.toLowerCase().includes(q) ||
        item.calibre.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    // Actualizar contadores de pestañas
    updateTabCounts(list);

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(ficha => {
      const isCustomPdf = !!ficha.pdfData;
      return `
      <div class="ficha-card" data-id="${ficha.id}">
        <div class="ficha-card-header">
          <span class="ficha-cat-badge badge-${ficha.categoria}">${ficha.categoriaNombre || ficha.categoria}</span>
          <span class="ficha-code-badge">${ficha.codigo}</span>
        </div>

        <div class="ficha-card-body">
          <h3 class="ficha-card-title">${ficha.titulo}</h3>
          <p class="ficha-card-desc">${ficha.descripcion}</p>

          <div class="ficha-specs-grid">
            <div class="spec-cell">
              <span class="spec-label">Calibre:</span>
              <strong class="spec-value">${ficha.calibre}</strong>
            </div>
            <div class="spec-cell">
              <span class="spec-label">Longitud:</span>
              <strong class="spec-value">${ficha.longitud}</strong>
            </div>
            <div class="spec-cell">
              <span class="spec-label">Color:</span>
              <strong class="spec-value">${ficha.color}</strong>
            </div>
            <div class="spec-cell">
              <span class="spec-label">Certificación:</span>
              <strong class="spec-value">ISO 9001 / NTC 2219</strong>
            </div>
          </div>
        </div>

        <div class="ficha-card-footer">
          <div class="pdf-indicator">
            <span class="pdf-icon-indicator">📄</span>
            <span class="pdf-status-text">${isCustomPdf ? 'PDF Oficial Adjunto' : 'Hoja Oficial de Fábrica'}</span>
          </div>

          <div class="ficha-actions-row">
            <button class="btn-action-ft btn-view-ft" data-id="${ficha.id}">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>Ver Ficha PDF</span>
            </button>
            <button class="btn-action-ft btn-download-ft" data-id="${ficha.id}">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Descargar</span>
            </button>
          </div>
        </div>
      </div>
      `;
    }).join('');

    // Listeners para botones de ver y descargar en tarjetas
    grid.querySelectorAll('.btn-view-ft').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openPdfViewer(id);
      });
    });

    grid.querySelectorAll('.btn-download-ft').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        downloadFichaPdf(id);
      });
    });
  }

  function updateTabCounts(list) {
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

  function renderAdminList() {
    const list = loadFichas();
    const container = document.getElementById('adminFtsList');
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = '<div class="empty-list-notice">No hay fichas técnicas registradas. Usa el formulario para agregar una.</div>';
      return;
    }

    container.innerHTML = list.map(item => `
      <div class="admin-ft-row-card">
        <div class="admin-row-meta">
          <span class="admin-row-badge">${item.codigo}</span>
          <div class="admin-row-info">
            <h4>${item.titulo}</h4>
            <span>${item.categoriaNombre || item.categoria} • ${item.calibre} • ${item.pdfData ? 'Archivo PDF Cargado' : 'Formato Estándar'}</span>
          </div>
        </div>
        <div class="admin-row-actions">
          <button class="btn-row-edit" data-id="${item.id}">✏️ Editar</button>
          <button class="btn-row-delete" data-id="${item.id}">🗑️ Eliminar</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-row-edit').forEach(b => {
      b.addEventListener('click', () => {
        editFichaInAdmin(b.getAttribute('data-id'));
      });
    });

    container.querySelectorAll('.btn-row-delete').forEach(b => {
      b.addEventListener('click', () => {
        deleteFichaFromAdmin(b.getAttribute('data-id'));
      });
    });
  }

  function openPdfViewer(fichaId) {
    const list = loadFichas();
    const ficha = list.find(f => f.id === fichaId);
    if (!ficha) return;

    const modal = document.getElementById('pdfViewerModal');
    const titleEl = document.getElementById('pdfModalTitle');
    const refEl = document.getElementById('pdfModalRef');
    const bodyEl = document.getElementById('pdfModalBody');
    const directDl = document.getElementById('btnPdfDirectDownload');

    if (titleEl) titleEl.textContent = ficha.titulo;
    if (refEl) refEl.textContent = `REFERENCIA: ${ficha.codigo} • PREINDUCOL S.A.S. • REV. 2026`;

    if (ficha.pdfData) {
      // PDF base64 adjunto
      bodyEl.innerHTML = `<iframe src="${ficha.pdfData}" style="width:100%; height:750px; border:none; border-radius:8px;"></iframe>`;
      if (directDl) {
        directDl.href = ficha.pdfData;
        directDl.download = ficha.pdfNombre || `${ficha.codigo}_Preinducol.pdf`;
      }
    } else {
      // Hoja oficial institucional maquetada
      bodyEl.innerHTML = generateOfficialSheetHtml(ficha);
      if (directDl) {
        // Enlace para imprimir o guardar
        directDl.href = '#';
        directDl.onclick = (e) => {
          e.preventDefault();
          window.print();
        };
      }
    }

    if (modal) modal.classList.remove('hidden');
  }

  function generateOfficialSheetHtml(ficha) {
    return `
    <div class="official-pdf-sheet" id="printReadySheet">
      <div class="sheet-header-grid">
        <img src="assets/logo.png" alt="Preinducol SAS" class="sheet-brand-logo">
        <div class="sheet-header-titles">
          <h2>PREINDUCOL S.A.S.</h2>
          <p>SEGURIDAD & ALTA INGENIERÍA EN LÁTEX • NIT: 900.284.152-1</p>
          <small>Planta Industrial de Fabricación • Bogotá D.C., Colombia</small>
        </div>
        <div class="sheet-code-box">
          <strong>${ficha.codigo}</strong>
          <span>REV. OFICIAL 2026</span>
        </div>
      </div>

      <div class="sheet-body-content">
        <h3 class="sheet-doc-title">${ficha.titulo}</h3>
        <p class="sheet-lead-desc">${ficha.descripcion}</p>

        <h4 class="sheet-section-title">1. ESPECIFICACIONES TÉCNICAS</h4>
        <table class="sheet-data-table">
          <tr><th>Parámetro</th><th>Especificación Garantizada</th></tr>
          <tr><td>Materia Prima</td><td>${ficha.materiaPrima || 'Látex 100% Natural Biodegradable'}</td></tr>
          <tr><td>Calibre / Espesor</td><td>${ficha.calibre}</td></tr>
          <tr><td>Longitud Total</td><td>${ficha.longitud}</td></tr>
          <tr><td>Color</td><td>${ficha.color}</td></tr>
          <tr><td>Acabado Interior / Exterior</td><td>Satinado sin talco / Labrado antideslizante diamante en palma y dedos</td></tr>
          <tr><td>Bactericida</td><td>Bactericida Activo incorporado en formulación (Inhibición 99.9%)</td></tr>
        </table>

        <h4 class="sheet-section-title">2. NORMAS Y CONTROL DE CALIDAD</h4>
        <table class="sheet-data-table">
          <tr><th>Normativa</th><th>Alcance</th></tr>
          ${(ficha.normas || ['NTC 2219', 'ISO 9001:2015']).map(n => `<tr><td>${n}</td><td>Cumple y certificado en planta Preinducol</td></tr>`).join('')}
          <tr><td>Nivel de Inspección AQL</td><td>AQL 1.0 Hermeticidad electrónica 100% libre de poros</td></tr>
        </table>

        <h4 class="sheet-section-title">3. ALMACENAMIENTO Y PRESENTACIÓN</h4>
        <p class="sheet-text">Presentación: <strong>${ficha.empaque || 'Caja máster x 12 docenas'}</strong>. Conservar en lugar fresco, seco (15°C a 25°C) protegido de la luz solar directa y fuentes de ozono.</p>
      </div>

      <div class="sheet-footer-sign">
        <div class="sign-box">
          <div class="sign-line"></div>
          <strong>Ing. Control de Calidad</strong>
          <span>Preinducol S.A.S. - Laboratorio</span>
        </div>
        <div class="sign-box">
          <div class="sign-line"></div>
          <strong>Dirección Técnica & Producción</strong>
          <span>Preinducol S.A.S. - Planta</span>
        </div>
      </div>
    </div>
    `;
  }

  function downloadFichaPdf(fichaId) {
    const list = loadFichas();
    const ficha = list.find(f => f.id === fichaId);
    if (!ficha) return;

    if (ficha.pdfData) {
      const a = document.createElement('a');
      a.href = ficha.pdfData;
      a.download = ficha.pdfNombre || `${ficha.codigo}_Preinducol.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      openPdfViewer(fichaId);
      setTimeout(() => window.print(), 400);
    }
  }

  function editFichaInAdmin(fichaId) {
    const list = loadFichas();
    const ficha = list.find(f => f.id === fichaId);
    if (!ficha) return;

    document.getElementById('adminEditingFichaId').value = ficha.id;
    document.getElementById('adminFtTitulo').value = ficha.titulo;
    document.getElementById('adminFtCodigo').value = ficha.codigo;
    document.getElementById('adminFtCategoria').value = ficha.categoria;
    document.getElementById('adminFtCalibre').value = ficha.calibre;
    document.getElementById('adminFtDescripcion').value = ficha.descripcion;
    document.getElementById('adminFtMateria').value = ficha.materiaPrima || '';
    document.getElementById('adminFtEmpaque').value = ficha.empaque || '';

    const labelBtn = document.getElementById('btnSaveFtLabel');
    if (labelBtn) labelBtn.textContent = 'Actualizar Ficha Técnica';

    // Activar pestaña de formulario
    document.getElementById('tabBtnUpload').click();
  }

  function deleteFichaFromAdmin(fichaId) {
    if (!confirm('¿Estás seguro de que deseas eliminar esta ficha técnica?')) return;
    let list = loadFichas();
    list = list.filter(f => f.id !== fichaId);
    saveFichas(list);
    renderCards();
    renderAdminList();
  }

  function resetToDefaults() {
    if (!confirm('¿Restaurar las 4 fichas técnicas oficiales iniciales?')) return;
    saveFichas(DEFAULT_FICHAS);
    renderCards();
    renderAdminList();
    alert('Fichas técnicas restablecidas a los valores de fábrica.');
  }

  function openAdminModal() {
    const modal = document.getElementById('adminFtModal');
    const gate = document.getElementById('adminGateScreen');
    const dash = document.getElementById('adminDashboardScreen');
    const pinInput = document.getElementById('adminPinInput');
    const pinError = document.getElementById('adminPinError');

    if (modal) modal.classList.remove('hidden');
    if (gate) gate.classList.remove('hidden');
    if (dash) dash.classList.add('hidden');
    if (pinError) pinError.classList.add('hidden');
    if (pinInput) {
      pinInput.value = '';
      pinInput.focus();
    }
  }

  function searchAndHighlight(code) {
    const input = document.getElementById('ftSearchInput');
    const btnClear = document.getElementById('btnClearFtSearch');
    if (input) {
      input.value = code;
      searchQuery = code;
      if (btnClear) btnClear.classList.remove('hidden');
      renderCards();
    }
  }

  function initListeners() {
    // 1. Botón para abrir admin
    const btnOpenAdmin = document.getElementById('btnOpenAdminModal');
    if (btnOpenAdmin) btnOpenAdmin.addEventListener('click', openAdminModal);

    const btnCloseAdmin = document.getElementById('btnCloseAdminModal');
    const adminModal = document.getElementById('adminFtModal');
    if (btnCloseAdmin && adminModal) {
      btnCloseAdmin.addEventListener('click', () => adminModal.classList.add('hidden'));
    }

    // 2. PIN submit
    const btnPinSubmit = document.getElementById('btnAdminPinSubmit');
    const pinInput = document.getElementById('adminPinInput');
    const pinError = document.getElementById('adminPinError');
    const gateScreen = document.getElementById('adminGateScreen');
    const dashScreen = document.getElementById('adminDashboardScreen');

    const handlePinCheck = () => {
      if (pinInput.value.trim() === ADMIN_PIN) {
        gateScreen.classList.add('hidden');
        dashScreen.classList.remove('hidden');
        renderAdminList();
      } else {
        if (pinError) pinError.classList.remove('hidden');
        pinInput.focus();
      }
    };

    if (btnPinSubmit) btnPinSubmit.addEventListener('click', handlePinCheck);
    if (pinInput) {
      pinInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handlePinCheck();
      });
    }

    // 3. Tabs en el Dashboard de Admin
    const tabUpload = document.getElementById('tabBtnUpload');
    const tabList = document.getElementById('tabBtnList');
    const uploadContent = document.getElementById('uploadTabContent');
    const listContent = document.getElementById('listTabContent');

    if (tabUpload && tabList) {
      tabUpload.addEventListener('click', () => {
        tabUpload.classList.add('active');
        tabList.classList.remove('active');
        uploadContent.classList.remove('hidden');
        listContent.classList.add('hidden');
      });

      tabList.addEventListener('click', () => {
        tabList.classList.add('active');
        tabUpload.classList.remove('active');
        listContent.classList.remove('hidden');
        uploadContent.classList.add('hidden');
        renderAdminList();
      });
    }

    // 4. File input y Drag & Drop para PDF
    const fileInput = document.getElementById('adminPdfFileInput');
    const dropZone = document.getElementById('pdfDropZone');
    const previewStrip = document.getElementById('filePreviewStrip');
    const dropContent = document.getElementById('dropZoneContent');
    const previewName = document.getElementById('previewFileName');
    const previewSize = document.getElementById('previewFileSize');
    const btnRemoveFile = document.getElementById('btnRemoveFile');

    if (dropZone && fileInput) {
      dropZone.addEventListener('click', (e) => {
        if (e.target !== btnRemoveFile && !btnRemoveFile.contains(e.target)) {
          fileInput.click();
        }
      });

      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          handleSelectedPdf(fileInput.files[0]);
        }
      });

      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-active');
      });

      dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-active');
      });

      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-active');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleSelectedPdf(e.dataTransfer.files[0]);
        }
      });
    }

    function handleSelectedPdf(file) {
      if (file.type !== 'application/pdf') {
        alert('Por favor selecciona un archivo PDF válido (.pdf).');
        return;
      }
      if (file.size > 15 * 1024 * 1024) {
        alert('El archivo supera los 15MB permitidos.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        pendingPdfFile = {
          nombre: file.name,
          data: e.target.result
        };
        if (previewName) previewName.textContent = file.name;
        if (previewSize) previewSize.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
        if (dropContent) dropContent.classList.add('hidden');
        if (previewStrip) previewStrip.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }

    if (btnRemoveFile) {
      btnRemoveFile.addEventListener('click', (e) => {
        e.stopPropagation();
        pendingPdfFile = null;
        if (fileInput) fileInput.value = '';
        if (dropContent) dropContent.classList.remove('hidden');
        if (previewStrip) previewStrip.classList.add('hidden');
      });
    }

    // 5. Submit del Formulario Admin
    const form = document.getElementById('adminUploadForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const editingId = document.getElementById('adminEditingFichaId').value;
        const titulo = document.getElementById('adminFtTitulo').value.trim();
        const codigo = document.getElementById('adminFtCodigo').value.trim();
        const categoria = document.getElementById('adminFtCategoria').value;
        const calibre = document.getElementById('adminFtCalibre').value.trim();
        const descripcion = document.getElementById('adminFtDescripcion').value.trim();
        const materia = document.getElementById('adminFtMateria').value.trim();
        const empaque = document.getElementById('adminFtEmpaque').value.trim();

        const catNames = {
          hogar: 'Látex Hogar & Aseo',
          industrial: 'Látex Industrial',
          nitrilo: 'Nitrilo & Químico',
          cuero: 'Cuero & Soldadura'
        };

        let list = loadFichas();

        if (editingId) {
          // Editar existente
          const idx = list.findIndex(f => f.id === editingId);
          if (idx !== -1) {
            list[idx].titulo = titulo;
            list[idx].codigo = codigo;
            list[idx].categoria = categoria;
            list[idx].categoriaNombre = catNames[categoria] || categoria;
            list[idx].calibre = calibre;
            list[idx].descripcion = descripcion;
            list[idx].materiaPrima = materia;
            list[idx].empaque = empaque;
            if (pendingPdfFile) {
              list[idx].pdfData = pendingPdfFile.data;
              list[idx].pdfNombre = pendingPdfFile.nombre;
            }
          }
        } else {
          // Crear nueva ficha
          const newFicha = {
            id: 'ft-' + Date.now(),
            codigo: codigo,
            titulo: titulo,
            categoria: categoria,
            categoriaNombre: catNames[categoria] || categoria,
            calibre: calibre,
            longitud: '30 cm estándar',
            color: 'Látex Seleccionado',
            materiaPrima: materia || 'Látex 100% Natural Biodegradable',
            empaque: empaque || 'Caja x 12 docenas',
            descripcion: descripcion,
            normas: ['NTC 2219', 'Bactericida Activo Aprobado', 'ISO 9001:2015'],
            fechaRev: '2026',
            pdfData: pendingPdfFile ? pendingPdfFile.data : null,
            pdfNombre: pendingPdfFile ? pendingPdfFile.nombre : `${codigo}_Preinducol.pdf`
          };
          list.unshift(newFicha);
        }

        saveFichas(list);
        renderCards();
        renderAdminList();

        // Limpiar formulario
        form.reset();
        document.getElementById('adminEditingFichaId').value = '';
        document.getElementById('btnSaveFtLabel').textContent = 'Publicar Ficha Técnica y Reflejar en Menú';
        if (btnRemoveFile) btnRemoveFile.click();

        alert(`Ficha técnica ${codigo} guardada con éxito. El contador del menú principal ha sido actualizado.`);
        tabList.click();
      });
    }

    // Cancelar edición
    const btnCancel = document.getElementById('btnCancelAdminEdit');
    if (btnCancel && form) {
      btnCancel.addEventListener('click', () => {
        form.reset();
        document.getElementById('adminEditingFichaId').value = '';
        document.getElementById('btnSaveFtLabel').textContent = 'Publicar Ficha Técnica y Reflejar en Menú';
        if (btnRemoveFile) btnRemoveFile.click();
        tabList.click();
      });
    }

    // Restaurar de fábrica
    const btnReset = document.getElementById('btnResetDefaultFts');
    if (btnReset) btnReset.addEventListener('click', resetToDefaults);

    // 6. Búsqueda y Filtros en la sección
    const searchInput = document.getElementById('ftSearchInput');
    const btnClearSearch = document.getElementById('btnClearFtSearch');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value;
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

    const tabs = document.querySelectorAll('.ft-filter-tabs .ft-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-category');
        renderCards();
      });
    });

    const btnResetFilters = document.getElementById('btnResetFtFilters');
    if (btnResetFilters) {
      btnResetFilters.addEventListener('click', () => {
        currentCategory = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (btnClearSearch) btnClearSearch.classList.add('hidden');
        tabs.forEach(t => {
          if (t.getAttribute('data-category') === 'all') t.classList.add('active');
          else t.classList.remove('active');
        });
        renderCards();
      });
    }

    // 7. Controles del Visor de PDF
    const btnClosePdf = document.getElementById('btnClosePdfModal');
    const pdfModal = document.getElementById('pdfViewerModal');
    const btnPrint = document.getElementById('btnPdfPrint');

    if (btnClosePdf && pdfModal) {
      btnClosePdf.addEventListener('click', () => pdfModal.classList.add('hidden'));
    }

    if (btnPrint) {
      btnPrint.addEventListener('click', () => window.print());
    }
  }

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      container.innerHTML = renderSectionHTML();
      renderCards();
      initListeners();
      const currentList = loadFichas();
      notifyBadgeUpdate(currentList.length);
    }
  }

  return {
    mount,
    openAdminModal,
    openPdfViewer,
    searchAndHighlight
  };
})();
