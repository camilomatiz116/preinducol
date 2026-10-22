/**
 * PREINDUCOL S.A.S. - MÓDULO DE DATOS: LABORATORIO 3D
 * Catálogo técnico completo para inspección holográfica 360° de las 9 líneas oficiales.
 */
window.Visor3DData = (function () {
  
  const PRODUCTS = {
    'ruberplus-20': {
      id: 'ruberplus-20',
      codigo: 'FT-RUB20',
      nombre: 'Guante Ruberplus™ Calibre 20',
      linea: 'LÍNEA HOGAR E INDUSTRIA',
      subtitulo: 'Látex 100% Biodegradable • Producto Insignia',
      descripcion: 'El guante preferido en Colombia. Fabricado en látex natural 100% biodegradable con aditivos antibacteriales que aceleran su degradación natural. Posee labrado antideslizante en relieve tipo panal en dedos y palma, calibre parejo y diseño anatómico curvo de descanso.',
      colorDefault: '#facc15',
      colores: [
        { nombre: 'Amarillo Clásico', hex: '#facc15' },
        { nombre: 'Azul Institucional', hex: '#0284c7' },
        { nombre: 'Rojo Ruberplus', hex: '#dc2626' },
        { nombre: 'Verde Preinducol', hex: '#15803d' }
      ],
      material3D: {
        roughness: 0.28,
        metalness: 0.04
      },
      specs: {
        'Materia Prima': 'Látex 100% Natural',
        'Largo Oficial': '30 cm con Orillo',
        'Calibre': '20 Parejo (0.50 mm)',
        'Presentación': 'Cajas x 12 Docenas'
      },
      quimica: {
        alta: 'Productos cáusticos, detergentes concentrados, soluciones ácidas diluidas, hipoclorito.',
        baja: 'Disolventes orgánicos (thinner, varsol, gasolina, derivados del petróleo, ACPM).'
      },
      aplicaciones: 'Aseo institucional, labores del hogar, manipulación de detergentes, jardinería, lavado y desinfección general en colegios, restaurantes y hospitales.',
      ratings: { grip: 98, chem: 92, flex: 99 },
      hotspots: [
        {
          id: 'fingertips',
          name: 'Labrado Especial Antideslizante',
          zone: 'DEDOS / PALMA',
          desc: 'Labrado microestructurado en relieve antideslizante para un agarre firme al manipular superficies húmedas, jabonosas o con detergentes concentrados.',
          chips: ['Labrado Antideslizante', 'Alta Adherencia con Jabón', 'Máximo Agarre'],
          camTarget: { x: -0.1, y: 0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: -0.15, y: 0.88, z: 0.08 }
        },
        {
          id: 'thumb',
          name: 'Diseño Anatómico de Fácil Manejo',
          zone: 'PULGAR / PINZA',
          desc: 'Molde ergonómico curvo desarrollado por Preinducol S.A.S. que reproduce la postura natural de descanso de la mano, brindando mayor suavidad y confort.',
          chips: ['Cero Fatiga', 'Mayor Suavidad', 'Fácil Manejo'],
          camTarget: { x: -0.35, y: 0.25, z: 0 },
          camDistance: 0.70,
          pos: { x: -0.48, y: 0.25, z: 0.06 }
        },
        {
          id: 'palm',
          name: 'Calibre 20 Parejo y Homogéneo',
          zone: 'PALMA / ESTRUCTURA',
          desc: 'Espesor uniforme de 0.50 mm en toda la pieza, garantizando resistencia sin puntos débiles frente a productos cáusticos y jabones industriales.',
          chips: ['Calibre 20 Parejo', 'Resistente a Cáusticos', 'Grosor Homogéneo'],
          camTarget: { x: 0, y: 0.15, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.02, y: 0.15, z: 0.08 }
        },
        {
          id: 'dorso',
          name: '100% Biodegradable & Antibacterial',
          zone: 'DORSO / ECOLÓGICO',
          desc: 'Formulación con aditivos activos que ejercen una acción antibacterial continua y aceleran su biodegradación natural al desecharse.',
          chips: ['100% Biodegradable', 'Acción Antibacterial', 'Eco-Amigable'],
          camTarget: { x: 0, y: 0.18, z: 0 },
          camDistance: 0.80,
          pos: { x: 0.02, y: 0.18, z: -0.09 }
        },
        {
          id: 'sleeve',
          name: 'Largo 30 cm con Orillo Antiescurrimiento',
          zone: 'MANGA / PROTECCIÓN',
          desc: 'Terminación en orillo enrollado que refuerza la boca del guante para evitar desgarros al calzar y previene que los líquidos resbalen hacia el antebrazo.',
          chips: ['Orillo Antidesgarro', 'Antigoteo Eficaz', 'Calce Seguro'],
          camTarget: { x: 0.05, y: -0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.06, y: -0.84, z: 0.11 }
        }
      ]
    },

    'ruberplus-25': {
      id: 'ruberplus-25',
      codigo: 'FT-RUB25',
      nombre: 'Ruberplus™ Calibre 25',
      linea: 'LÁTEX SEMIPESADO INSTITUCIONAL',
      subtitulo: 'Espesor Aumentado para Fricción Continua',
      descripcion: 'Guante de látex natural con calibre aumentado a 25 para labores que requieren mayor resistencia mecánica a la fricción, abrasión y contacto frecuente con desinfectantes de alta concentración en entornos hospitalarios, hoteleros y de limpieza técnica.',
      colorDefault: '#2563eb',
      colores: [
        { nombre: 'Azul Institucional', hex: '#2563eb' },
        { nombre: 'Amarillo Institucional', hex: '#facc15' },
        { nombre: 'Bicolor Reforzado', hex: '#0284c7' }
      ],
      material3D: {
        roughness: 0.32,
        metalness: 0.04
      },
      specs: {
        'Materia Prima': 'Látex Reforzado',
        'Largo Oficial': '30 cm con Orillo',
        'Calibre': '25 Parejo (0.63 mm)',
        'Presentación': 'Cajas x 12 Docenas'
      },
      quimica: {
        alta: 'Desinfectantes cuaternarios, hipoclorito concentrado, soda cáustica diluida y desengrasantes.',
        baja: 'Solventes aromáticos puros y bencenos.'
      },
      aplicaciones: 'Aseo hospitalario pesado, lavanderías industriales, casinos de alimentos, hoteles y mantenimiento institucional intensivo.',
      ratings: { grip: 95, chem: 94, flex: 96 },
      hotspots: [
        {
          id: 'fingertips',
          name: 'Puntas Reforzadas Calibre 25',
          zone: 'DEDOS / DESGASTE',
          desc: 'Mayor grosor en la yema de los dedos para soportar el fregado constante sobre baldosas, acero inoxidable y pisos rugosos.',
          chips: ['Resistencia al Frote', 'Cero Filtraciones', 'Calibre 25'],
          camTarget: { x: -0.1, y: 0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: -0.15, y: 0.88, z: 0.08 }
        },
        {
          id: 'palm',
          name: 'Palma Antideslizante Reforzada',
          zone: 'PALMA / TRABAJO PESADO',
          desc: 'Formulación densificada para resistir la tracción continua de traperos, esponjillas metálicas y equipos de limpieza industrial.',
          chips: ['Alta Tenacidad', 'Antideslizante', 'Mayor Vida Útil'],
          camTarget: { x: 0, y: 0.15, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.02, y: 0.15, z: 0.08 }
        },
        {
          id: 'sleeve',
          name: 'Manga de Alta Resistencia',
          zone: 'MANGA / ORILLO',
          desc: 'Orillo vulcanizado de mayor densidad para evitar rasgaduras en jornadas de trabajo repetitivas.',
          chips: ['Vulcanizado Seguro', 'Ajuste Firme', '30 cm Largo'],
          camTarget: { x: 0.05, y: -0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.06, y: -0.84, z: 0.11 }
        }
      ]
    },

    'indumax': {
      id: 'indumax',
      codigo: 'FT-IND25',
      nombre: 'Guante Indumax™ Industrial',
      linea: 'LÍNEA INDUSTRIAL SEVERO',
      subtitulo: 'Formulación Robusta para Fábricas y Agroindustria',
      descripcion: 'Desarrollado para entornos de trabajo severo. Ofrece protección de alto nivel en floricultura, agroindustria, plantas de procesamiento de alimentos y manejo de insumos químicos moderados. Incorpora interior satinado antifatiga para jornadas continuas.',
      colorDefault: '#059669',
      colores: [
        { nombre: 'Verde Esmeralda', hex: '#059669' },
        { nombre: 'Negro Industrial', hex: '#0f172a' },
        { nombre: 'Amarillo Cromo', hex: '#ca8a04' }
      ],
      material3D: {
        roughness: 0.35,
        metalness: 0.06
      },
      specs: {
        'Materia Prima': 'Látex Industrial Formulado',
        'Largo Oficial': '30 cm a 35 cm',
        'Calibre': '25 a 35 Industrial',
        'Interior': 'Satinado Antifatiga'
      },
      quimica: {
        alta: 'Ácidos inorgánicos diluidos, bases alcalinas, fertilizantes foliares, soluciones agroquímicas.',
        baja: 'Solventes clorados, cetonas y derivados del petróleo no diluidos.'
      },
      aplicaciones: 'Plantas de producción, cultivo y poscosecha de flores, agroindustria, avícolas, procesamiento cárnico y manufactura química.',
      ratings: { grip: 96, chem: 95, flex: 92 },
      hotspots: [
        {
          id: 'fingertips',
          name: 'Grabado Industrial Antideslizante',
          zone: 'DEDOS / AGARRE AGRO',
          desc: 'Labrado profundo para corte de tallos de flores, manipulación de tijeras podadoras y piezas húmedas resbaladizas.',
          chips: ['Agarre Preciso', 'Antideslizante Agro', 'Alta Sensibilidad'],
          camTarget: { x: -0.1, y: 0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: -0.15, y: 0.88, z: 0.08 }
        },
        {
          id: 'palm',
          name: 'Interior Satinado Antifatiga',
          zone: 'INTERIOR / CONFORT',
          desc: 'Tratamiento interior suave que facilita el calce y retiro rápido, absorbe transpiración y reduce la fatiga muscular durante 8 horas continuas.',
          chips: ['Antifatiga', 'Fácil Colocación', 'Uso Continuo'],
          camTarget: { x: 0, y: 0.15, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.02, y: 0.15, z: 0.08 }
        },
        {
          id: 'sleeve',
          name: 'Orillo Antiescurrimiento Reforzado',
          zone: 'MANGA / SEGURIDAD',
          desc: 'Evita el regreso de salpicaduras químicas hacia el antebrazo del operador en mesas de corte y laboratorio.',
          chips: ['Barrera Antigoteo', 'Seguridad Industrial', 'Resistente'],
          camTarget: { x: 0.05, y: -0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.06, y: -0.84, z: 0.11 }
        }
      ]
    },

    'rubber-50': {
      id: 'rubber-50',
      codigo: 'FT-RUB50',
      nombre: 'Rubber 50™ (Calibre 50 Extra Pesado)',
      linea: 'PROTECCIÓN QUÍMICA EXTENSA',
      subtitulo: 'Barrera Extra Gruesa de 1.25 mm para Inmersión Severa',
      descripcion: 'El guante de látex más denso y robusto del catálogo. Diseñado para faenas de inmersión química severa en curtiembres, industria petrolera, decapado de metales, galvanoplastia y mantenimiento de tanques de sedimentación con ácidos concentrados.',
      colorDefault: '#dc2626',
      colores: [
        { nombre: 'Rojo Industrial Severo', hex: '#dc2626' },
        { nombre: 'Negro Extra Pesado', hex: '#0f172a' },
        { nombre: 'Naranja Inmersión', hex: '#ea580c' }
      ],
      material3D: {
        roughness: 0.42,
        metalness: 0.08
      },
      specs: {
        'Materia Prima': 'Látex Vulcanizado Alta Densidad',
        'Largo Oficial': '35 cm a 40 cm',
        'Calibre': 'Calibre 50 (1.25 mm)',
        'Resistencia': 'Inmersión y Punzonamiento'
      },
      quimica: {
        alta: 'Ácido sulfúrico y clorhídrico en concentraciones industriales, soluciones de decapado, lixiviados.',
        baja: 'Hidrocarburos ligeros calientes (solventes tipo bencina).'
      },
      aplicaciones: 'Curtiembres, tratamiento térmico y galvánico de metales, limpieza de trampas de grasa pesada, industria petroquímica y minería.',
      ratings: { grip: 90, chem: 99, flex: 82 },
      hotspots: [
        {
          id: 'palm',
          name: 'Pared Extra Gruesa de 1.25 mm',
          zone: 'ESTRUCTURA / BARRERA',
          desc: 'Espesor extremo de 50 milésimas que detiene la permeación de agentes corrosivos y resiste punzonamiento.',
          chips: ['Calibre 50', 'Máxima Barrera', 'Cero Fugas'],
          camTarget: { x: 0, y: 0.15, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.02, y: 0.15, z: 0.08 }
        },
        {
          id: 'sleeve',
          name: 'Manga Larga de Seguridad 35 cm',
          zone: 'MANGA / COBERTURA',
          desc: 'Mayor cobertura del brazo para inmersión profunda en tanques y tambores químicos.',
          chips: ['Cobertura Amplia', 'Inmersión Segura', 'Orillo Grueso'],
          camTarget: { x: 0.05, y: -0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.06, y: -0.84, z: 0.11 }
        }
      ]
    },

    'mosquetero': {
      id: 'mosquetero',
      codigo: 'FT-MOSQ',
      nombre: 'Guante Mosquetero™ Manga Larga',
      linea: 'PROTECCIÓN HASTA ANTEBRAZO',
      subtitulo: 'Longitud Extendida de 40 cm para Fosas y Tanques',
      descripcion: 'Guante de látex natural formulado con longitud especial extendida de 40 cm que resguarda la mano, la muñeca y la totalidad del antebrazo del operario contra salpicaduras profundas e inmersión en líquidos cáusticos.',
      colorDefault: '#7c3aed',
      colores: [
        { nombre: 'Púrpura Inmersión', hex: '#7c3aed' },
        { nombre: 'Negro Severo', hex: '#1e293b' },
        { nombre: 'Naranja Seguridad', hex: '#ea580c' }
      ],
      material3D: {
        roughness: 0.30,
        metalness: 0.05
      },
      specs: {
        'Materia Prima': 'Látex Natural Puro',
        'Largo Oficial': '40 cm (16 pulgadas)',
        'Calibre': 'Calibre 35 Reforzado',
        'Terminación': 'Orillo Rígido Antigoteo'
      },
      quimica: {
        alta: 'Soluciones cáusticas, desengrasantes acuosos, aguas residuales y salpicaduras químicas.',
        baja: 'Solventes cetónicos concentrados.'
      },
      aplicaciones: 'Pozos sépticos, limpieza de trampas de grasa, faenas en frigoríficos, plantas de tratamiento de agua y teñido industrial.',
      ratings: { grip: 92, chem: 96, flex: 90 },
      hotspots: [
        {
          id: 'sleeve',
          name: 'Manga de Cobertura Extendida (40 cm)',
          zone: 'ANTEBRAZO / PROTECCIÓN',
          desc: 'Longitud de 40 cm que protege la piel del antebrazo frente a salpicaduras directas al sumergir recipientes.',
          chips: ['Largo 40 cm', 'Protección Total', 'Orillo Antiescurrimiento'],
          camTarget: { x: 0.05, y: -0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.06, y: -0.84, z: 0.11 }
        },
        {
          id: 'fingertips',
          name: 'Palma con Agarre Antideslizante',
          zone: 'PALMA / AGARRE',
          desc: 'Relieve optimizado para sujetar mangueras de presión y herramientas sumergidas.',
          chips: ['Sujeción Firme', 'Antideslizante', 'Látex Puro'],
          camTarget: { x: -0.1, y: 0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: -0.15, y: 0.88, z: 0.08 }
        }
      ]
    },

    'corrugado': {
      id: 'corrugado',
      codigo: 'FT-CORR',
      nombre: 'Guante Corrugado™ Antideslizante',
      linea: 'SUPERFICIE TEXTURIZADA DE ALTO AGARRE',
      subtitulo: 'Acabado Arrugado de Alta Fricción en Húmedo y Aceite',
      descripcion: 'Guante de látex natural con un grabado en relieve corrugado tipo arruga profunda. Proporciona el máximo coeficiente de fricción de todo el catálogo para la sujeción de objetos resbalosos, vidrios húmedos, láminas metálicas aceitosas y pescado fresco.',
      colorDefault: '#ea580c',
      colores: [
        { nombre: 'Naranja Tracción', hex: '#ea580c' },
        { nombre: 'Amarillo Tracción', hex: '#facc15' },
        { nombre: 'Azul Marino', hex: '#1e3a8a' }
      ],
      material3D: {
        roughness: 0.55,
        metalness: 0.02
      },
      specs: {
        'Materia Prima': 'Látex con Grabado Corrugado',
        'Largo Oficial': '30 cm con Orillo',
        'Calibre': 'Calibre 35 con Relieve',
        'Rendimiento': 'Cero Deslizamiento en Húmedo'
      },
      quimica: {
        alta: 'Agua marina, detergentes, aceites de pescado y soluciones acuosas jabonosas.',
        baja: 'Solventes aromáticos puros.'
      },
      aplicaciones: 'Procesamiento de pescado y mariscos, cristalerías, manipulación de láminas metálicas aceitosas, embotelladoras y faenas navales.',
      ratings: { grip: 99, chem: 92, flex: 94 },
      hotspots: [
        {
          id: 'fingertips',
          name: 'Grabado Corrugado de Alta Fricción',
          zone: 'PALMA & DEDOS / TRACCIÓN',
          desc: 'Relieve rugoso tipo panal vulcanizado que disipa películas de agua y aceite para fijar la pieza de trabajo.',
          chips: ['Cero Deslizamiento', 'Tracción Extrema', 'Firmeza Total'],
          camTarget: { x: -0.1, y: 0.80, z: 0 },
          camDistance: 0.75,
          pos: { x: -0.15, y: 0.88, z: 0.08 }
        }
      ]
    },

    'nitrilo': {
      id: 'nitrilo',
      codigo: 'FT-NITR',
      nombre: 'Guantes de Nitrilo Industrial',
      linea: 'BIOSEGURIDAD & SOLVENTES',
      subtitulo: '100% Libre de Alérgenos de Látex y Polvo',
      descripcion: 'Guante de nitrilo sintético de alta resistencia a grasas animales, solventes aromáticos, hidrocarburos y aceites de origen vegetal o mineral. Totalmente libre de proteínas de látex natural, ideal para personas con sensibilidad cutánea o procesos asépticos.',
      colorDefault: '#0284c7',
      colores: [
        { nombre: 'Azul Nitrilo', hex: '#0284c7' },
        { nombre: 'Verde Químico', hex: '#059669' },
        { nombre: 'Negro Táctico', hex: '#18181b' }
      ],
      material3D: {
        roughness: 0.22,
        metalness: 0.10
      },
      specs: {
        'Materia Prima': 'Polímero de Nitrilo Sintético',
        'Largo Oficial': '30 cm a 33 cm',
        'Calibre': 'Calibre 15 a 20 Químico',
        'Propiedad': 'Sin Látex • Hipoalergénico'
      },
      quimica: {
        alta: 'Grasas animales, aceites minerales, hidrocarburos, solventes aromáticos, pesticidas.',
        baja: 'Ácidos oxidantes muy concentrados (ácido nítrico puro).'
      },
      aplicaciones: 'Frigoríficos, plantas lecheras, talleres mecánicos, laboratorios farmacéuticos y desengrase de piezas de automoción.',
      ratings: { grip: 94, chem: 98, flex: 95 },
      hotspots: [
        {
          id: 'palm',
          name: 'Barrera de Nitrilo Impermeable',
          zone: 'ESTRUCTURA SINTÉTICA',
          desc: 'Polímero sintético que no se degrada en presencia de grasas animales ni aceites minerales.',
          chips: ['Resistente a Grasas', 'Sin Alergias', 'Hipoalergénico'],
          camTarget: { x: 0, y: 0.15, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.02, y: 0.15, z: 0.08 }
        }
      ]
    },

    'cuero-vaqueta': {
      id: 'cuero-vaqueta',
      codigo: 'FT-VAQ',
      nombre: 'Guantes Cuero Vaqueta',
      linea: 'LÍNEA CUERO INDUSTRIAL',
      subtitulo: 'Vaqueta de Res de Primera Selección',
      descripcion: 'Confección en cuero vacuno seleccionado suave de alta tenacidad mecánica. Ofrece excelente maniobrabilidad y tacto para operaciones mecánicas, montaje de tuberías, transporte de materiales pesados y conducción de maquinaria.',
      colorDefault: '#b45309',
      colores: [
        { nombre: 'Miel Vaqueta', hex: '#b45309' },
        { nombre: 'Cuero Natural', hex: '#d97706' },
        { nombre: 'Amarillo Cromo', hex: '#ca8a04' }
      ],
      material3D: {
        roughness: 0.65,
        metalness: 0.01
      },
      specs: {
        'Materia Prima': 'Cuero Vacuno (Vaqueta de Res)',
        'Largo Oficial': '25 cm Manga Corta',
        'Costura': 'Hilo Poliéster Reforzado',
        'Calidad': 'Primera Flor Selección'
      },
      quimica: {
        alta: 'Abrasión mecánica severa, fricción con cuerdas, herramientas de mano y madera.',
        baja: 'Líquidos químicos corrosivos e inmersión prolongada.'
      },
      aplicaciones: 'Logística, transporte de carga, montajes mecánicos, mantenimiento de plantas, cerrajería y obras civiles.',
      ratings: { grip: 90, chem: 60, flex: 88 },
      hotspots: [
        {
          id: 'palm',
          name: 'Palma en Cuero Flor Reforzado',
          zone: 'PALMA / MECÁNICA',
          desc: 'Cuero flor de res que proporciona flexibilidad superior sin perder resistencia a desgarros.',
          chips: ['Cuero Vacuno', 'Alta Tenacidad', 'Costura Firme'],
          camTarget: { x: 0, y: 0.15, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.02, y: 0.15, z: 0.08 }
        }
      ]
    },

    'cuero-carnaza': {
      id: 'cuero-carnaza',
      codigo: 'FT-CARN',
      nombre: 'Guantes Cuero Carnaza Soldadura',
      linea: 'METALMECÁNICA & SOLDADURA',
      subtitulo: 'Protección Térmica Pesada contra Chispas y Calor Radiante',
      descripcion: 'Fabricado en carnaza de res gruesa tratada contra calor radiante e impactos de chispas incandescentes de soldadura por electrodo revestido y microalambre (MIG). Incorpora manga larga de 14 pulgadas para resguardo de la muñeca y antebrazo.',
      colorDefault: '#475569',
      colores: [
        { nombre: 'Gris Carnaza', hex: '#475569' },
        { nombre: 'Marrón Soldador', hex: '#78350f' },
        { nombre: 'Rojo Soldadura', hex: '#991b1b' }
      ],
      material3D: {
        roughness: 0.85,
        metalness: 0.00
      },
      specs: {
        'Materia Prima': 'Carnaza de Res Gruesa',
        'Largo Oficial': '35 cm (14 pulgadas)',
        'Costura': 'Hilo de Kevlar / Poliéster Fuerte',
        'Resistencia': 'Chispas de Soldadura y Calor'
      },
      quimica: {
        alta: 'Chispas incandescentes, calor por contacto moderado, rebabas metálicas y esmerilado.',
        baja: 'Químicos corrosivos líquidos y humedad.'
      },
      aplicaciones: 'Soldadura de estructuras, corte con oxicorte, esmerilado de piezas de acero, metalmecánica pesada y fundición.',
      ratings: { grip: 86, chem: 55, flex: 78 },
      hotspots: [
        {
          id: 'palm',
          name: 'Carnaza Gruesa Antichispas',
          zone: 'PALMA / SOLDADURA',
          desc: 'Espesor robusto que disipa el calor y detiene las proyecciones de soldadura sin perforarse.',
          chips: ['Resiste Chispas', 'Calor Radiante', 'Manga de 14"'],
          camTarget: { x: 0, y: 0.15, z: 0 },
          camDistance: 0.75,
          pos: { x: 0.02, y: 0.15, z: 0.08 }
        }
      ]
    }
  };

  function getProduct(id) {
    if (!id) return PRODUCTS['ruberplus-20'];
    const cleanId = String(id).toLowerCase().trim();
    return PRODUCTS[cleanId] || PRODUCTS['ruberplus-20'];
  }

  function getAllProducts() {
    return Object.values(PRODUCTS);
  }

  return {
    PRODUCTS,
    getProduct,
    getAllProducts
  };
})();
