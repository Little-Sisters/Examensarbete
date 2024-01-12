import { useEffect } from 'react';
import styled from 'styled-components';
import { ColourOption, DecorationsOption, TierOption, TopperOption } from './select/data';

interface MovelView3dProps {
  selectedTier: TierOption | null;
  selectedColor: ColourOption | null;
  selectedDecorations: DecorationsOption | null;
  selectedTopper: TopperOption | null;
  
}

function getModelSrc(
  selectedTier: TierOption | null,
  selectedColor: ColourOption | null,
  selectedDecorations: DecorationsOption | null,
  selectedTopper: TopperOption | null,
): string {
  // Adjust this logic based on your actual file structure and naming conventions
  if (selectedTier && selectedColor && selectedDecorations && selectedTopper) {
    const tierNumber = selectedTier.value;
    const decoration = selectedDecorations.value.toLowerCase();
    const topper = selectedTopper.value.toLowerCase();
    const colorName = selectedColor.value.toLowerCase(); // Assuming color values are lowercase in the file names

    // Example: '3-tier-blue.glb'
    return `/models/${tierNumber}-tier-${colorName}-${decoration}-${topper}.glb`;
  } else {
    // Default model if either tier or color is not selected
    return '/models/3-tier-white.glb';
  }
}

function MovelView3d({ selectedTier, selectedColor, selectedDecorations, selectedTopper }: MovelView3dProps) {

  useEffect(() => {
    // The effect to run when selectedTier or selectedColor changes
    const modelSrc = getModelSrc(selectedTier, selectedColor,selectedDecorations,selectedTopper);

    // Update the model-viewer src
    const modelViewer = document.querySelector('.model-viewer');
    if (modelViewer) {
      modelViewer.setAttribute('src', modelSrc);
      modelViewer.setAttribute('preload', 'auto');
    }
  }, [selectedTier, selectedColor,selectedDecorations,selectedTopper]);

  return (
    <Cake>
      <model-viewer
        className="model-viewer"
        src={getModelSrc(selectedTier, selectedColor,selectedDecorations,selectedTopper)}
        shadow-intensity="1"
        shadow-softness="1"
        alt="cake"
        poster="poster.webp"
        auto-rotate
        camera-controls
        touch-action="pan-y"
        style={{ width: '100%', height: '100%' }}
      >
        <div id="progress-bar-d" slot="progress-bar"></div>
      </model-viewer>
    </Cake>
  );
}

const Cake = styled.div`
  background: ${({ theme }) => theme.card};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
    height: 35rem;
  }
  img {
    height: 80%;
    @media (max-width: 700px) {
      width: auto;
      height: 30rem;
    }
  }
`;

export default MovelView3d;