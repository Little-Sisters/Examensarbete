import styled from 'styled-components';
import heroVideo from '../videos/230512_04_Wedding Still Life_4k_003.mp4';
import { FilledButton } from './reusable components/Button';
import { useNavigate } from 'react-router-dom';

const HeroVideo: React.FC = () => {
  const navigate = useNavigate();

  const handleHeroClick = () => {
    navigate('cakes');
  };
  return (
    <VideoContainer>
      <Overlay></Overlay>
      <video src={heroVideo} autoPlay loop muted></video>
      <VideoTextContainer>
        <RelativeBox>
          <div>
            <h1>Beautiful Cakes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              minus molestias velit! amet consectetur adipisicing elit.
              Accusamus minus molestias velit!
            </p>
            <FilledButton
              title="Experience our cakes"
              onPress={handleHeroClick}
            ></FilledButton>
          </div>
        </RelativeBox>
      </VideoTextContainer>
    </VideoContainer>
  );
};

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.heroOpacity};
  transition: all 0.3s linear;
`;

const VideoContainer = styled.section`
  margin-bottom: 1rem;
  padding: 0;
  width: 100%;
  position: relative;
  height: 90vh;
  min-height: 35rem;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const VideoTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const RelativeBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto; /* Center the content */
  padding: 0 1.3rem; /* Side margins for small screens */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 730px) {
    width: 100%;
    padding: 1.5rem 1.5rem; /* Side margins for small screens */
    align-items: flex-end;
    justify-content: flex-end;
  }
  div {
    padding-left: 7%;
    max-width: 40rem;
    padding-top: 22%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    h1 {
      font-size: 5rem;
      font-family: 'Ephesis', cursive;
      margin: 0;
      @media (max-width: 730px) {
        font-size: 3.5rem;
      }
    }
    @media (max-width: 730px) {
      width: 100%;
      padding-left: 0%;
      max-width: 40rem;
      padding-bottom: 10%;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }
`;

export default HeroVideo;
