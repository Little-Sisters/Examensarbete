/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Option {
  value: any;
  label: any;
  price?: number;
}

export interface FlavourOption {
  value: string;
  label: string;
  price?: number;
}

export const flavourOptions: FlavourOption[] = [
  { value: 'vanilla', label: `Vanilla`, price: 10 },
  { value: 'chocolate', label: 'Chocolate', price: 20 },
  { value: 'strawberry', label: 'Strawberry', price: 30 },
  { value: 'salted-caramel', label: 'Salted Caramel', price: 40 },
];

export interface TierOption {
  value: number;
  label: number;
  price?: number;
}

export const tierOptions: TierOption[] = [
  { value: 1, label: 1, price: 10 },
  { value: 2, label: 2, price: 20 },
  { value: 3, label: 3, price: 30 },
  { value: 4, label: 4, price: 40 }
];

export interface ColourOption {
  value: string;
  label: string;
  price?: number;
}

export const colourOptions: ColourOption[] = [
  { value: 'black', label: 'Black', price: 10 },
  { value: 'white', label: 'White', price: 20 },
  { value: 'blush', label: 'Blush', price: 30 },
  { value: 'pistage', label: 'Pistage', price: 40 },
];

export interface FrostingOption {
  value: string;
  label: string;
  price?: number;
}

export const frostingOptions: FrostingOption[] = [
  { value: 'buttercream', label: 'Buttercream', price: 10 },
  { value: 'fondant', label: 'Fondant', price: 20 },
];

export interface DecorationsOption {
  value: string;
  label: string;
  price?: number;
}

export const decorationsOptions: DecorationsOption[] = [
  { value: 'roses', label: 'Roses', price: 10 },
  { value: 'ganache', label: 'Ganache', price: 20 },
  { value: 'none', label: 'No Decorations', price: 0 },
];

export interface TopperOption {
  value: string;
  label: string;
  price?: number;
}

export const topperOptions: TopperOption[] = [
  { value: 'ring', label: 'Ring', price: 10 },
  { value: 'bridegroom', label: 'Bride & Groom', price: 10 },
   { value: 'mrms', label: 'Mr & Mrs', price: 10 },
  { value: 'none', label: 'No Topper', price: 0 },
];
