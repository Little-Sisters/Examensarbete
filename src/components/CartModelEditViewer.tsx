import { useEffect } from 'react';
import {
  ColourOption,
  DecorationsOption,
  TierOption,
  TopperOption,
} from './select/data';
import { getModelSrc } from '../functions/getModelSrc';

interface MovelView3dProps {
  selectedTier: TierOption | null;
  selectedColor: ColourOption | null;
  selectedDecorations: DecorationsOption | null;
  selectedTopper: TopperOption | null;
}

function CartModelEditViewer({
  selectedTier,
  selectedColor,
  selectedDecorations,
  selectedTopper,
}: MovelView3dProps) {
  useEffect(() => {
    // The effect to run when selectedTier or selectedColor changes
    const modelSrc = getModelSrc(
      selectedTier,
      selectedColor,
      selectedDecorations,
      selectedTopper,
    );

    // Update the model-viewer src
    const modelViewer = document.querySelector('.model-viewer');
    if (modelViewer) {
      modelViewer.setAttribute('src', modelSrc);
      modelViewer.setAttribute('preload', 'auto');
    }
  }, [selectedTier, selectedColor, selectedDecorations, selectedTopper]);

  return (
    <model-viewer
      className="model-viewer"
      src={getModelSrc(
        selectedTier,
        selectedColor,
        selectedDecorations,
        selectedTopper,
      )}
      shadow-intensity="1"
      shadow-softness="1"
      alt="cake"
      touch-action="pan-y"
      style={{ width: '100%', height: '100%' }}
    >
      <div id="progress-bar-d" slot="progress-bar"></div>
    </model-viewer>
  );
}
export default CartModelEditViewer;
