import { useEffect } from 'react';
import { getCartModelSrc } from '../functions/getModelSrc';

interface CartMovelView3dProps {
  selectedTier: number | null;
  selectedColor: string | null;
  selectedDecorations: string | null;
  selectedTopper: string | null;
}

function CartModelViewer({
  selectedTier,
  selectedColor,
  selectedDecorations,
  selectedTopper,
}: CartMovelView3dProps) {
  useEffect(() => {
    // The effect to run when selectedTier or selectedColor changes
    const modelSrc = getCartModelSrc(
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
      src={getCartModelSrc(
        selectedTier,
        selectedColor,
        selectedDecorations,
        selectedTopper,
      )}
      shadow-intensity="1"
      shadow-softness="1"
      alt="cake"
      auto-rotate
      style={{ width: '100%', height: '100%' }}
    >
      <div id="progress-bar-d" slot="progress-bar"></div>
    </model-viewer>
  );
}

export default CartModelViewer;
