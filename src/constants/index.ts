export const ROUTE_NAMES = {
  HOME: '/',
  SOLUTIONS: '/Solutions',
  SERVICES: '/Services',
  SERVICE: '/Services/',
  CONTACTS: '/Contacts',
  BLOG: '/Blog',
  ABOUT_US: '/About%20Us',
  OUR_TEAM: '/Our%20Team',
  FAQS: '/FAQs',
  NEWS: '/Blog/:userId',
};

export const Link = [
  { name: 'Home', link: ROUTE_NAMES.HOME },
  { name: 'Solutions', link: ROUTE_NAMES.SOLUTIONS },
  { name: 'Blog', link: ROUTE_NAMES.BLOG },
  { name: 'Contacts', link: ROUTE_NAMES.CONTACTS },
  { name: 'Our team', link: ROUTE_NAMES.OUR_TEAM },
  { name: 'About us', link: ROUTE_NAMES.ABOUT_US },
  { name: 'Services', link: ROUTE_NAMES.SERVICES },
  { name: 'FAQ', link: ROUTE_NAMES.FAQS },
];

export const Service = [
  { name: 'Pages', link: ROUTE_NAMES.HOME },
  { name: 'FAQ', link: ROUTE_NAMES.FAQS },
  { name: 'Pricing', link: '/' },
  { name: 'Site map', link: '/' },
];
