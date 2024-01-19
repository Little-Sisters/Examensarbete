import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import { TransparentButton } from './reusable components/Button';
import PageContentWrapper from './reusable components/PageContentWrapper';

function Footer() {
  return (
    <footer>
      <StyledFooter>
        <PageContentWrapper>
          {/* LOGO */}
          <Logo src="/logo.png" alt="logo" />
          {/* NEWSLETTER */}
          <h2>NEWSLETTER</h2>
          <Newsletter>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            </span>
            <input type="text" placeholder="Enter your email" />
            <TransparentButton fullWidth title="Subscribe" />
          </Newsletter>
          <LinksWrapper>
            {/* INFO */}
            <Col>
              <h3>MORE INFO</h3>
              <p>
                <a href="#">News & events</a>
              </p>
              <p>
                <a href="#">Privacy policy</a>
              </p>
              <p>
                <a href="#">Customer care</a>
              </p>
            </Col>
            {/* GET IN TOUCH */}
            <Col>
              <h3>GET IN TOUCH</h3>
              <p>+46 123 12 12</p>
              <p>beautifulcakes@cakeab.com</p>
              <p>adress 23 st</p>
            </Col>
            {/* ICONS */}
            <Col>
              <h3>SOCIALS</h3>
              <IconWrapper>
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
                <FaFacebook />
              </IconWrapper>
            </Col>
          </LinksWrapper>
        </PageContentWrapper>
      </StyledFooter>
      <Copyright>
        <span>2024 || copyright</span>
      </Copyright>
    </footer>
  );
}

const StyledFooter = styled.footer`
  padding: 3rem 0 1rem 0;
  display: flex;
  background: ${({ theme }) => theme.gold};

  p {
    font-size: 15px;
  }

  h2 {
    text-align: center;
    font-size: 28px;
    align-items: center;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.grey};
`;

const Col = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  display: flex;
  margin: auto;
  width: 10rem;
  margin-bottom: 2rem;
`;

const Newsletter = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;

  span {
    margin-bottom: 0.5rem;
  }

  button {
    width: 60%;
    background: transparent;
    border: 1px solid;
    border-radius: 3px;
    border-color: ${({ theme }) => theme.grey};
    padding: 0.8rem;
  }

  input {
    background: ${({ theme }) => theme.paper};
    padding: 0.8rem;
    border: 1px solid;
    border-color: ${({ theme }) => theme.grey};
    width: 60%;
    border-radius: 3px 0px 0px 3px;
    margin-bottom: 0.5rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  svg {
    margin-right: 0.8rem;
    font-size: 30px;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 700px) {
      font-size: 20px;
    }

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

const Copyright = styled.div`
  padding: 1rem 0rem;
  background: ${({ theme }) => theme.darkGold};
  text-align: center;

  color: ${({ theme }) => theme.paper};
`;

export default Footer;
