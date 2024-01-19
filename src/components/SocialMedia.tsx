import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import blueberrycakeImage from '/social-media/blueberrycake.jpg';
import engagedcakeImage from '/social-media/engagedcake.jpg';
import outdoorcakeImage from '/social-media/outdoorcake.jpg';
import partycakeImage from '/social-media/partycake.jpg';
import pieceofcakeImage from '/social-media/pieceofcake.jpg';
import pipingcakeImage from '/social-media/pipingcake.jpg';

function SocialMedia() {
  return (
    <div>
      <FlexBox>
        <Layout>
          <Grid>
            <div
              style={{
                backgroundImage: `url(${blueberrycakeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${pipingcakeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${pieceofcakeImage})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${engagedcakeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></div>
            <InvisibleImage
              style={{
                backgroundImage: `url(${outdoorcakeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></InvisibleImage>
            <InvisibleImage
              style={{
                backgroundImage: `url(${partycakeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
              }}
            ></InvisibleImage>
          </Grid>
          <StyledText>
            <h2>Follow us on social media</h2>
            <p>
              Follow us on Facebook or Instagram to see our latest creations and
              news.
            </p>
            <div>
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
              <FaFacebook />
            </div>
          </StyledText>
        </Layout>
      </FlexBox>
    </div>
  );
}

// Styled Components
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const StyledText = styled.div`
  flex: 0.4;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    padding: 1rem;
    text-align: center;
  }

  p {
    text-align: left;
    padding-bottom: 1rem;
    width: 80%;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    min-height: 40vh;

    p {
      width: 100%;
    }
  }
`;

const InvisibleImage = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

const Grid = styled.div`
  flex: 0.6;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;

  @media (max-width: 700px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(50vw - 2rem);
  }

  @media (min-width: 701px) and (max-width: 1126px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33.33vw - ((12rem / 3) * 2));
  }
`;

export default SocialMedia;
