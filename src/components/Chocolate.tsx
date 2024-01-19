type Flavour3dModelProps = {
  model: string;
  angle: string;
};

const Flavour3dModel: React.FC<Flavour3dModelProps> = ({ model, angle }) => {
  return (
    <model-viewer
      src={model}
      shadow-intensity="1.5"
      camera-orbit={angle}
      shadow-softness="1.1"
      alt="flavour-model"
      auto-rotate
      style={{ width: '100%', height: '100%' }}
    >
      <div id="progress-bar-d" slot="progress-bar"></div>
    </model-viewer>
  );
};

export default Flavour3dModel;
