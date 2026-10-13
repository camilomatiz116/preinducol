/**
 * PREINDUCOL S.A.S. - MÓDULO: VISOR 3D HOLOGRÁFICO
 * Motor WebGL Three.js con inspección 360°, hotspots interactivos,
 * conmutación de materiales y panel de telemetría de laboratorio.
 */
window.Visor3DModule = (function () {
  const mountId = 'visor3d-mount';

  function renderHTML() {
    return `
  <section class="section-block bg-lab-studio" id="visor-3d">
    <div class="container-max">
      
      <!-- Encabezado del Laboratorio 3D -->
      <div class="lab-header">
        <div class="lab-title-row">
          <div class="lab-live-badge">
            <span class="pulse-live"></span>
            <span>LABORATORIO DE INSPECCIÓN TÉCNICA 3D</span>
          </div>
          <span class="lab-model-tag">PRODUCTO: GUANTE RUBERPLUS™ PREINDUCOL S.A.S.</span>
        </div>
        <h2 class="lab-title">Inspección Holográfica 360° en Tiempo Real</h2>
        <p class="lab-subtitle">
          Manipula el modelo orgánico oficial en 3D. Rota libremente con el mouse, conmuta los 4 colores de fabricación, selecciona tallas y pulsa los pines para ver las especificaciones de la ficha técnica oficial.
        </p>
      </div>

      <!-- Layout del Laboratorio 3D -->
      <div class="lab-layout-grid">
        
        <!-- Escenario WebGL 3D -->
        <div class="stage-wrapper" id="stageWrapper">
          
          <!-- Brackets del Visor -->
          <div class="stage-bracket b-tl"></div>
          <div class="stage-bracket b-tr"></div>
          <div class="stage-bracket b-bl"></div>
          <div class="stage-bracket b-br"></div>

          <!-- Barra Superior Flotante con Vistas de CÃ¡mara -->
          <div class="stage-toolbar">
            <div class="view-preset-group">
              <button class="tool-btn active" id="btnViewFront" title="Vista frontal de la palma">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5v7a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"/></svg>
                <span>Palma (Frente)</span>
              </button>
              <button class="tool-btn" id="btnViewBack" title="Vista posterior del dorso">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/></svg>
                <span>Dorso (Reverso)</span>
              </button>
              <button class="tool-btn" id="btnViewSide" title="Vista de perfil lateral">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
                <span>Perfil Lateral</span>
              </button>
            </div>

            <div class="view-actions-group">
              <button class="tool-btn icon-only" id="btnAutoSpin" title="RotaciÃ³n continua 360Â°">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
              </button>
              <button class="tool-btn icon-only" id="btnResetCamera" title="Restablecer vista original">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><polyline points="3 3 3 8 8 8"/></svg>
              </button>
              <button class="tool-btn icon-only" id="btnAudioToggle" title="Activar/Desactivar sonido">
                <svg id="soundIconOn" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                <svg id="soundIconOff" class="hidden" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              </button>
            </div>
          </div>

          <!-- Selector de Colores Oficiales en CÃ¡psula Futurista -->
          <div class="material-picker">
            <span class="picker-label">Colores Oficiales:</span>
            <button class="color-dot active" data-color="#facc15" data-name="Amarillo" title="Amarillo ClÃ¡sico" style="background: #facc15;"></button>
            <button class="color-dot" data-color="#0284c7" data-name="Azul" title="Azul Institucional" style="background: #0284c7;"></button>
            <button class="color-dot" data-color="#dc2626" data-name="Rojo" title="Rojo Ruberplus" style="background: #dc2626;"></button>
            <button class="color-dot" data-color="#15803d" data-name="Verde" title="Verde Preinducol" style="background: #15803d;"></button>
          </div>

          <!-- Viewport WebGL Three.js -->
          <div class="webgl-viewport" id="webglViewport">
            <div class="loading-overlay" id="loadingOverlay">
              <div class="spinner"></div>
              <p>Iniciando visor 3D Ruberplus Preinducol S.A.S...</p>
            </div>
          </div>

          <!-- Capa de Hotspots 3D Proyectados -->
          <div class="hotspots-overlay" id="hotspotsOverlay">
            <!-- Pines proyectados matemÃ¡ticamente fotograma a fotograma -->
          </div>

          <!-- Selector de Tallas Oficiales -->
          <div class="size-picker-bar">
            <span class="size-label">Tallas Oficiales:</span>
            <div class="size-chips">
              <button class="size-chip" data-size="7">7</button>
              <button class="size-chip" data-size="7.5">7Â½</button>
              <button class="size-chip active" data-size="8">8</button>
              <button class="size-chip" data-size="8.5">8Â½</button>
              <button class="size-chip" data-size="9">9</button>
              <button class="size-chip" data-size="10">10</button>
            </div>
          </div>

          <!-- Instrucciones de NavegaciÃ³n -->
          <div class="stage-instructions">
            <span class="instruction-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M12 2v20"/></svg>
              <span><strong>Arrastrar:</strong> Rotar 360Â°</span>
            </span>
            <span class="instruction-separator">â€¢</span>
            <span class="instruction-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="5"/><line x1="12" y1="6" x2="12" y2="10"/></svg>
              <span><strong>Rueda:</strong> Zoom</span>
            </span>
            <span class="instruction-separator">â€¢</span>
            <span class="instruction-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              <span><strong>Pines:</strong> EspecificaciÃ³n</span>
            </span>
          </div>

        </div>

        <!-- Panel Lateral: Ficha TÃ©cnica Oficial Ruberplusâ„¢ -->
        <aside class="details-panel">
          
          <div class="feature-card" id="featureCard">
            <div class="card-header">
              <div class="zone-badge" id="zoneBadge">FICHA TÃ‰CNICA OFICIAL</div>
              <button class="btn-close-card" id="btnCloseFeature" title="Restablecer vista">&times;</button>
            </div>

            <div class="card-content">
              <div class="feature-icon" id="featureIcon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>

              <h3 class="feature-title" id="featureTitle">Guante de LÃ¡tex Ruberplusâ„¢</h3>
              <p class="feature-desc" id="featureDesc">
                Los guantes son <strong>biodegradables</strong> ya que estÃ¡n fabricados en lÃ¡tex natural y con aditivos que ejercen una acciÃ³n antibacterial, acelerando su degradaciÃ³n bajo condiciones ambientales naturales.
              </p>

              <!-- Tabla de Ficha TÃ©cnica -->
              <div class="specs-grid" id="specsGrid">
                <div class="spec-box">
                  <span class="spec-name">Materia Prima</span>
                  <strong class="spec-value" id="specMaterial">LÃ¡tex Natural</strong>
                </div>
                <div class="spec-box">
                  <span class="spec-name">Largo Oficial</span>
                  <strong class="spec-value" id="specLength">30 cm</strong>
                </div>
                <div class="spec-box">
                  <span class="spec-name">Calibre</span>
                  <strong class="spec-value" id="specGauge">Calibre 20 Parejo</strong>
                </div>
                <div class="spec-box">
                  <span class="spec-name">PresentaciÃ³n</span>
                  <strong class="spec-value" id="specNorm">Cajas x 12 Docenas</strong>
                </div>
              </div>

              <!-- Resistencia QuÃ­mica Oficial -->
              <div class="chemical-guide-card">
                <div class="chem-row positive">
                  <div class="chem-indicator">âœ“</div>
                  <div class="chem-info">
                    <strong>Alta Resistencia a:</strong>
                    <span>Productos cÃ¡usticos, detergentes concentrados, soluciones Ã¡cidas.</span>
                  </div>
                </div>

                <div class="chem-row negative">
                  <div class="chem-indicator">âš ï¸</div>
                  <div class="chem-info">
                    <strong>Poca Resistencia a:</strong>
                    <span>Disolventes orgÃ¡nicos (varsol, thinner, gasolina, ACPM).</span>
                  </div>
                </div>
              </div>

              <!-- Aplicaciones -->
              <div class="app-applications-box">
                <span class="app-label">APLICACIONES CERTIFICADAS:</span>
                <p>Aseo institucional, labores del hogar, manipulaciÃ³n de detergentes, jardinerÃ­a, lavado y desinfecciÃ³n general.</p>
              </div>

              <!-- BotÃ³n CTA -->
              <div class="action-cta-box">
                <button class="btn-quote" id="btnQuoteModal">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>Solicitar CotizaciÃ³n Ruberplusâ„¢</span>
                </button>
              </div>

            </div>
          </div>

          <!-- Selector de Zonas RÃ¡pidas -->
          <div class="quick-nav-card">
            <h4 class="quick-nav-title">Zonas de InspecciÃ³n Ruberplus</h4>
            <div class="quick-items-list" id="quickItemsList">
              <!-- Se puebla dinÃ¡micamente con JavaScript -->
            </div>
          </div>

        </aside>

      </div>

    </div>
  </section>
`;
  }

const GLOVE_FEATURES = {
  'fingertips': {
    id: 'fingertips',
    name: 'Labrado Especial Antideslizante',
    zone: 'DEDOS / PALMA',
    tag: 'AGARRE SUPERIOR',
    desc: 'Labrado microestructurado en relieve antideslizante en los dedos y palma para un agarre superior al manipular superficies mojadas, jabonosas o con detergentes concentrados.',
    specs: {
      'Materia Prima': 'LÃ¡tex 100% Natural',
      'Labrado': 'Especial Antideslizante',
      'Largo': '30 cm Oficial',
      'Calibre': '20 Parejo'
    },
    ratings: { grip: 99, chem: 92, flex: 96 },
    chips: ['ðŸ–ï¸ Labrado Antideslizante', 'ðŸ§¼ Alta Adherencia con JabÃ³n', 'ðŸ‘Œ MÃ¡ximo Agarre'],
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5v7a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"/><line x1="8" y1="12" x2="8" y2="12"/><line x1="12" y1="11" x2="12" y2="11"/><line x1="16" y1="12" x2="16" y2="12"/></svg>`,
    pos: new THREE.Vector3(-0.15, 0.88, 0.08),
    normal: new THREE.Vector3(0, 0.2, 1),
    camTarget: { x: -0.1, y: 0.80, z: 0 },
    camDistance: 0.75
  },
  'thumb': {
    id: 'thumb',
    name: 'DiseÃ±o AnatÃ³mico de FÃ¡cil Manejo',
    zone: 'PULGAR / PINZA',
    tag: 'DISEÃ‘O ANATÃ“MICO',
    desc: 'Molde ergonÃ³mico curvo desarrollado por Preinducol SAS que sigue la postura de descanso natural de la mano, brindando mayor suavidad, confort y reduciendo la fatiga manual.',
    specs: {
      'DiseÃ±o': 'AnatÃ³mico Preinducol',
      'ErgonomÃ­a': 'Curvatura Natural',
      'Manejo': 'Suave y Flexible',
      'Materia Prima': 'LÃ¡tex Natural Puro'
    },
    ratings: { grip: 94, chem: 90, flex: 99 },
    chips: ['ðŸ’† Cero Fatiga', 'âœ¨ Mayor Suavidad', 'ðŸ‘Œ FÃ¡cil Manejo'],
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>`,
    pos: new THREE.Vector3(-0.48, 0.25, 0.06),
    normal: new THREE.Vector3(-0.7, 0, 0.7),
    camTarget: { x: -0.35, y: 0.25, z: 0 },
    camDistance: 0.70
  },
  'palm': {
    id: 'palm',
    name: 'Calibre 20 Parejo y HomogÃ©neo',
    zone: 'PALMA / ESTRUCTURA',
    tag: 'CALIBRE 20 OFICIAL',
    desc: 'Espesor homogÃ©neo de calibre 20 en toda la pieza, garantizando resistencia uniforme sin puntos dÃ©biles frente a productos cÃ¡usticos, jabones y soluciones Ã¡cidas.',
    specs: {
      'Calibre': '20 Parejo HomogÃ©neo',
      'Resistencia': 'CÃ¡usticos, Jabones, Ãcidos',
      'Materia Prima': 'LÃ¡tex Natural',
      'Fabricante': 'PREINDUCOL SAS'
    },
    ratings: { grip: 98, chem: 95, flex: 95 },
    chips: ['ðŸ§± Calibre 20', 'ðŸ§ª Resistente a CÃ¡usticos', 'ðŸ›¡ï¸ Grosor Parejo'],
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m9 3 6 18"/><path d="m15 3-6 18"/><path d="m3 9 18 6"/><path d="m3 15 18-6"/></svg>`,
    pos: new THREE.Vector3(0.02, 0.15, 0.08),
    normal: new THREE.Vector3(0, 0, 1),
    camTarget: { x: 0, y: 0.15, z: 0 },
    camDistance: 0.75
  },
  'dorso': {
    id: 'dorso',
    name: 'Biodegradable & Antibacterial',
    zone: 'DORSO / ECOLÃ“GICO',
    tag: 'ACCIÃ“N ECOLÃ“GICA',
    desc: 'Los guantes Ruberplus son biodegradables al estar fabricados en lÃ¡tex natural con aditivos especiales que ejercen una acciÃ³n antibacterial y aceleran su proceso de degradaciÃ³n natural en el medio ambiente.',
    specs: {
      'Propiedad': '100% Biodegradable',
      'AcciÃ³n': 'Antibacterial Activa',
      'DegradaciÃ³n': 'Acelerada bajo condiciones naturales',
      'Origen': 'LÃ¡tex Natural Renovable'
    },
    ratings: { grip: 85, chem: 92, flex: 99 },
    chips: ['ðŸŒ± 100% Biodegradable', 'ðŸ¦  AcciÃ³n Antibacterial', 'â™»ï¸ Eco-Amigable'],
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
    pos: new THREE.Vector3(0.02, 0.18, -0.09),
    normal: new THREE.Vector3(0, 0, -1),
    camTarget: { x: 0, y: 0.18, z: 0 },
    camDistance: 0.80
  },
  'sleeve': {
    id: 'sleeve',
    name: 'Largo Oficial de 30 cm con Orillo',
    zone: 'MANGA / PROTECCIÃ“N',
    tag: 'ORILLO REFORZADO',
    desc: 'TerminaciÃ³n en orillo enrollado en la boca de la manga que brinda mayor resistencia al calce, evita desgarros al colocar el guante y previene que los lÃ­quidos escurran hacia el brazo.',
    specs: {
      'TerminaciÃ³n': 'Orillo en la manga',
      'FunciÃ³n': 'Antidesgarro y Antigoteo',
      'Empaque': 'Cajas por 12 docenas',
      'Tallas': '7, 7Â½, 8, 8Â½, 9, 10'
    },
    ratings: { grip: 70, chem: 92, flex: 95 },
    chips: ['ðŸ›‘ Sin Desgarros', 'ðŸ’§ Orillo Antigoteo', 'ðŸ“¦ Caja x 12 Docenas'],
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    pos: new THREE.Vector3(0.06, -0.84, 0.11),
    normal: new THREE.Vector3(0, -0.4, 0.9),
    camTarget: { x: 0.05, y: -0.80, z: 0 },
    camDistance: 0.75
  }
};

// ============================================================================
// CLASE PRINCIPAL: MOTOR 3D THREE.JS EN LABORATORIO BLANCO
// ============================================================================
class RealGloveApp3D {
  constructor() {
    this.container = document.getElementById('webglViewport');
    this.hotspotsOverlay = document.getElementById('hotspotsOverlay');
    this.loadingOverlay = document.getElementById('loadingOverlay');

    // Botones de la barra de herramientas
    this.btnViewFront = document.getElementById('btnViewFront');
    this.btnViewBack = document.getElementById('btnViewBack');
    this.btnViewSide = document.getElementById('btnViewSide');
    this.btnAutoSpin = document.getElementById('btnAutoSpin');
    this.btnResetCamera = document.getElementById('btnResetCamera');
    this.btnAudioToggle = document.getElementById('btnAudioToggle');
    this.soundIconOn = document.getElementById('soundIconOn');
    this.soundIconOff = document.getElementById('soundIconOff');

    // Modal de CotizaciÃ³n Preinducol
    this.btnQuoteModal = document.getElementById('btnQuoteModal');
    this.quoteModalOverlay = document.getElementById('quoteModalOverlay');
    this.btnCloseModal = document.getElementById('btnCloseModal');
    this.btnModalCloseAction = document.getElementById('btnModalCloseAction');

    // Elementos del panel lateral de la Ficha TÃ©cnica
    this.zoneBadge = document.getElementById('zoneBadge');
    this.featureTitle = document.getElementById('featureTitle');
    this.featureDesc = document.getElementById('featureDesc');
    this.featureIcon = document.getElementById('featureIcon');
    this.specMaterial = document.getElementById('specMaterial');
    this.specLength = document.getElementById('specLength');
    this.specGauge = document.getElementById('specGauge');
    this.specNorm = document.getElementById('specNorm');
    this.quickItemsList = document.getElementById('quickItemsList');
    this.btnCloseFeature = document.getElementById('btnCloseFeature');

    // Estado del motor 3D
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.gloveGroup = null;
    this.gloveMaterial = null;
    this.activeFeatureId = null;

    // AnimaciÃ³n de cÃ¡mara
    this.cameraTween = null;

    // Audio sintetizado
    this.audioEnabled = true;
    this.audioCtx = null;

    // Iniciar si el contenedor estÃ¡ presente
    if (this.container) {
      this.init();
    }
  }

  init() {
    this.setupThreeScene();
    this.setupAudio();
    this.loadProfessionalGloveModel();
    this.createHotspotElements();
    this.populateQuickNav();
    this.bindEvents();
    this.startRenderLoop();

    // Seleccionar por defecto la primera caracterÃ­stica
    this.selectFeature('fingertips', false);
  }

  // ==========================================================================
  // CONFIGURACIÃ“N DE ESCENA THREE.JS EN PLATAFORMA DE ESTUDIO BLANCA
  // ==========================================================================
  setupThreeScene() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 560;

    // Escena con fondo blanco puro de laboratorio
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    // CÃ¡mara con encuadre centrado en la pieza
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    this.camera.position.set(0, 0.15, 2.4);

    // Renderer WebGL de alto desempeÃ±o con sombras suaves
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.container.appendChild(this.renderer.domElement);

    // Controles orbitales 360Â°
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.minDistance = 0.8;
    this.controls.maxDistance = 4.2;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.15;
    this.controls.target.set(0, 0.10, 0);

    // IluminaciÃ³n Profesional de Estudio Blanco (3-Point Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.95);
    keyLight.position.set(3, 4, 3.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 15;
    keyLight.shadow.bias = -0.0005;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.65);
    fillLight.position.set(-3, 2, 2.5);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.55);
    rimLight.position.set(0, 3, -3.5);
    this.scene.add(rimLight);

    const bottomReflect = new THREE.DirectionalLight(0xffffff, 0.4);
    bottomReflect.position.set(0, -3, 1);
    this.scene.add(bottomReflect);

    // Plataforma Pedestal Blanca de Estudio Preinducol
    this.createStudioPedestal();
  }

  createStudioPedestal() {
    const discGeo = new THREE.CylinderGeometry(0.85, 0.88, 0.02, 64);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.35,
      metalness: 0.02
    });
    const pedestal = new THREE.Mesh(discGeo, discMat);
    pedestal.position.y = -0.92;
    pedestal.receiveShadow = true;
    this.scene.add(pedestal);

    const ringGeo = new THREE.TorusGeometry(0.86, 0.008, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x15803d,
      transparent: true,
      opacity: 0.5
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.909;
    this.scene.add(ring);

    // Sombra de contacto suave
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 128, 15, 128, 128, 120);
    grad.addColorStop(0, 'rgba(15, 23, 42, 0.45)');
    grad.addColorStop(0.5, 'rgba(15, 23, 42, 0.15)');
    grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlaneGeo = new THREE.PlaneGeometry(1.6, 1.6);
    const shadowPlaneMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.908;
    this.scene.add(shadowPlane);
  }

  // ==========================================================================
  // CARGA DEL MODELO 3D REAL ORGÃNICO
  // ==========================================================================
  loadProfessionalGloveModel() {
    this.gloveGroup = new THREE.Group();
    this.scene.add(this.gloveGroup);

    this.gloveMaterial = new THREE.MeshStandardMaterial({
      color: 0xfacc15, // Amarillo Oficial por defecto
      roughness: 0.26,
      metalness: 0.04,
      side: THREE.DoubleSide
    });

    const loader = new THREE.GLTFLoader();

    const onModelSuccess = (gltf) => {
      const model = gltf.scene;

      model.traverse((child) => {
        if (child.isMesh) {
          child.geometry.rotateX(-Math.PI / 2);
          child.geometry.center();
          child.geometry.computeVertexNormals();

          const box = new THREE.Box3().setFromObject(child);
          const size = new THREE.Vector3();
          box.getSize(size);
          const targetHeight = 1.75;
          const scale = targetHeight / size.y;
          child.scale.set(scale, scale, scale);

          child.material = this.gloveMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.gloveGroup.add(model);
      this.gloveGroup.position.set(0, 0, 0);

      if (this.loadingOverlay) {
        this.loadingOverlay.classList.add('hidden');
      }
      console.log('Modelo profesional Ruberplus Preinducol montado con Ã©xito!');
    };

    // MÃ©todo 1: Base64 incrustado para carga instantÃ¡nea en file:///
    if (window.GLOVE_GLB_BASE64) {
      try {
        const binaryString = atob(window.GLOVE_GLB_BASE64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        loader.parse(bytes.buffer, '', onModelSuccess, (err) => {
          console.warn('Fallback a carga fetch:', err);
          loader.load('assets/gloves.glb', onModelSuccess);
        });
        return;
      } catch (e) {
        console.warn('ExcepciÃ³n procesando base64:', e);
      }
    }

    // MÃ©todo 2: Carga directa
    loader.load('assets/gloves.glb', onModelSuccess, undefined, (err) => {
      console.error('Error cargando modelo:', err);
    });
  }

  // ==========================================================================
  // CREACIÃ“N Y PROYECCIÃ“N DE HOTSPOTS 3D A PANTALLA 2D
  // ==========================================================================
  createHotspotElements() {
    if (!this.hotspotsOverlay) return;
    this.hotspotsOverlay.innerHTML = '';

    for (const [id, feat] of Object.entries(GLOVE_FEATURES)) {
      const btn = document.createElement('button');
      btn.className = 'hotspot-3d';
      btn.id = `hotspot-${id}`;
      btn.setAttribute('data-id', id);
      btn.setAttribute('aria-label', feat.name);

      btn.innerHTML = `
        <div class="pin-ring">
          <div class="pin-pulse"></div>
          <div class="pin-core"></div>
        </div>
        <div class="hotspot-label">${feat.name}</div>
      `;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectFeature(id, true);
        this.playSound('click');
      });

      btn.addEventListener('mouseenter', () => {
        this.playSound('hover');
      });

      this.hotspotsOverlay.appendChild(btn);
    }
  }

  updateHotspotsProjection() {
    if (!this.camera || !this.gloveGroup || !this.container) return;

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    const tempV = new THREE.Vector3();
    const tempNormal = new THREE.Vector3();
    const camDir = new THREE.Vector3();

    for (const [id, feat] of Object.entries(GLOVE_FEATURES)) {
      const btn = document.getElementById(`hotspot-${id}`);
      if (!btn) continue;

      tempV.copy(feat.pos);
      tempV.applyMatrix4(this.gloveGroup.matrixWorld);

      tempNormal.copy(feat.normal);
      tempNormal.transformDirection(this.gloveGroup.matrixWorld);

      camDir.subVectors(this.camera.position, tempV).normalize();
      const dot = tempNormal.dot(camDir);

      if (dot < -0.15) {
        btn.style.display = 'none';
        continue;
      }

      tempV.project(this.camera);

      if (tempV.z > 1) {
        btn.style.display = 'none';
        continue;
      }

      btn.style.display = 'flex';
      const x = (tempV.x * 0.5 + 0.5) * width;
      const y = (-(tempV.y * 0.5) + 0.5) * height;

      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;

      const dist = this.camera.position.distanceTo(tempV);
      const scale = THREE.MathUtils.clamp(1.4 - dist * 0.25, 0.75, 1.25);
      btn.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
  }

  // ==========================================================================
  // PANEL DE LA FICHA TÃ‰CNICA Y NAVEGACIÃ“N RÃPIDA
  // ==========================================================================
  populateQuickNav() {
    if (!this.quickItemsList) return;
    this.quickItemsList.innerHTML = '';

    for (const [id, feat] of Object.entries(GLOVE_FEATURES)) {
      const item = document.createElement('button');
      item.className = 'quick-item-btn';
      item.id = `quick-item-${id}`;
      item.innerHTML = `
        <span>${feat.name}</span>
        <span class="quick-tag">${feat.zone}</span>
      `;

      item.addEventListener('click', () => {
        this.selectFeature(id, true);
        this.playSound('click');
      });

      this.quickItemsList.appendChild(item);
    }
  }

  selectFeature(id, animateCamera = true) {
    const feat = GLOVE_FEATURES[id];
    if (!feat) return;

    this.activeFeatureId = id;

    // Actualizar datos de la ficha tÃ©cnica
    if (this.zoneBadge) this.zoneBadge.textContent = feat.zone;
    if (this.featureTitle) this.featureTitle.textContent = feat.name;
    if (this.featureDesc) this.featureDesc.innerHTML = feat.desc;
    if (this.featureIcon) this.featureIcon.innerHTML = feat.icon;

    if (this.specMaterial) this.specMaterial.textContent = feat.specs['Materia Prima'] || 'LÃ¡tex Natural';
    if (this.specLength) this.specLength.textContent = feat.specs['Largo'] || feat.specs['Largo Oficial'] || '30 cm';
    if (this.specGauge) this.specGauge.textContent = feat.specs['Calibre'] || 'Calibre 20 Parejo';
    if (this.specNorm) this.specNorm.textContent = feat.specs['PresentaciÃ³n'] || feat.specs['Empaque'] || 'Cajas x 12 Docenas';

    // Estados visuales activos
    document.querySelectorAll('.hotspot-3d').forEach(b => b.classList.remove('active'));
    const activeHotspot = document.getElementById(`hotspot-${id}`);
    if (activeHotspot) activeHotspot.classList.add('active');

    document.querySelectorAll('.quick-item-btn').forEach(b => b.classList.remove('active'));
    const activeQuick = document.getElementById(`quick-item-${id}`);
    if (activeQuick) activeQuick.classList.add('active');

    if (this.btnViewFront) this.btnViewFront.classList.remove('active');
    if (this.btnViewBack) this.btnViewBack.classList.remove('active');
    if (this.btnViewSide) this.btnViewSide.classList.remove('active');

    if (!animateCamera || !this.controls || !this.camera) return;

    const targetLook = new THREE.Vector3(feat.camTarget.x, feat.camTarget.y, feat.camTarget.z);
    const normalOffset = feat.normal.clone().multiplyScalar(feat.camDistance);
    const targetCamPos = targetLook.clone().add(normalOffset);
    targetCamPos.y = Math.max(0.05, targetCamPos.y);

    this.startCameraTween(targetCamPos, targetLook, 850);
  }

  setPresetView(type) {
    let targetCamPos, targetLook;

    if (type === 'front') {
      targetCamPos = new THREE.Vector3(0, 0.15, 2.4);
      targetLook = new THREE.Vector3(0, 0.10, 0);
    } else if (type === 'back') {
      targetCamPos = new THREE.Vector3(0, 0.15, -2.4);
      targetLook = new THREE.Vector3(0, 0.10, 0);
    } else if (type === 'side') {
      targetCamPos = new THREE.Vector3(2.4, 0.15, 0);
      targetLook = new THREE.Vector3(0, 0.10, 0);
    }

    if (this.btnViewFront) this.btnViewFront.classList.toggle('active', type === 'front');
    if (this.btnViewBack) this.btnViewBack.classList.toggle('active', type === 'back');
    if (this.btnViewSide) this.btnViewSide.classList.toggle('active', type === 'side');

    this.playSound('flip');
    this.startCameraTween(targetCamPos, targetLook, 800);
  }

  startCameraTween(endPos, endTarget, duration = 800) {
    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();
    const startTime = performance.now();

    this.cameraTween = {
      update: (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        this.camera.position.lerpVectors(startPos, endPos, ease);
        this.controls.target.lerpVectors(startTarget, endTarget, ease);

        if (progress >= 1) {
          this.cameraTween = null;
        }
      }
    };
  }

  resetCamera() {
    this.setPresetView('front');
    if (this.controls) this.controls.autoRotate = false;
    if (this.btnAutoSpin) this.btnAutoSpin.classList.remove('active');
  }

  toggleAutoSpin() {
    if (!this.controls) return;
    this.controls.autoRotate = !this.controls.autoRotate;
    this.controls.autoRotateSpeed = 1.8;
    if (this.btnAutoSpin) this.btnAutoSpin.classList.toggle('active', this.controls.autoRotate);
    this.playSound('click');
  }

  setGloveColor(hexColor) {
    if (!this.gloveMaterial) return;
    this.gloveMaterial.color.set(hexColor);
    this.gloveMaterial.roughness = 0.26;
    this.playSound('click');
  }

  // ==========================================================================
  // AUDIO SINTETIZADO (WEB AUDIO API)
  // ==========================================================================
  setupAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn('Audio no disponible:', e);
    }
  }

  playSound(type = 'click') {
    if (!this.audioEnabled || !this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    } else if (type === 'hover') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'flip') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.12);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.14);
    }
  }

  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    if (this.soundIconOn) this.soundIconOn.classList.toggle('hidden', !this.audioEnabled);
    if (this.soundIconOff) this.soundIconOff.classList.toggle('hidden', this.audioEnabled);
    if (this.audioEnabled) this.playSound('click');
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onWindowResize());

    if (window.ResizeObserver && this.container) {
      const ro = new ResizeObserver(() => this.onWindowResize());
      ro.observe(this.container);
    }

    if (this.btnViewFront) this.btnViewFront.addEventListener('click', () => this.setPresetView('front'));
    if (this.btnViewBack) this.btnViewBack.addEventListener('click', () => this.setPresetView('back'));
    if (this.btnViewSide) this.btnViewSide.addEventListener('click', () => this.setPresetView('side'));
    if (this.btnAutoSpin) this.btnAutoSpin.addEventListener('click', () => this.toggleAutoSpin());
    if (this.btnResetCamera) this.btnResetCamera.addEventListener('click', () => this.resetCamera());
    if (this.btnAudioToggle) this.btnAudioToggle.addEventListener('click', () => this.toggleAudio());

    if (this.btnCloseFeature) {
      this.btnCloseFeature.addEventListener('click', () => {
        this.resetCamera();
        this.playSound('click');
      });
    }

    // Modal de CotizaciÃ³n
    if (this.btnQuoteModal) {
      this.btnQuoteModal.addEventListener('click', () => {
        if (this.quoteModalOverlay) this.quoteModalOverlay.classList.remove('hidden');
        this.playSound('click');
      });
    }

    if (this.btnCloseModal) {
      this.btnCloseModal.addEventListener('click', () => {
        if (this.quoteModalOverlay) this.quoteModalOverlay.classList.add('hidden');
      });
    }

    if (this.btnModalCloseAction) {
      this.btnModalCloseAction.addEventListener('click', () => {
        if (this.quoteModalOverlay) this.quoteModalOverlay.classList.add('hidden');
      });
    }

    if (this.quoteModalOverlay) {
      this.quoteModalOverlay.addEventListener('click', (e) => {
        if (e.target === this.quoteModalOverlay) {
          this.quoteModalOverlay.classList.add('hidden');
        }
      });
    }

    // Selector de los 4 colores oficiales Ruberplus
    const dots = document.querySelectorAll('.color-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        const color = dot.getAttribute('data-color');
        this.setGloveColor(color);
      });
    });

    // Selector interactivo de tallas
    const sizeChips = document.querySelectorAll('.size-chip');
    sizeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        sizeChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.playSound('click');
      });
    });
  }

  onWindowResize() {
    if (!this.container || !this.camera || !this.renderer) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  startRenderLoop() {
    const animate = (time) => {
      requestAnimationFrame(animate);

      if (this.cameraTween) {
        this.cameraTween.update(time);
      }

      if (this.controls) {
        this.controls.update();
      }

      this.updateHotspotsProjection();

      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
    };

    requestAnimationFrame(animate);
  }
}

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      container.innerHTML = renderHTML();
      if (typeof THREE !== 'undefined') {
        window.preinducol3DApp = new RealGloveApp3D();
      }
    }
  }

  return {
    mount
  };
})();