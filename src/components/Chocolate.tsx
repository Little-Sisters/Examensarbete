type ChocolateProps = {
  model: string;
};

const Chocolate: React.FC<ChocolateProps> = ({ model }) => {
  return (
    <model-viewer
      src={model}
      shadow-intensity="1.5"
      camera-orbit="100deg 90deg 10m"
      shadow-softness="1.1"
      alt="flavour-model"
      auto-rotate
      style={{ width: '100%', height: '100%' }}
    >
      <div id="progress-bar-d" slot="progress-bar"></div>
    </model-viewer>
  );
};

export default Chocolate;
