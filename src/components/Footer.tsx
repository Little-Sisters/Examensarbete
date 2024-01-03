import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Logo = styled.div`
  h4 {
  }
`;
const IconWrapper = styled.div`
  display: flex;
  gap: 15px;

  svg {
    font-size: 24px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  div {
    display: flex;
  }

  input {
    background-color: transparent;
    padding: 0.5rem 1rem;
    border: 1px solid black;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo>
        <h4>BEAUTIFUL CAKES LOGO</h4>
      </Logo>
      <FlexWrapper>
        <Column>
          <p>News & events</p>
          <p>Privacy policy</p>
          <p>Customer care</p>
          <IconWrapper>
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaFacebook />
          </IconWrapper>
        </Column>
        <Column>
          <h4>GET IN TOUCH</h4>
          <p>+46 123 12 12</p>
          <p>beautifulcakes@cakeab.com</p>
          <p>adress 23 st</p>
        </Column>
        <Column>
          <h4>NEWSLETTER</h4>
          <div>
            <input type="text" placeholder="Enter your email" />
            <input type="button" value="Subscribe" />
          </div>
        </Column>
      </FlexWrapper>
    </StyledFooter>
  );
}

export default Footer;
