import styled from 'styled-components';
import { TierOption } from './select/data';

interface MovelView3dProps {
  selectedTier: TierOption | null; // Assuming TierOption is the type for your tiers
}

function MovelView3d({ selectedTier }: MovelView3dProps) {

  console.log(selectedTier)

  const getModelSrc = () => {
    console.log(selectedTier)
    if (selectedTier) {
      // Assuming your model files follow a naming convention like '1-tier.glb', '2-tier.glb', etc.
      return `/models/${selectedTier.value}-tier.glb`;
    } else {
      // Default model if no tier is selected
      return '/models/3-tier.glb';
    }
  };

  return (
    <Cake>
      <model-viewer
        className="model-viewer"
        src={getModelSrc()}
        shadow-intensity="1"
        shadow-softness="1"
        alt="cake"
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
