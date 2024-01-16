function Chocolate() {
  return (
    <model-viewer
      src="/chocolate-bar.glb"
      shadow-intensity="1"
      camera-orbit="100deg 90deg 10m"
      shadow-softness="1"
      alt="cake"
      auto-rotate
      style={{ width: '100%', height: '100%' }}
    >
      <div id="progress-bar-d" slot="progress-bar"></div>
    </model-viewer>
  );
}

export default Chocolate;
