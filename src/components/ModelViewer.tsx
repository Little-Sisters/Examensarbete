import styled from 'styled-components';


function MovelView3d() {
  return (
    <Cake>
      <model-viewer
        className="model-viewer"
        src={"/3-tier.glb"}
        alt="cake"
        camera-controls
        style={
          {width:"100%",
        height:"100%"}
        }
      ></model-viewer>
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
