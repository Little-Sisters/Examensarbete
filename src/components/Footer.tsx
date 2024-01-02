import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div`
  h4 {
    margin-bottom: 10px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
  margin: 10px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo>
        <h4>BEAUTIFUL CAKES LOGO</h4>
      </Logo>
      <FlexWrapper>
        <Column>
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaFacebook />
        </Column>
        <Column>
          <p>News & events</p>
          <p>Privacy policy</p>
          <p>Customer care</p>
        </Column>
        <Column>
          <h4>NEWSLETTER</h4>
          <input type="text" placeholder="Enter your email" />
          <input type="button" value="Subscribe" />
        </Column>
        <Column>
          <h4>GET IN TOUCH</h4>
          <p>Number</p>
          <p>Email</p>
          <p>Address</p>
        </Column>
      </FlexWrapper>
    </StyledFooter>
  );
}

export default Footer;
