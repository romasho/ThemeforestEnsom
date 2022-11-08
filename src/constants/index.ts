export const ROUTE_NAMES = {
  HOME: '/',
  SOLUTIONS: '/Solutions',
  SERVICES: '/Services',
  CONTACTS: '/Contacts',
  BLOG: '/Blog',
  ABOUT_US: '/About%20Us',
  OUR_TEAM: '/Our%20Team',
  FAQS: '/FAQs',
  NEWS: '/Blog/:userId',
  SOLUTION: 'solutions/:userId',
  SERVICE: 'services/:userId',
  TEAM_MEMBER: 'Our%20Team/:userId',
  NOT_FOUND: '*',
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

export const Contacts = [
  { name: 'ensome@info.co.us', link: 'mailto:ensome@info.co.us' },
  { name: '+1 601-201-5580', link: 'tel:+1 601-201-5580' },
  { name: '1642 Washington Avenue, Jackson, \r MS, Mississippi, 39201', link: '' },
];
