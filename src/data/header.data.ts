export const HEADER_DATA = {
  logo: {
    src: '/images/header/logo.png', // "Jadoo" with the two orange dots in the 'oo'
    alt: 'Jadoo Travel Logo',
    link: '/',
  },
  navLinks: [
    { id: 1, label: 'Desitnations', link: '/destinations' },
    { id: 2, label: 'Hotels', link: '/hotels' },
    { id: 3, label: 'Flights', link: '/flights' },
    { id: 4, label: 'Bookings', link: '/bookings' },
  ],
  actions: {
    login: {
      label: 'Login',
      link: '/login',
    },
    signup: {
      label: 'Sign up',
      link: '/signup',
    },
    language: {
      current: 'EN',
      icon: '/images/header/chevron_icon.png',
      options: [
        { label: 'English', code: 'EN' },
        { label: 'Spanish', code: 'ES' },
        { label: 'French', code: 'FR' },
      ],
    },
  },
};
