import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  background: ${({ theme }) => theme.footer};
  p {
    font-size: 15px;
  }
`;

const Logo = styled.div`
  h4 {
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 2rem;

  svg {
    font-size: 30px;
    display: inline-block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
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
    width: 13rem;
  }

  button {
    width: 5rem;
    border: none;
  }
`;

function Footer() {
  return (
    <footer>
      <StyledFooter>
        <Logo>
          <h2>BEAUTIFUL CAKES</h2>
        </Logo>
        <FlexWrapper>
          <Column>
            <h4>MORE INFO</h4>
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
              <input type="btn" value="Subscribe" />
            </div>
          </Column>
        </FlexWrapper>
      </StyledFooter>
    </footer>
  );
}

export default Footer;
