export type Lang = 'es' | 'en';

export interface TranslationContent {
  meta: { title: string; description: string };
  nav: { label: string; href: string }[];
  header: { cta: string; langEs: string; langEn: string };
  hero: {
    badge: string;
    title: string;
    titleEm: string;
    titleEnd: string;
    description: string;
    ctaSample: string;
    ctaProducts: string;
    statsLabel: string;
    stats: { value: string; label: string }[];
    videoTitle: string;
    videoCaption: string;
    scrollLabel: string;
  };
  about: {
    label: string;
    title: string;
    subtitle: string;
    imageAlt: string;
    badge: string;
    lead: string;
    p1: string;
    p2: string;
    quote: string;
    quoteCite: string;
    values: { icon: string; title: string; description: string }[];
  };
  products: {
    label: string;
    title: string;
    subtitle: string;
    consultLink: string;
    varietiesTitle: string;
    varietiesIntro: string;
    cultivationTitle: string;
    items: {
      name: string;
      description: string;
      specs: string[];
      icon: string;
      image: string;
      imageAlt: string;
    }[];
    varieties: { name: string; origin: string; description: string; traits: string[] }[];
    cultivation: { title: string; detail: string }[];
  };
  qualities: {
    label: string;
    title: string;
    subtitle: string;
    tableCaption: string;
    cols: { grade: string; size: string; moisture: string; description: string; markets: string };
    criteria: { icon: string; title: string; description: string }[];
    grades: {
      grade: string;
      code: string;
      color: string;
      size: string;
      moisture: string;
      description: string;
      markets: string[];
    }[];
  };
  processes: {
    label: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaButton: string;
    steps: { step: string; title: string; description: string; icon: string }[];
    images: { src: string; alt: string; label: string }[];
  };
  logistics: {
    label: string;
    title: string;
    subtitle: string;
    ecomTitle: string;
    pipelineTitle: string;
    portOriginTitle: string;
    portOriginText: string;
    docsTitle: string;
    docsText: string;
    trackingTitle: string;
    trackingText: string;
    routeCols: { port: string; transit: string; incoterm: string };
    ecomTimes: { label: string; time: string }[];
    routes: {
      destination: string;
      flag: string;
      port: string;
      transitTime: string;
      incoterm: string;
      details: string;
    }[];
    pipeline: { step: string; title: string; description: string }[];
    images: { src: string; alt: string; caption: string }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    representativeRole: string;
    cedulaLabel: string;
    email: string;
    phone: string;
    whatsapp: string;
    office: string;
    hours: string;
    address: string;
    hoursValue: string;
    marketsLabel: string;
    marketTags: string[];
    form: {
      name: string;
      company: string;
      email: string;
      country: string;
      product: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      successTitle: string;
      successText: string;
    };
    productOptions: { value: string; label: string }[];
  };
  footer: {
    tagline: string;
    navTitle: string;
    exportTitle: string;
    exportRegions: string;
    origin: string;
    copyright: string;
    representative: string;
    motto: string;
  };
}
