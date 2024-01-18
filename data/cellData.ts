// Import images at the beginning of the file
import rosecakeImage from '/rosescake.jpg';
import ganachepinkImage from '/ganachepink.jpg';
import mrmrsImage from '/mrmrs.jpg';
import pinkcakeImage from '/pinkcake.jpg';
import whitecakeImage from '/whitecake.jpg';
import velvetcakeImage from '/velvetcake.jpg';
import midnightcakeImage from '/midnightcake.jpg';
import buttercreamcakeImage from '/buttercreamcake.jpg';
import gothcakeImage from '/gothcake.jpg';
import flowercakeImage from '/flowercake.jpg';
import herocakeImage from '/herocake.jpg';
import adventurecakeImage from '/adventurecake.jpg';

// Define the types for the cell data
export type CellData = {
  id: number;
  title: string;
  imageUrl: string;
  tier: string;
  color: string;
  decorations: string;
  topper: string;
  flavor: string;
  frosting: string;
  span: string;
  rowSpan: string;
};

// Data for the cells
export const data: CellData[] = [
  {
    id: 1,
    title: 'Bespoke Cake',
    imageUrl: rosecakeImage,
    tier: '1 tier',
    color: 'Snow',
    topper: 'Roses',
    flavor: 'Vanilla',
    decorations: 'Bow',
    frosting: 'Fondant',
    span: 'span-2',
    rowSpan: 'row-span-1',
  },
  {
    id: 2,
    title: 'Customized Cake',
    imageUrl: ganachepinkImage,
    tier: '1 tier',
    color: 'Pink',
    topper: 'No topper',
    flavor: 'Strawberry',
    decorations: 'Ganache',
    frosting: 'Buttercream',
    span: 'span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: 3,
    title: 'Customized Cake',
    imageUrl: mrmrsImage,
    tier: '2 tiers',
    color: 'White',
    topper: 'Mr & Mrs',
    flavor: 'Strawberry',
    decorations: 'Flowers',
    frosting: 'Buttercream',
    span: 'span-1',
    rowSpan: 'row-span-2',
  },
  {
    id: 4,
    title: 'Customized Cake',
    imageUrl: pinkcakeImage,
    tier: '4 tiers',
    color: 'Pink',
    topper: 'No topper',
    flavor: 'Strawberry',
    decorations: 'Flowers',
    frosting: 'Buttercream',
    span: 'span-1',
    rowSpan: 'row-span-2',
  },
  {
    id: 5,
    title: 'Customized Cake',
    imageUrl: whitecakeImage,
    tier: '4 tiers',
    color: 'White',
    topper: 'No topper',
    flavor: 'Chocolate',
    decorations: 'Flowers',
    frosting: 'Buttercream',
    span: 'span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: 6,
    title: 'Bespoke Cake',
    imageUrl: velvetcakeImage,
    tier: '1 tier',
    color: 'Snow',
    topper: 'Crumbs and Cream',
    flavor: 'Chocolate',
    decorations: 'Crumb Coating',
    frosting: 'Cream Cheese',
    span: 'span-3',
    rowSpan: 'row-span-2',
  },
  {
    id: 7,
    title: 'Customized Cake',
    imageUrl: midnightcakeImage,
    tier: '2 tiers',
    color: 'Midnight Black',
    topper: 'No topper',
    flavor: 'Chocolate',
    decorations: 'Flowers',
    frosting: 'Fondant',
    span: 'span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: 8,
    title: 'Bespoke Cake',
    imageUrl: buttercreamcakeImage,
    tier: '2 tiers',
    color: 'Snow',
    topper: 'No topper',
    flavor: 'Chocolate',
    decorations: 'Berries',
    frosting: 'Rippled Buttercream',
    span: 'span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: 9,
    title: 'Bespoke Cake',
    imageUrl: gothcakeImage,
    tier: '1 tier',
    color: 'Ombré Red',
    topper: 'Berries',
    flavor: 'Chocolate',
    decorations: 'Ganache',
    frosting: 'Fondant',
    span: 'span-2',
    rowSpan: 'row-span-1',
  },
  {
    id: 10,
    title: 'Customized Cake',
    imageUrl: flowercakeImage,
    tier: '3',
    color: 'Snow',
    topper: 'No topper',
    flavor: 'Salted Caramel',
    decorations: 'Flowers',
    frosting: 'Fondant',
    span: 'span-2',
    rowSpan: 'row-span-2',
  },
  {
    id: 11,
    title: 'Bespoke Cake',
    imageUrl: herocakeImage,
    tier: '4 tiers',
    color: 'Snow',
    topper: 'Flowers',
    flavor: 'Vanilla',
    decorations: 'Fruit',
    frosting: 'Rippled Buttercream',
    span: 'span-2',
    rowSpan: 'row-span-2',
  },
  {
    id: 12,
    title: 'Bespoke Cake',
    imageUrl: adventurecakeImage,
    tier: '3 tiers',
    color: 'Snow',
    topper: 'The Adventure Begins',
    flavor: 'Chocolate',
    decorations: 'Flowers and beads',
    frosting: 'Buttercream',
    span: 'span-2',
    rowSpan: 'row-span-2',
  },
];