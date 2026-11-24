/**
 * PREINDUCOL S.A.S. - MÓDULO: EMPRESA, PLANTA, CONTACTO & COTIZACIONES
 * Nosotros (Misión/Visión/Valores), Planta de Producción, Sostenibilidad,
 * Formulario de contacto con redirección a WhatsApp y Modal de Cotizaciones.
 */
window.CompanyModule = (function () {
  const mountId = 'company-mount';

  function render() {
    return `
  <!-- La sección #nosotros (Misión/Visión/Valores/Manifiesto) se trasladó a quienes-somos.html (modules/about.js) -->

  <!-- ========================================================================= -->
  <!-- SECCIÓN SOSTENIBILIDAD (ENCABEZADO CENTRADO + WENDY Y BLOQUES)            -->
  <!-- ========================================================================= -->
  <section class="section-block" id="sostenibilidad">
    <div class="container-max">
      
      <div class="header-editorial">
        <div class="badge-pill pill-lime">
          <span>COMPROMISO ECOLÓGICO</span>
        </div>
        <h2 class="title-editorial">Látex 100% Biodegradable vs. Sintéticos Fósiles</h2>
        <p class="desc-editorial">
          Elegir Preinducol es optar por la naturaleza: materias primas renovables que protegen al trabajador sin hipotecar el medio ambiente.
        </p>
      </div>

      <div class="eco-layout">
        <aside class="eco-ant-aside">
          <img src="assets/hormiga-planeta.png" alt="Ema, la hormiga de Preinducol, abrazando el planeta Tierra" class="eco-ant-img" loading="lazy">
        </aside>

        <div class="sustainability-matrix-grid">
          
          <div class="matrix-card card-green-light">
            <div class="matrix-icon">🌿</div>
            <span class="matrix-chip">PREINDUCOL RUBERPLUS™</span>
            <h3>100% Látex Natural Renovable</h3>
            <p>Obtenido por sangrado del árbol de caucho <em>Hevea brasiliensis</em>. Un recurso 100% biológico, circular y renovable que captura toneladas de carbono en sus plantaciones.</p>
            <ul class="matrix-bullets">
              <li>✓ Origen orgánico vegetal sostenible</li>
              <li>✓ Sin derivados del petróleo</li>
              <li>✓ Mayor elasticidad y confort térmico</li>
            </ul>
          </div>

          <div class="matrix-card card-cyan-light">
            <div class="matrix-icon">🧬</div>
            <span class="matrix-chip">FÓRMULA SEGURA</span>
            <h3>Bactericida Antibacterial Activo</h3>
            <p>Tratamiento molecular antibacterial que inhibe hongos y bacterias nocivas dentro y fuera del guante, reduciendo riesgos de dermatitis y malos olores en turnos prolongados.</p>
            <ul class="matrix-bullets">
              <li>✓ Protección dérmica superior</li>
              <li>✓ Acción activa contra microbios</li>
              <li>✓ Hipoalergénico con acabado parejo</li>
            </ul>
          </div>

          <div class="matrix-card card-lime-light">
            <div class="matrix-icon">♻️</div>
            <span class="matrix-chip">CICLO CIRCULAR</span>
            <h3>Biodegradación Natural Acelerada</h3>
            <p>A diferencia de los plásticos de un solo uso que tardan 400 años en descomponerse en microplásticos tóxicos, nuestro guante se reintegra al suelo de forma natural sin toxicidad residual.</p>
            <ul class="matrix-bullets">
              <li>✓ Cero microplásticos en ríos o mares</li>
              <li>✓ Desintegración armónica con el suelo</li>
              <li>✓ Empaques en cajas reciclables</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- SECCIÓN CONTACTO, FORMULARIO Y CANALES DIRECTOS                           -->
  <!-- ========================================================================= -->
  <section class="section-block bg-subtle" id="contacto">
    <div class="container-max">
      
      <div class="header-editorial">
        <div class="badge-pill">
          <span>ATENCIÓN COMERCIAL & VENTAS</span>
        </div>
        <h2 class="title-editorial">Solicita tu Cotización Directa de Fábrica</h2>
        <p class="desc-editorial">
          Precios especiales para distribuidores, empresas de aseo, almacenes ferreteros y contratos institucionales.
        </p>
      </div>

      <!-- Bloque Unificado Editorial de Contacto (Estilo Disproel • Identidad Preinducol) -->
      <div class="preinducol-contact-card">
        
        <!-- Lado Izquierdo: Visual Fotográfico con Foto Grande y Contactos Directos -->
        <div class="contact-side-visual" style="background-image: url('assets/asesora-servicio-al-cliente.jpg');">
          <div class="contact-visual-overlay">
            
            <div class="contact-visual-content">
              <span class="contact-visual-tag">HABLEMOS</span>
              <h2 class="contact-visual-title">¿TIENES ALGUNA DUDA?</h2>
              <p class="contact-visual-desc">
                Nuestro equipo de asesores y especialistas de planta está listo para brindarte la mejor asesoría técnica y comercial para tu empresa o proyecto industrial.
              </p>

              <div class="contact-info-list">
                <!-- 1. Teléfonos / WhatsApp -->
                <div class="contact-info-item">
                  <div class="info-icon-circle">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div class="info-text-group">
                    <span class="info-label">LLÁMANOS O ESCRÍBENOS</span>
                    <a href="https://wa.me/573106741977?text=Hola,%20me%20comunico%20desde%20la%20web%20Preinducol%20para%20cotizar" target="_blank" rel="noopener noreferrer" class="info-val-link">
                      <strong>+57 310 674 1977</strong> <span class="info-sub-badge">Director Comercial</span>
                    </a>
                    <a href="https://wa.me/573138957129?text=Hola,%20me%20comunico%20con%20Servicio%20al%20Cliente%20de%20Preinducol" target="_blank" rel="noopener noreferrer" class="info-val-link">
                      <strong>+57 313 895 7129</strong> <span class="info-sub-badge">Servicio al Cliente</span>
                    </a>
                  </div>
                </div>

                <!-- 2. Correo -->
                <div class="contact-info-item">
                  <div class="info-icon-circle">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div class="info-text-group">
                    <span class="info-label">ESCRÍBENOS</span>
                    <a href="mailto:contacto@preinducol.com" class="info-val-link">contacto@preinducol.com</a>
                  </div>
                </div>

                <!-- 3. Ubicación -->
                <div class="contact-info-item">
                  <div class="info-icon-circle">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                    </svg>
                  </div>
                  <div class="info-text-group">
                    <span class="info-label">PLANTA Y OFICINAS CENTRALES</span>
                    <span class="info-val-plain">Calle 63B # 116A - 35 Bodega 5, Engativá, Bogotá</span>
                  </div>
                </div>
              </div>

              <!-- Cobertura y Despachos Nacionales -->
              <div class="visual-footer-badge">
                <span class="col-flag">🇨🇴</span>
                <span>Despachos a las 32 regiones de Colombia • Lun a Vie 8:00 AM – 5:30 PM</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Lado Derecho: Formulario de Cotización Limpio y Elegante -->
        <div class="contact-side-form">
          <form id="contactForm" class="disproel-clean-form">
            
            <div class="form-row-split">
              <div class="clean-field">
                <label for="formNombre">NOMBRE COMPLETO *</label>
                <input type="text" id="formNombre" required placeholder="Ej: Carlos Alberto Gómez">
              </div>
              <div class="clean-field">
                <label for="formEmail">CORREO ELECTRÓNICO *</label>
                <input type="email" id="formEmail" required placeholder="compras@empresa.com">
              </div>
            </div>

            <div class="form-row-split">
              <div class="clean-field">
                <label for="formCelular">CELULAR / WHATSAPP *</label>
                <input type="tel" id="formCelular" required placeholder="Ej: 310 674 1977">
              </div>
              <div class="clean-field">
                <label for="formEmpresa">EMPRESA O RAZÓN SOCIAL</label>
                <input type="text" id="formEmpresa" placeholder="Ej: Distribuciones del Norte SAS">
              </div>
            </div>

            <div class="form-row-split">
              <div class="clean-field">
                <label for="formProducto">LÍNEA DE INTERÉS *</label>
                <select id="formProducto">
                  <option value="Guante Ruberplus™ Calibre 20">Guante Ruberplus™ Calibre 20 Parejo</option>
                  <option value="Guante Ruberplus™ Calibre 25">Ruberplus™ Calibre 25 Semipesado</option>
                  <option value="Guante Preindumax™ Industrial">Guante Preindumax™ Industrial</option>
                  <option value="Guante Rubber 50™ (Calibre 50)">Rubber 50™ (Calibre 50 Extra Pesado)</option>
                  <option value="Guante Mosquetero™ Manga Larga">Mosquetero™ Manga Larga</option>
                  <option value="Guante Corrugado Antideslizante">Corrugado Antideslizante</option>
                  <option value="Guantes de Nitrilo Industrial">Guantes de Nitrilo Industrial</option>
                  <option value="Guantes Cuero Vaqueta">Guantes Cuero Vaqueta</option>
                  <option value="Guantes Cuero Carnaza">Guantes Cuero Carnaza Soldadura</option>
                  <option value="Flexi Guantes Hogar">Flexi Guantes Hogar & Confort</option>
                  <option value="Varios Productos / Pedido Mixto">Varios Productos / Pedido Mixto</option>
                </select>
              </div>
              <div class="clean-field">
                <label for="formCantidad">CANTIDAD ESTIMADA</label>
                <input type="text" id="formCantidad" placeholder="Ej: 20 cajas / 240 docenas">
              </div>
            </div>

            <div class="clean-field full-field">
              <label for="formMensaje">¿EN QUÉ PODEMOS AYUDARTE? / OBSERVACIONES *</label>
              <textarea id="formMensaje" rows="3" placeholder="Describe brevemente tu requerimiento, ciudad de entrega, tallas o especificaciones..."></textarea>
            </div>

            <button type="submit" class="btn-clean-submit" id="btnSubmitForm">
              <span>ENVIAR SOLICITUD DE COTIZACIÓN</span>
            </button>
          </form>

          <div class="form-success-box hidden" id="formSuccessMessage">
            <div class="success-icon-big">✓</div>
            <h4>¡Solicitud Preparada con Éxito!</h4>
            <p>Hemos generado tu mensaje comercial para enviarlo con un solo clic a nuestro Director de Ventas por WhatsApp.</p>
            <a href="#" id="btnDirectWaSuccess" target="_blank" class="btn-wa-action-confirm">
              <span>Abrir WhatsApp Ahora</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.438 5.176L2 22l4.982-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            </a>
          </div>
        </div>

      </div>

    </div>

    <!-- Mapa Oficial de Ubicación Preinducol (Full-Width de lado a lado) -->
    <div class="map-fullwidth-wrap">
      <div class="map-card-bar map-bar-fullwidth">
        <div class="container-max map-bar-inner">
          <span class="pin-icon">📍</span>
          <span>Planta y Oficinas Centrales • <strong>PREINDUCOL S.A.S. Colombia</strong> — Calle 63B # 116A - 35 Bodega 5, Engativá, Bogotá</span>
        </div>
      </div>
      <iframe class="map-frame map-frame-fullwidth" loading="lazy" src="https://maps.google.com/maps?q=preinducol%20sas&t=m&z=16&output=embed&iwloc=near" title="Ubicación Planta Preinducol SAS Colombia"></iframe>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- MODAL DE COTIZACIÓN RÁPIDA (PREINDUCOL S.A.S.)                            -->
  <!-- ========================================================================= -->
  <div class="quote-modal-overlay hidden" id="quoteModalOverlay">
    <div class="quote-modal-card">
      <div class="modal-header">
        <div class="modal-title-box">
          <img src="assets/logo.png" alt="Preinducol" class="modal-logo">
          <h3>Preinducol S.A.S. • Cotizaciones</h3>
        </div>
        <button class="btn-close-modal" id="btnCloseModal">&times;</button>
      </div>
      <div class="modal-body">
        <p>Para pedidos mayoristas por docenas o cajas del <strong>Guante Ruberplus™</strong> o cualquier línea de nuestro catálogo, contáctanos inmediatamente a través de nuestras líneas directas:</p>
        
        <div class="contact-info-card">
          <div class="contact-row">
            <strong>🏭 Fabricante:</strong>
            <span>PREINDUCOL S.A.S.</span>
          </div>
          <div class="contact-row">
            <strong>🧤 Producto:</strong>
            <span id="modalProductName">Guante de Látex Natural Ruberplus™</span>
          </div>
          <div class="contact-row">
            <strong>📏 Calibre y Largo:</strong>
            <span>Calibre 20 Parejo • 30 cm de longitud</span>
          </div>
          <div class="contact-row">
            <strong>🎨 Colores Oficiales:</strong>
            <span>Amarillo, Azul, Rojo y Verde</span>
          </div>
          <div class="contact-row">
            <strong>📦 Presentación:</strong>
            <span>Cajas por 12 docenas (144 pares)</span>
          </div>
          <div class="contact-row">
            <strong>📍 Cobertura:</strong>
            <span>Despachos a Nivel Nacional en Colombia</span>
          </div>
        </div>

        <div class="modal-direct-buttons">
          <a href="https://wa.me/573106741977?text=Hola,%20deseo%20cotizar%20guantes%20Ruberplus%20Preinducol" target="_blank" rel="noopener noreferrer" class="btn-modal-wa">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.438 5.176L2 22l4.982-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            <span>Cotizar por WhatsApp Ahora</span>
          </a>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-modal-close-action" id="btnModalCloseAction">Cerrar Ventana</button>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- MODAL VISOR OFICIAL DE FICHA TÉCNICA (PDF INTERACTIVO)                    -->
  <!-- ========================================================================= -->
`;
  }

  function init() {
    // Formulario de contacto oficial
    const form = document.getElementById('contactForm');
    const successBox = document.getElementById('formSuccessMessage');
    const btnWaSuccess = document.getElementById('btnDirectWaSuccess');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('formNombre').value.trim();
        const empresa = document.getElementById('formEmpresa').value.trim();
        const celular = document.getElementById('formCelular').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const producto = document.getElementById('formProducto').value;
        const cantidad = document.getElementById('formCantidad').value.trim();
        const mensaje = document.getElementById('formMensaje').value.trim();

        let waText = '*SOLICITUD DE COTIZACIÓN - PREINDUCOL S.A.S.*%0A%0A';
        waText += '*Nombre:* ' + encodeURIComponent(nombre) + '%0A';
        if (empresa) waText += '*Empresa:* ' + encodeURIComponent(empresa) + '%0A';
        waText += '*Celular:* ' + encodeURIComponent(celular) + '%0A';
        waText += '*Email:* ' + encodeURIComponent(email) + '%0A';
        waText += '*Línea Solicitada:* ' + encodeURIComponent(producto) + '%0A';
        if (cantidad) waText += '*Cantidad estimada:* ' + encodeURIComponent(cantidad) + '%0A';
        if (mensaje) waText += '*Observaciones / Ciudad:* ' + encodeURIComponent(mensaje) + '%0A';

        const waUrl = 'https://wa.me/573106741977?text=' + waText;

        if (btnWaSuccess) {
          btnWaSuccess.setAttribute('href', waUrl);
        }

        form.style.display = 'none';
        if (successBox) {
          successBox.classList.remove('hidden');
        }

        window.open(waUrl, '_blank');
      });
    }

    // Modal de cotización
    const quoteModal = document.getElementById('quoteModalOverlay');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const btnModalCloseAction = document.getElementById('btnModalCloseAction');

    const closeModal = () => {
      if (quoteModal) quoteModal.classList.add('hidden');
    };

    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if (btnModalCloseAction) btnModalCloseAction.addEventListener('click', closeModal);

    // Abrir modal de cotización desde cualquier botón [href="#contacto"] con clase .btn-pill-studds o .btn-quote
    document.querySelectorAll('.block-bottom-right .btn-pill-studds, .btn-quote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (quoteModal) {
          quoteModal.classList.remove('hidden');
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