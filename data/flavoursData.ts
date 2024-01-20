// flavoursData.ts

type Flavour = {
  id: number;
  flavourTitle: string;
  subtitle: string;
  spanDescription: string;
  filledButtonTitle: string;
  transparentButtonTitle: string;
  model: string;
  mobileModel?: string;
  angle?: string;
  lightmodeBackgroundColor: string;
  darkmodeBackgroundColor: string;
};

const flavoursData: Flavour[] = [
  {
    id: 435345,
    flavourTitle: 'Chocolate',
    subtitle: 'Flavourful and rich chocolate',
    spanDescription:
      'Our chocolate cake flavour is rich and deep, using organic cacao from selected, ethically sourced farms. Indulge your senses in the opulence of our exquisite chocolate cake flavor—a culinary masterpiece crafted to elevate your taste experience.',
    filledButtonTitle: 'Create Your Chocolate Cake',
    transparentButtonTitle: 'Visit Gallery',
    model: '/flavour-models/chocolate-bar.glb',
    //angle: '90deg 90deg 12m',
    lightmodeBackgroundColor: '#815C54',
    darkmodeBackgroundColor: '#30211E',
  },
  {
    id: 343225,
    flavourTitle: 'Strawberry',
    subtitle: 'Sweet and juicy strawberries',
    spanDescription:
      'Our Strawberry cake is famous for its sweet and fresh texture, and is made with the finest and juiciest strawberries. Perfect for those who love a fluffy, pink fruity delight.',
    filledButtonTitle: 'Create Your Strawberry Cake',
    transparentButtonTitle: 'Visit Gallery',
    model: '/flavour-models/strawberry.glb',
    mobileModel: '/flavour-models/strawberry-mobile.glb',
    lightmodeBackgroundColor: '#BC373F',
    darkmodeBackgroundColor: '#932D33',
  },
  {
    id: 1234,
    flavourTitle: 'Vanilla',
    subtitle: 'Buttery and floral vanilla',
    spanDescription:
      'Enjoy the comforting, familiar taste of our natural vanilla. Our vanilla cake is made with the finest vanilla beans, and is the perfect choice for a light, moist and tender cake.',
    filledButtonTitle: 'Create Your Vanilla Cake',
    transparentButtonTitle: 'Visit Gallery',
    model: '/flavour-models/vanilla.glb',
    angle: '90deg 60deg 10m',
    lightmodeBackgroundColor: '#D9D0B0',
    darkmodeBackgroundColor: '#88816A',
  },
  {
    id: 12333334,
    flavourTitle: 'Lemon',
    subtitle: 'Fresh and tangy lemon',
    spanDescription:
      'Experience the bright and zesty delight of our lemon sponge cake flavor. Immerse yourself in the refreshing citrus notes that dance upon a light, airy sponge, creating a perfect harmony of tangy and sweet.',
    filledButtonTitle: 'Create Your Lemon Cake',
    transparentButtonTitle: 'Visit Gallery',
    model: '/flavour-models/lemon.glb',
    mobileModel: '/flavour-models/lemon-mobile.glb',
    angle: '90deg 60deg 10m',
    lightmodeBackgroundColor: '#E7E277',
    darkmodeBackgroundColor: '#A39942',
  },
  // Add more flavors as needed
];

export default flavoursData;
