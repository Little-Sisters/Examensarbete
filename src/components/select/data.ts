/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Option {
  value: any;
  label: any;
}



export interface FlavourOption {
  value: string;
  label: string;
}

export const flavourOptions: FlavourOption[] = [
  { value: 'vanilla', label: 'Vanilla'},
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry',  },
  { value: 'salted-caramel', label: 'Salted Caramel'},
];

export interface TierOption {
  value: number;
  label: number;
}

export const tierOptions: TierOption[] = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 }
];

export interface ColourOption {
  value: string;
  label: string;
}

export const colourOptions: ColourOption[] = [
  { value: 'vanilla-bean', label: 'Vanilla Bean'},
  { value: 'white', label: 'White' },
  { value: 'black', label: 'Black',  },
  { value: 'pink', label: 'Pink'},
];

export interface FrostingOption {
  value: string;
  label: string;
}

export const frostingOptions: FrostingOption[] = [
  { value: 'buttercream', label: 'Buttercream'},
  { value: 'fondant', label: 'Fondant' },
];

export interface DecorationsOption {
  value: string;
  label: string;
}

export const decorationsOptions: DecorationsOption[] = [
  { value: 'flowers', label: 'Flowers'},
  { value: 'sprinkles', label: 'Sprinkles' },
];

export interface TopperOption {
  value: string;
  label: string;
}

export const topperOptions: TopperOption[] = [
  { value: 'ring', label: 'Ring'},
  { value: 'rose', label: 'Rose' },
  { value: 'character', label: 'Character' },
  { value: 'bride-groom', label: 'Bride and Groom' },
];

