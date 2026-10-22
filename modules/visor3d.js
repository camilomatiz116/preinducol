/**
 * PREINDUCOL S.A.S. - MÓDULO: MOTOR VISOR 3D HOLOGRÁFICO (MODULAR Y DESACOPLADO)
 * Renderizador WebGL Three.js con soporte multi-producto y lectura de Visor3DData.
 */
window.Visor3DModule = (function () {
  const mountId = 'visor3d-mount';
  let currentApp = null;

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  class GloveViewerEngine {
    constructor(containerEl, productId) {
      this.container = containerEl;
      this.product = window.Visor3DData ? window.Visor3DData.getProduct(productId) : null;
      this.activeColor = this.product ? this.product.colorDefault : '#facc15';

      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.controls = null;
      this.gloveGroup = null;
      this.gloveMaterial = null;
      this.autoSpin = false;
      this.activeHotspotId = null;

      this.init();
    }

    init() {
      this.setupScene();
      this.setupLights();
      this.loadModel();
      this.setupControls();
      this.renderSidebarInfo();
      this.renderColorPicker();
      this.renderHotspots();
      this.startLoop();
    }

    setupScene() {
      const width = this.container.clientWidth || 800;
      const height = this.container.clientHeight || 560;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xffffff);

      this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
      this.camera.position.set(0, 0.15, 2.4);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;

      this.container.innerHTML = '';
      this.container.appendChild(this.renderer.domElement);

      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.06;
      this.controls.minDistance = 0.8;
      this.controls.maxDistance = 4.2;
      this.controls.maxPolarAngle = Math.PI / 2 + 0.15;
      this.controls.target.set(0, 0.10, 0);

      window.addEventListener('resize', () => this.onResize());
    }

    setupLights() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
      this.scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 0.95);
      keyLight.position.set(3, 4, 3.5);
      keyLight.castShadow = true;
      this.scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 0.65);
      fillLight.position.set(-3, 2, 2.5);
      this.scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, 0.55);
      rimLight.position.set(0, -3, -2);
      this.scene.add(rimLight);
    }

    loadModel() {
      this.gloveGroup = new THREE.Group();
      this.scene.add(this.gloveGroup);

      const matProps = (this.product && this.product.material3D) ? this.product.material3D : { roughness: 0.28, metalness: 0.04 };
      this.gloveMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.activeColor),
        roughness: matProps.roughness,
        metalness: matProps.metalness,
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
            const scale = 1.75 / size.y;
            child.scale.set(scale, scale, scale);
            child.material = this.gloveMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        this.gloveGroup.add(model);
        const loading = document.getElementById('loadingOverlay');
        if (loading) loading.style.display = 'none';
      };

      if (window.GLOVE_GLB_BASE64) {
        try {
          const binaryString = atob(window.GLOVE_GLB_BASE64);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          loader.parse(bytes.buffer, '', onModelSuccess, () => loader.load('assets/gloves.glb', onModelSuccess));
          return;
        } catch (e) {
          console.warn('Fallback a carga archivo 3d:', e);
        }
      }

      loader.load('assets/gloves.glb', onModelSuccess, undefined, (err) => {
        console.error('Error cargando modelo 3D:', err);
      });
    }

    setupControls() {
      const btnFront = document.getElementById('btnViewFront');
      const btnBack = document.getElementById('btnViewBack');
      const btnSide = document.getElementById('btnViewSide');
      const btnSpin = document.getElementById('btnAutoSpin');
      const btnReset = document.getElementById('btnResetCamera');

      if (btnFront) btnFront.onclick = () => this.setView(0, 0.15, 2.4);
      if (btnBack) btnBack.onclick = () => this.setView(0, 0.15, -2.4);
      if (btnSide) btnSide.onclick = () => this.setView(2.4, 0.15, 0);
      if (btnReset) btnReset.onclick = () => this.setView(0, 0.15, 2.4);
      if (btnSpin) {
        btnSpin.onclick = () => {
          this.autoSpin = !this.autoSpin;
          btnSpin.classList.toggle('active', this.autoSpin);
        };
      }
    }

    setView(x, y, z) {
      if (!this.camera || !this.controls) return;
      this.camera.position.set(x, y, z);
      this.controls.target.set(0, 0.10, 0);
      this.controls.update();
    }

    setColor(hexColor) {
      this.activeColor = hexColor;
      if (this.gloveMaterial) {
        this.gloveMaterial.color.set(hexColor);
      }
      document.querySelectorAll('.material-picker .color-dot').forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('data-color').toLowerCase() === hexColor.toLowerCase());
      });
    }

    renderColorPicker() {
      const container = document.getElementById('materialPickerContainer');
      if (!container || !this.product) return;

      container.innerHTML = `
        <span class="picker-label">Colores Oficiales:</span>
        ${this.product.colores.map(c => `
          <button class="color-dot ${c.hex.toLowerCase() === this.activeColor.toLowerCase() ? 'active' : ''}" 
                  data-color="${c.hex}" 
                  data-name="${c.nombre}" 
                  title="${c.nombre}" 
                  style="background: ${c.hex};">
          </button>
        `).join('')}
      `;

      container.querySelectorAll('.color-dot').forEach(btn => {
        btn.onclick = () => this.setColor(btn.getAttribute('data-color'));
      });
    }

    renderHotspots() {
      const overlay = document.getElementById('hotspotsOverlay');
      if (!overlay || !this.product || !this.product.hotspots) return;
      overlay.innerHTML = '';

      this.product.hotspots.forEach(h => {
        const pin = document.createElement('button');
        pin.className = 'hotspot-3d';
        pin.id = `pin-${h.id}`;
        pin.innerHTML = `
          <div class="pin-ring">
            <div class="pin-pulse"></div>
            <div class="pin-core"></div>
          </div>
          <span class="pin-label">${h.name}</span>
        `;
        pin.onclick = () => this.selectHotspot(h);
        overlay.appendChild(pin);
      });
    }

    selectHotspot(h) {
      this.activeHotspotId = h.id;
      const titleEl = document.getElementById('featureTitle');
      const descEl = document.getElementById('featureDesc');
      const zoneBadge = document.getElementById('zoneBadge');

      if (titleEl) titleEl.textContent = h.name;
      if (descEl) descEl.textContent = h.desc;
      if (zoneBadge) zoneBadge.textContent = h.zone;

      if (h.camTarget && this.camera && this.controls) {
        this.camera.position.set(h.camTarget.x * 2, h.camTarget.y, (h.camDistance || 1.2) * 2);
        this.controls.target.set(h.camTarget.x, h.camTarget.y, h.camTarget.z || 0);
        this.controls.update();
      }
    }

    updateHotspotsPositions() {
      if (!this.product || !this.product.hotspots || !this.camera || !this.container) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;

      this.product.hotspots.forEach(h => {
        const pin = document.getElementById(`pin-${h.id}`);
        if (!pin) return;

        const pos = new THREE.Vector3(h.pos.x, h.pos.y, h.pos.z);
        pos.project(this.camera);

        const isBehind = pos.z > 1;
        if (isBehind) {
          pin.style.display = 'none';
          return;
        }

        pin.style.display = 'flex';
        const screenX = (pos.x * 0.5 + 0.5) * width;
        const screenY = (-pos.y * 0.5 + 0.5) * height;

        pin.style.left = `${screenX}px`;
        pin.style.top = `${screenY}px`;
      });
    }

    renderSidebarInfo() {
      if (!this.product) return;
      const p = this.product;

      const modelTag = document.getElementById('labModelTag');
      if (modelTag) modelTag.textContent = `${p.linea} • CÓDIGO: ${p.codigo}`;

      const titleEl = document.getElementById('featureTitle');
      if (titleEl) titleEl.textContent = p.nombre;

      const descEl = document.getElementById('featureDesc');
      if (descEl) descEl.textContent = p.descripcion;

      const zoneBadge = document.getElementById('zoneBadge');
      if (zoneBadge) zoneBadge.textContent = 'FICHA TÉCNICA OFICIAL';

      const specsGrid = document.getElementById('specsGrid');
      if (specsGrid && p.specs) {
        specsGrid.innerHTML = Object.entries(p.specs).map(([key, val]) => `
          <div class="spec-box">
            <span class="spec-name">${key}</span>
            <strong class="spec-value">${val}</strong>
          </div>
        `).join('');
      }

      const chemPositive = document.getElementById('chemPositiveText');
      if (chemPositive && p.quimica) chemPositive.textContent = p.quimica.alta;

      const chemNegative = document.getElementById('chemNegativeText');
      if (chemNegative && p.quimica) chemNegative.textContent = p.quimica.baja;

      const appEl = document.getElementById('appText');
      if (appEl) appEl.textContent = p.aplicaciones;

      const quoteBtn = document.getElementById('btnQuoteProduct3D');
      if (quoteBtn) {
        quoteBtn.onclick = () => {
          const waMsg = `Hola Preinducol S.A.S., deseo cotizar el producto inspeccionado en 3D: ${p.nombre} (${p.codigo}).`;
          window.open(`https://wa.me/573118420561?text=${encodeURIComponent(waMsg)}`, '_blank');
        };
      }
    }

    startLoop() {
      const animate = () => {
        requestAnimationFrame(animate);
        if (this.controls) this.controls.update();
        if (this.autoSpin && this.gloveGroup) {
          this.gloveGroup.rotation.y += 0.008;
        }
        this.updateHotspotsPositions();
        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera);
        }
      };
      animate();
    }

    onResize() {
      if (!this.container || !this.camera || !this.renderer) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }

    changeProduct(productId) {
      if (!window.Visor3DData) return;
      this.product = window.Visor3DData.getProduct(productId);
      this.activeColor = this.product.colorDefault;

      if (this.gloveMaterial) {
        const matProps = this.product.material3D || { roughness: 0.28, metalness: 0.04 };
        this.gloveMaterial.color.set(this.activeColor);
        this.gloveMaterial.roughness = matProps.roughness;
        this.gloveMaterial.metalness = matProps.metalness;
        this.gloveMaterial.needsUpdate = true;
      }

      this.renderSidebarInfo();
      this.renderColorPicker();
      this.renderHotspots();
      this.setView(0, 0.15, 2.4);
    }
  }

  function mount(targetContainerId, forcedProductId) {
    const container = document.getElementById(targetContainerId || 'webglViewport');
    if (!container) return;

    const prodId = forcedProductId || getQueryParam('producto') || 'ruberplus-20';
    currentApp = new GloveViewerEngine(container, prodId);
    return currentApp;
  }

  return {
    mount,
    getEngine: () => currentApp
  };
})();