// --- Shared Types ---
export interface NavLink {
  id: number;
  label: string;
  link: string;
}

export interface LanguageOption {
  label: string;
  code: string;
}

// --- Header Specific Interfaces ---

export interface HeaderLogo {
  src: string;
  alt: string;
  link: string;
}

export interface HeaderActions {
  login: {
    label: string;
    link: string;
  };
  signup: {
    label: string;
    link: string;
  };
  language: {
    current: string;
    icon: string;
    options: LanguageOption[];
  };
}

export interface HeaderData {
  logo: HeaderLogo;
  navLinks: NavLink[];
  actions: HeaderActions;
}

// --- Component Prop Type ---
export interface HeaderProps {
  data: HeaderData;
}

// --- Footer Specific Interfaces ---

export interface FooterLink {
  label: string;
  link: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialMedia {
  platform: string;
  icon: string;
  isGradient?: boolean;
}

export interface AppPrompts {
  text: string;
  googlePlay: string;
  appleStore: string;
}

export interface FooterData {
  brand: {
    name: string;
    tagline: string;
  };
  columns: FooterColumn[];
  socials: SocialMedia[];
  appPrompts: AppPrompts;
  copyright: string;
}

// --- Component Prop Type ---

export interface FooterProps {
  data: FooterData;
}

// --- Base Shared Types ---
export interface Button {
  label: string;
  link: string;
}

export interface ImageAsset {
  src: string;
  alt?: string;
}

// --- Widget Specific Data Interfaces ---

export interface HeroBannerData {
  tag: string;
  title: string;
  description: string;
  primaryButton: Button;
  secondaryButton: Button;
  images: {
    main: string;
    underline: string;
    backgroundShape: string;
    aeroplane?: string;
  };
}

export interface ServicesGridData {
  category_tag: string;
  title: string;
  decorations: {
    topRightGrid: string;
    redAccentShape: string;
  };
  services: {
    id: number;
    title: string;
    description: string;
    icon: string;
    isFeatured: boolean;
  }[];
}

export interface DestinationsGridData {
  tag: string;
  title: string;
  decoration: string;
  destinations: {
    id: number;
    location: string;
    price: string;
    duration: string;
    image: string;
    icon: string;
  }[];
}

export interface BookingStepsData {
  tag: string;
  title: string;
  steps: {
    id: number;
    title: string;
    description: string;
    icon: string;
    iconBgColor: string;
  }[];
  bookingCard: {
    mainImage: string;
    title: string;
    dateRange: string;
    author: string;
    footprintIcon: string;
    mapIcon: string;
    sendIcon: string;
    stats: string;
    favoriteIcon: string;
    ongoingOverlay: {
      destinationImage: string;
      status: string;
      title: string;
      completionPercentage: number;
      barColor: string;
    };
  };
}

export interface TestimonialsSliderData {
  tag: string;
  rotatingTitles: string[];
  pagination: {
    total: number;
    activeIndex: number;
  };
  navigationIcons: {
    prev: string;
    next: string;
  };
  testimonials: {
    id: number;
    userImage: string;
    quote: string;
    userName: string;
    location: string;
    isTopCard: boolean;
    role?: string; // Optional since not all have roles
  }[];
}

export interface PartnerLogosData {
  logos: {
    id: number;
    name: string;
    src: string;
    isFeatured?: boolean;
  }[];
}

export interface NewsletterSubscribeData {
  title: string;
  inputPlaceholder: string;
  buttonLabel: string;
  decorations: {
    backgroundSpiralLeft: string;
    backgroundSpiralRight: string;
    plusGridBottomRight: string;
    sendIconTopRight: string;
  };
}

// --- Updated Widget Union ---

export type Widget =
  | { widget_type: 'HeroBanner'; data: HeroBannerData }
  | { widget_type: 'ServicesGrid'; data: ServicesGridData }
  | { widget_type: 'DestinationsGrid'; data: DestinationsGridData }
  | { widget_type: 'BookingSteps'; data: BookingStepsData }
  | { widget_type: 'TestimonialsSlider'; data: TestimonialsSliderData }
  | { widget_type: 'PartnerLogos'; data: PartnerLogosData }
  | { widget_type: 'NewsletterSubscribe'; data: NewsletterSubscribeData };

export interface HomePageData {
  page_type: string;
  widgets: Widget[];
}
