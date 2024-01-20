// flavoursData.ts

type Flavour = {
  id: number;
  flavourTitle: string;
  subtitle: string;
  spanDescription: string;
  filledButtonTitle: string;
  transparentButtonTitle: string;
  model: string;
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
      'Our Chocolate cake flavour is rich and deep, using kakao from the best parts of the world. Our Chocolate cake flavour is rich and deep, using kakao from the best parts of the world.',
    filledButtonTitle: 'Create your chocolate cake',
    transparentButtonTitle: 'Check our Gallery',
    model: '/flavour-model/chocolate-bar.glb',
    //angle: '90deg 90deg 12m',
    lightmodeBackgroundColor: '#815C54',
    darkmodeBackgroundColor: '#30211E',
  },
  {
    id: 343225,
    flavourTitle: 'Strawberry',
    subtitle: 'Sweet and juicy strawberries',
    spanDescription:
      'Indulge in the sweetness of our Strawberry cake, made with the finest and juiciest strawberries. Perfect for those who love a fruity delight.',
    filledButtonTitle: 'Create your strawberry cake',
    transparentButtonTitle: 'Explore strawberry delights',
    model: '/flavour-model//strawberry.glb',
    lightmodeBackgroundColor: '#BC373F',
    darkmodeBackgroundColor: '#932D33',
  },
  {
    id: 1234,
    flavourTitle: 'Vanilla',
    subtitle: 'Sweet and juicy vanilla',
    spanDescription:
      'Indulge in the sweetness of our vanilla cake, made with the finest and juiciest strawberries. Perfect for those who love a fruity delight.',
    filledButtonTitle: 'Create your vanilla cake',
    transparentButtonTitle: 'Explore vanilla delights',
    model: '/flavour-model/vanilla.glb',
    angle: '90deg 60deg 10m',
    lightmodeBackgroundColor: '#D9D0B0',
    darkmodeBackgroundColor: '#88816A',
  },
  {
    id: 12333334,
    flavourTitle: 'Lemon',
    subtitle: 'Sour and fresh lemon and citrus',
    spanDescription:
      'Indulge in the sweetness of our vanilla cake, made with the finest and juiciest strawberries. Perfect for those who love a fruity delight.',
    filledButtonTitle: 'Create your citrus cake',
    transparentButtonTitle: 'Explore Lemon delights',
    model: '/flavour-model/lemon.glb',
    angle: '90deg 60deg 10m',
    lightmodeBackgroundColor: '#E7E277',
    darkmodeBackgroundColor: '#A39942',
  },
  // Add more flavors as needed
];

export default flavoursData;
