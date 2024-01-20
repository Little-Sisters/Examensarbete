// data/headerLinks.ts

interface HeaderLink {
  title: string;
  to: string;
}

const headerLinks: HeaderLink[] = [
  {
    title: 'Home',
    to: '../',
  },
  {
    title: 'Flavors',
    to: '../flavors',
  },
  {
    title: 'Gallery',
    to: '/gallery',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Cakes',
    to: '/cakes',
  },
  {
    title: 'Cart',
    to: '/cart',
  },
];

export default headerLinks;
