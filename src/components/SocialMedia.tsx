import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import blueberrycakeImage from '/social-media/blueberrycake.jpg';
import engagedcakeImage from '/social-media/engagedcake.jpg';
import outdoorcakeImage from '/social-media/outdoorcake.jpg';
import partycakeImage from '/social-media/partycake.jpg';
import pipingcakeImage from '/social-media/pipingcake.jpg';
import dripcakeImage from '/social-media/dripcake.jpg';

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
                backgroundImage: `url(${dripcakeImage})`,
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
            <div>
              <h2>Follow Us on Social Media</h2>
              <p>
                On social media we share our latest creations, news and photos of our cakes out in the wild. Find us on the following platforms:
              </p>
              <Icons>
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
                <FaFacebook />
              </Icons>
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
  padding: 2rem;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    width: 100%;
    padding: 0rem;
  }
`;

const StyledText = styled.div`
  flex: 0.4;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-left: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    text-align: left;
    padding: 0;
  }

  p {
    text-align: left;
    padding-bottom: 1rem;
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 100%;
    min-height: 40vh;

    p,
    h2 {
      width: 100%;
      text-align: center;
    }

    div:first-child {
      align-items: center;
      padding-left: 0;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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
