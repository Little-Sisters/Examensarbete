import {
  flavourOptions,
  tierOptions,
  colourOptions,
  frostingOptions,
  decorationsOptions,
  topperOptions,
} from '../components/select/data';
import { CartItem } from '../components/Cart';

// Calculates the price of a cart item
// Based on the base price of the product and the selected options
// Is used in cart and cart context
export const calculateItemPrice = (cartItem: CartItem) => {
  let extraPrice = 0;

  const flavourExtra =
    flavourOptions.find((option) => option.value === cartItem.flavour)?.price ||
    0;

  extraPrice += flavourExtra;

  const tierExtra =
    tierOptions.find((option) => option.value === cartItem.tiers)?.price || 0;

  extraPrice += tierExtra;

  const colorExtra =
    colourOptions.find((option) => option.value === cartItem.colour)?.price ||
    0;

  extraPrice += colorExtra;

  const frostingExtra =
    frostingOptions.find((option) => option.value === cartItem.frosting)
      ?.price || 0;

  extraPrice += frostingExtra;

  const decorationsExtra =
    decorationsOptions.find((option) => option.value === cartItem.decorations)
      ?.price || 0;
  extraPrice += decorationsExtra;

  const topperExtra =
    topperOptions.find((option) => option.value === cartItem.topper)?.price ||
    0;
  extraPrice += topperExtra;

  return cartItem.basePrice + extraPrice;
};
