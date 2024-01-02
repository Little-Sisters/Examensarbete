import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const Column = styled.div``;

function Footer() {
  return (
    <>
      <footer>
        <StyledFooter>
          <Logo>
            <h1>BEAUTIFUL CAKES LOGO</h1>
          </Logo>
          <FlexWrapper>
            <Column>
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
              <FaFacebook />
            </Column>
            <Column>
              <h1>CONTACT US</h1>
            </Column>
            <Column>
              <h1>NEWSLETTER</h1>
              <input type="text" />
              <input type="button" value="" />
            </Column>
            <Column>
              <h1>GET IN TOUCH</h1>
              <p>Number</p>
              <p>Email</p>
            </Column>
          </FlexWrapper>
        </StyledFooter>
      </footer>
    </>
  );
}

export default Footer;
