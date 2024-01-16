// flavoursData.ts

type Flavour = {
  id: number;
  flavourTitle: string;
  subtitle: string;
  spanDescription: string;
  filledButtonTitle: string;
  transparentButtonTitle: string;
  model: string;
  backgroundColor: string;
};

const flavoursData: Flavour[] = [
  {
    id: 1,
    flavourTitle: "Chocolate",
    subtitle: "Flavourful and rich chocolate",
    spanDescription:
      "Our Chocolate cake flavour is rich and deep, using kakao from the best parts of the world. Our Chocolate cake flavour is rich and deep, using kakao from the best parts of the world.",
    filledButtonTitle: "Create your chocolate cake",
    transparentButtonTitle: "Check our Gallery",
    model: "/chocolate-bar.glb",
    backgroundColor: "#684f4b",
  },
  {
    id: 2,
    flavourTitle: "Strawberry",
    subtitle: "Sweet and juicy strawberries",
    spanDescription:
      "Indulge in the sweetness of our Strawberry cake, made with the finest and juiciest strawberries. Perfect for those who love a fruity delight.",
    filledButtonTitle: "Create your strawberry cake",
    transparentButtonTitle: "Explore strawberry delights",
    model: "/strawberry-cake.glb",
    backgroundColor: "#ff7eb6",
  },
  {
    id: 2,
    flavourTitle: "Vanilla",
    subtitle: "Sweet and juicy vanilla",
    spanDescription:
      "Indulge in the sweetness of our vanilla cake, made with the finest and juiciest strawberries. Perfect for those who love a fruity delight.",
    filledButtonTitle: "Create your vanilla cake",
    transparentButtonTitle: "Explore vanilla delights",
    model: "/vanilla-cake.glb",
    backgroundColor: "lightyellow",
  },
  // Add more flavors as needed
];

export default flavoursData;