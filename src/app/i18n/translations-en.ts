import { TranslationContent } from './translation.types';
import { SHARED_IMAGES } from './shared-images';

export const EN_TRANSLATION: TranslationContent = {
  meta: {
    title: 'Cardamomo Guatemala | Premium Cardamom Export to Europe & the Middle East',
    description:
      'Family-owned Guatemalan exporter of premium cardamom. Certified quality, Mayan heritage, and reliable logistics to Europe and the Middle East.'
  },
  nav: [
    { href: '#inicio', label: 'Home' },
    { href: '#nosotros', label: 'About Us' },
    { href: '#productos', label: 'Products' },
    { href: '#calidades', label: 'Grades' },
    { href: '#procesos', label: 'Processing' },
    { href: '#logistica', label: 'Logistics' },
    { href: '#contacto', label: 'Contact' }
  ],
  header: {
    cta: 'Request a Quote',
    langEs: 'ES',
    langEn: 'EN'
  },
  hero: {
    badge: 'Exporters from the heart of Guatemala',
    title: 'World-Class ',
    titleEm: 'Guatemalan Cardamom',
    titleEnd: '',
    description:
      'Three generations cultivating the most aromatic cardamom from the highlands. We export premium quality to importers across Europe and the Middle East, backed by the trust of a Guatemalan family business.',
    ctaSample: 'Request a Sample',
    ctaProducts: 'View Products',
    statsLabel: 'Company highlights',
    stats: [
      { value: '30+', label: 'Years of experience' },
      { value: '15', label: 'Destination countries' },
      { value: '100%', label: 'Full traceability' }
    ],
    videoTitle: 'Cardamomo Guatemala corporate video',
    videoCaption: 'Discover our story and the origin of our premium cardamom',
    scrollLabel: 'Scroll to the next section'
  },
  about: {
    label: 'Our Story',
    title: 'About Us',
    subtitle:
      'A Guatemalan family business with decades of experience exporting the world\'s most aromatic cardamom.',
    imageAlt: 'Elettaria cardamomum cardamom plantation in the Guatemalan highlands',
    badge: 'Since 1990',
    lead:
      'We are Guatemalan exporters of premium cardamom, founded on the values of integrity, dedicated work, and respect for the land that has given us so much.',
    p1:
      'Our family farm in the producing regions of Alta Verapaz and Quiché allows us to control every stage — from planting to port delivery. We work directly with importers in Europe (Spain, Germany, the Netherlands) and the Middle East (UAE, Saudi Arabia, Qatar), offering a product distinguished by its intense aroma, bright green colour, and low moisture content.',
    p2:
      'We believe Guatemalan cardamom deserves recognition as a global benchmark for quality, and every shipment we make carries the pride of our cultural heritage.',
    quote: 'From Guatemala\'s sacred soil to the world, with the warmth of a family that cares for every grain.',
    quoteCite: '— Founders, Cardamomo Guatemala',
    values: [
      {
        icon: '🌿',
        title: 'Family Tradition',
        description:
          'Three generations dedicated to cultivating and trading cardamom in the highlands of Guatemala.'
      },
      {
        icon: '✦',
        title: 'Mayan Heritage',
        description:
          'We honour the cultural roots of our land, where cardamom has been an ancestral treasure.'
      },
      {
        icon: '🌍',
        title: 'Global Reach',
        description:
          'We successfully export to importers in Europe, the Middle East, and international gourmet markets.'
      },
      {
        icon: '🏆',
        title: 'Certified Quality',
        description:
          'Controlled processes from harvest to shipment, with full batch traceability.'
      }
    ]
  },
  products: {
    label: 'Our Catalogue',
    title: 'Products',
    subtitle:
      'Export lines tailored to the requirements of European and Middle Eastern importers. Guatemala produces Elettaria cardamomum, globally recognised as the highest-quality green cardamom.',
    consultLink: 'Check availability →',
    varietiesTitle: 'Guatemalan Varieties & Germplasm',
    varietiesIntro:
      'Cardamom arrived in Guatemala between 1910 and 1914 from the Malabar Coast (India). Today, the country is the world\'s largest producer, with 70% of the harvest concentrated in Alta Verapaz, followed by Quiché, Huehuetenango, and Izabal.',
    cultivationTitle: 'Cultivation Methods',
    items: [
      {
        name: 'Whole Cardamom',
        description:
          'Whole pods of intense green colour, hand-selected. Ideal for gourmet markets and premium baking.',
        specs: ['Size 7+ mm', 'Bright green colour', 'Intense aroma'],
        icon: '◆',
        image: SHARED_IMAGES.productGrano,
        imageAlt: 'Green cardamom pods with visible seeds'
      },
      {
        name: 'Decorticated Cardamom',
        description:
          'Clean seeds ready for grinding or direct use. High yield for the food and beverage industry.',
        specs: ['99%+ purity', 'Low residue', 'Uniform grind'],
        icon: '◇',
        image: SHARED_IMAGES.productDescascarado,
        imageAlt: 'Dried Elettaria cardamomum capsules'
      },
      {
        name: 'Ground Cardamom',
        description:
          'Fine powder of maximum freshness, vacuum-packed to preserve aroma and essential oils.',
        specs: ['Mesh 60–80', 'Vacuum packaging', 'Extended shelf life'],
        icon: '◎',
        image: SHARED_IMAGES.productMolido,
        imageAlt: 'Elettaria cardamomum flower and fruit on the plant'
      },
      {
        name: 'Custom Blends',
        description:
          'Tailored blends to importer specifications. Cardamom with cinnamon, cloves, or other spices.',
        specs: ['Custom formulas', 'Private labelling', 'Flexible MOQ'],
        icon: '✦',
        image: SHARED_IMAGES.productMezclas,
        imageAlt: 'Product made with high-quality ground cardamom'
      }
    ],
    varieties: [
      {
        name: 'Elettaria cardamomum',
        origin: 'Sole species in Guatemala',
        description:
          'Introduced from the Malabar Coast (India) between 1910–1914. It is the only commercially cultivated species in the country and the foundation of Guatemala\'s global cardamom exports.',
        traits: [
          'Perennial of the Zingiberaceae family',
          'Altitude 250–1,500 m a.s.l.',
          'Shade-grown under native trees'
        ]
      },
      {
        name: 'Vazhukka-type lines',
        origin: 'Predominant germplasm',
        description:
          'Molecular studies in Alta Verapaz, Quiché, and Izabal show that most local germplasm aligns with intermediate-stature varieties similar to Indian Vazhukka.',
        traits: [
          'Medium-to-large capsules',
          'High yield per hectare',
          'Characteristic fruity aroma'
        ]
      },
      {
        name: 'Malabar-type lines',
        origin: 'Export selection',
        description:
          'Upright plants with bright green capsules rich in essential oils (cineole and α-terpinyl acetate). Preferred for European gourmet markets.',
        traits: ['Emerald green colour', 'Intense, lasting aroma', 'Ideal for Jumbo Green grade']
      },
      {
        name: 'Mysore-type lines',
        origin: 'Shade cultivation',
        description:
          'Robust varieties adapted to the humid microclimate of Cobán\'s cloud forests. Hand-harvested in mature clusters for maximum organoleptic quality.',
        traits: ['Shade-associated cultivation', 'Selective harvest', 'Low post-drying moisture']
      }
    ],
    cultivation: [
      {
        title: 'Shade System',
        detail:
          'Plantations under native tree canopy (chaparro, inga) replicating cardamom\'s natural habitat in tropical forests.'
      },
      {
        title: 'Smallholder Producers',
        detail:
          'Over 70% of national production comes from family farms in Alta Verapaz, Quiché, and Izabal — the Northern Transversal Strip.'
      },
      {
        title: 'Controlled Drying',
        detail:
          'Wood or gas dryers that preserve green colour and reduce moisture below 12%, a key requirement for export.'
      },
      {
        title: 'Batch Traceability',
        detail:
          'Every batch is tracked from the source farm to shipment, with records of harvest, drying, and grading dates.'
      }
    ]
  },
  qualities: {
    label: 'Export Standards',
    title: 'Cardamom Grades',
    subtitle:
      'Guatemalan commercial grades classified by size, colour, moisture, and essential oil content, in accordance with ADECAR and AGEXPORT standards.',
    tableCaption: 'Comparative table of Guatemalan cardamom grades',
    cols: {
      grade: 'Grade',
      size: 'Size',
      moisture: 'Moisture',
      description: 'Description',
      markets: 'Markets'
    },
    criteria: [
      {
        icon: '🎨',
        title: 'Colour',
        description:
          'Bright green with no yellow or brown spots. Measured against the ADECAR standard colour chart.'
      },
      {
        icon: '📏',
        title: 'Size',
        description:
          'Capsule diameter in millimetres, measured with calibrated sieves of 6, 7, and 8 mm mesh.'
      },
      {
        icon: '💧',
        title: 'Moisture',
        description:
          'Moisture content below 12% (premium) or 13% (commercial), verified with a digital hygrometer.'
      },
      {
        icon: '🌿',
        title: 'Essential Oils',
        description:
          'Concentration of cineole and α-terpinyl acetate that defines the characteristic aroma of Guatemalan cardamom.'
      }
    ],
    grades: [
      {
        grade: 'Jumbo Green',
        code: 'JG',
        color: '#1a3c34',
        size: '8 mm+',
        moisture: '< 10%',
        description:
          'Extra-large capsules of intense green colour. Maximum essential oil concentration. Flagship grade for premium markets in Europe and the Middle East.',
        markets: ['European Gourmet', 'UAE', 'Saudi Arabia']
      },
      {
        grade: 'Imperial Best Green',
        code: 'IBG',
        color: '#2d6a4f',
        size: '7–8 mm',
        moisture: '< 11%',
        description:
          'Large capsules of uniform bright green. Excellent aroma-to-price ratio. The most sought-after grade among European importers.',
        markets: ['Spain', 'Germany', 'Netherlands']
      },
      {
        grade: 'Fancy Green Extra',
        code: 'FGE',
        color: '#40916c',
        size: '6.5–7.5 mm',
        moisture: '< 11%',
        description:
          'Medium-sized capsules with extra green colour. Ideal for the food industry, baking, and aromatic beverages.',
        markets: ['Europe', 'Qatar', 'Processors']
      },
      {
        grade: 'Fancy Green',
        code: 'FG',
        color: '#52b788',
        size: '6–7 mm',
        moisture: '< 12%',
        description:
          'Uniform grain for grinding, blends, and industrial use. Purity above 99% after manual and mechanical selection.',
        markets: ['Industry', 'Distributors']
      },
      {
        grade: 'Mixed Green / Seeds',
        code: 'MG',
        color: '#74c69d',
        size: '5–6 mm',
        moisture: '< 13%',
        description:
          'Commercial grade and decorticated seeds for large volumes. Annual contracts with full batch traceability.',
        markets: ['Annual contracts', 'Industrial grinding']
      }
    ]
  },
  processes: {
    label: 'Processing & Toll Milling',
    title: 'Processing',
    subtitle:
      'In-house toll milling facility with capacity to process, pack, and label to each importer\'s specifications.',
    ctaText: 'Need a custom process or private-label packaging?',
    ctaButton: 'Request a Toll Milling Proposal',
    steps: [
      {
        step: '01',
        title: 'Receipt & Grading',
        description:
          'Raw material intake with moisture, colour, and size analysis. Separation by quality grades (Jumbo Green, Imperial Best Green, Fancy Green).',
        icon: '📥'
      },
      {
        step: '02',
        title: 'Cleaning & Selection',
        description:
          'Impurity removal through sieving and hand selection. We guarantee purity above 99%.',
        icon: '🔍'
      },
      {
        step: '03',
        title: 'Decortication',
        description:
          'Controlled mechanical process to extract seeds without damaging the grain\'s essential oils.',
        icon: '⚙️'
      },
      {
        step: '04',
        title: 'Grinding (optional)',
        description: 'Grinding to client specification: mesh 40, 60, or 80. Immediate vacuum packaging.',
        icon: '🏭'
      },
      {
        step: '05',
        title: 'Packing & Labelling',
        description:
          'Jute sacks (50–60 kg), corrugated cardboard boxes, or private-label packaging per importer requirements.',
        icon: '📦'
      },
      {
        step: '06',
        title: 'Quality Control',
        description:
          'Final moisture, granulometry, and organoleptic testing. Quality certificate issued per batch.',
        icon: '✅'
      }
    ],
    images: [
      {
        src: SHARED_IMAGES.processCultivo,
        alt: 'Fresh cardamom on the plant — Elettaria cardamomum flower and fruit',
        label: 'Cultivation'
      },
      {
        src: SHARED_IMAGES.processSecado,
        alt: 'Dried cardamom — green capsules with seeds',
        label: 'Drying'
      },
      {
        src: SHARED_IMAGES.processClasificacion,
        alt: 'Processed cardamom — capsules graded by size',
        label: 'Grading'
      },
      {
        src: SHARED_IMAGES.processEmpaque,
        alt: 'Jute sacks for spice export packaging',
        label: 'Packing'
      }
    ]
  },
  logistics: {
    label: 'Reliable Export',
    title: 'Logistics',
    subtitle: 'Competitive lead times and complete documentation for international importers.',
    ecomTitle: 'Response Times',
    pipelineTitle: 'Export Process from Guatemala',
    portOriginTitle: 'Port of loading',
    portOriginText: 'Puerto Quetzal, Guatemala — direct connection to major global hubs',
    docsTitle: 'Documentation',
    docsText: 'Phytosanitary certificate, certificate of origin, commercial invoice, packing list',
    trackingTitle: 'Tracking',
    trackingText: 'Container tracking and email updates at every logistics milestone',
    routeCols: {
      port: 'Destination port',
      transit: 'Transit time',
      incoterm: 'Incoterm'
    },
    ecomTimes: [
      { label: 'Quotation', time: '24–48 h' },
      { label: 'Sample', time: '5–7 days' },
      { label: 'Production', time: '10–15 days' },
      { label: 'Shipment', time: '3–5 days' }
    ],
    routes: [
      {
        destination: 'Europe',
        flag: '🇪🇺',
        port: 'Rotterdam (Netherlands) / Valencia (Spain)',
        transitTime: '18–22 days',
        incoterm: 'FOB / CIF',
        details:
          "20' and 40' HC containers from Puerto Quetzal. MAGA phytosanitary certificate, certificate of origin, and commercial invoice included. EU Regulation 396/2005 (pesticide residues) compliant."
      },
      {
        destination: 'Middle East',
        flag: '🌍',
        port: 'Jebel Ali (Dubai) / Jeddah (Saudi Arabia)',
        transitTime: '25–30 days',
        incoterm: 'FOB / CIF',
        details:
          'Reinforced packaging for extreme climates. Halal standards compliant. SGS/Bureau Veritas inspection available upon importer request.'
      },
      {
        destination: 'Asia',
        flag: '🌏',
        port: 'Singapore / Mumbai',
        transitTime: '28–35 days',
        incoterm: 'FOB',
        details:
          'Connections via transshipment at Pacific hubs. Real-time container tracking with email updates.'
      }
    ],
    pipeline: [
      {
        step: '1',
        title: 'Order & Contract',
        description:
          'Confirmation of grade, volume, Incoterm (FOB Puerto Quetzal or CIF destination), and packaging specifications.'
      },
      {
        step: '2',
        title: 'Production & Toll Milling',
        description: 'Grading, cleaning, and packing at the facility. Quality control with certificate per batch.'
      },
      {
        step: '3',
        title: 'Documentation',
        description:
          'Commercial invoice, packing list, phytosanitary certificate (MAGA), certificate of origin (AGEXPORT), and bill of lading.'
      },
      {
        step: '4',
        title: 'Inland Transport',
        description:
          'Refrigerated truck transfer from the Alta Verapaz/Guatemala City facility to Puerto Quetzal (Escuintla).'
      },
      {
        step: '5',
        title: 'Ocean Shipment',
        description:
          'Container stowage with thermal liner and moisture control. Departure to European or Persian Gulf hub.'
      },
      {
        step: '6',
        title: 'Delivery to Importer',
        description:
          'Arrival at destination port, customs clearance, and delivery per agreed Incoterm. Ongoing after-sales support.'
      }
    ],
    images: [
      {
        src: SHARED_IMAGES.logShip,
        alt: 'Container ship for international maritime export',
        caption: 'Ocean freight'
      },
      {
        src: SHARED_IMAGES.logRotterdam,
        alt: 'Port of Rotterdam — main European arrival hub',
        caption: 'European destination port'
      },
      {
        src: SHARED_IMAGES.logDubai,
        alt: 'Jebel Ali Port in Dubai — Middle East hub',
        caption: 'Middle East destination port'
      }
    ]
  },
  contact: {
    label: 'Get in Touch',
    title: 'Contact',
    subtitle:
      'Are you an importer in Europe or the Middle East? Contact us for quotations, samples, or a visit to our facility.',
    infoTitle: 'Export Details',
    representativeRole: 'Export Representative',
    cedulaLabel: 'ID No.:',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    office: 'Office',
    hours: 'Hours',
    address: 'Zone 4, Guatemala City, Guatemala',
    hoursValue: 'Monday to Friday, 8:00 AM – 5:00 PM (GMT-6)',
    marketsLabel: 'Markets we serve:',
    marketTags: ['Spain', 'Germany', 'Netherlands', 'UAE', 'Saudi Arabia', 'Qatar'],
    form: {
      name: 'Full name *',
      company: 'Company *',
      email: 'Email address *',
      country: 'Country *',
      product: 'Product of interest',
      message: 'Message *',
      messagePlaceholder: 'Tell us about your estimated volume, required grade, and destination...',
      submit: 'Send Enquiry',
      successTitle: 'Message received!',
      successText:
        'Thank you for your interest. Our export team will respond within 24–48 hours.'
    },
    productOptions: [
      { value: 'grano', label: 'Whole Cardamom' },
      { value: 'descascarado', label: 'Decorticated Cardamom' },
      { value: 'molido', label: 'Ground Cardamom' },
      { value: 'maquilado', label: 'Toll Milling Service' },
      { value: 'otro', label: 'Other / General Enquiry' }
    ]
  },
  footer: {
    tagline: 'Family exporters of premium cardamom from the heart of the Guatemalan highlands.',
    navTitle: 'Navigation',
    exportTitle: 'We export to',
    exportRegions: 'Europe · Middle East · Asia',
    origin: 'Proudly made in 🇬🇹 Guatemala',
    copyright: 'Cardamomo Guatemala. All rights reserved.',
    representative: 'Kevin Rivera · ID No. 30617635',
    motto: 'From sacred soil to the world.'
  }
};
