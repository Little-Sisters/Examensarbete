import {
  ColourOption,
  DecorationsOption,
  TierOption,
  TopperOption,
} from './select/data';

export function getModelSrc(
  selectedTier: TierOption | null,
  selectedColor: ColourOption | null,
  selectedDecorations: DecorationsOption | null,
  selectedTopper: TopperOption | null,
): string {
  const tierNumber = selectedTier?.value || 1;
  const colorName = (selectedColor?.value || 'white').toLowerCase();
  const decoration = (selectedDecorations?.value || 'none').toLowerCase();
  const topper = (selectedTopper?.value || 'none').toLowerCase();

  // Template string with placeholders
  const modelTemplate = '/models/{tier}-tier-{color}-{decoration}-{topper}.glb';

  // Fill in placeholders based on conditions
  const modelSrc = modelTemplate
    .replace('{tier}', selectedTier ? `${tierNumber}` : '1')
    .replace('{color}', selectedColor ? colorName : 'white')
    .replace('{decoration}', selectedDecorations ? decoration : 'none')
    .replace('{topper}', selectedTopper ? topper : 'none');

  // Return the final model source
  return modelSrc;
}
