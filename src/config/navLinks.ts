import { faHome, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

export const getNavLinks = () => {
  return [
    {
      link: '/',
      icon: faHome,
      label: 'Home',
    },
    {
      link: '/invoices',
      icon: faFileInvoiceDollar,
      label: 'Invoices',
    },
  ];
};

export const getPageTitleByPath = (path: string) => {
  return getNavLinks().find((navLink) => navLink.link === path)?.label || 'Home';
};
