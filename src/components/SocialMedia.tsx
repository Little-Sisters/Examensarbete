import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div>
      <FlexBox>
        <Layout>
          <Grid>
            <div
              style={{
                backgroundImage: 'url(/herocake.jpg)',
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              style={{
                backgroundImage: 'url(/herocake.jpg)',
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              style={{
                backgroundImage: 'url(/herocake.jpg)',
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              style={{
                backgroundImage: 'url(/herocake.jpg)',
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              style={{
                backgroundImage: 'url(/herocake.jpg)',
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              style={{
                backgroundImage: 'url(/herocake.jpg)',
                backgroundSize: 'cover',
              }}
            ></div>
          </Grid>
          <StyledText>
            <h3>Follow us on social media</h3>
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
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.5rem;
    margin: 0;
    padding: 1rem;
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

    p {
        width: 100%;
    }
  }
`;

const Grid = styled.div`
  flex: 1;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default SocialMedia;
