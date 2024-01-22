import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import BigLogo from './reusable components/BigLogo';
import { TransparentButton } from './reusable components/Button';
import PageContentWrapper from './reusable components/PageContentWrapper';

function Footer() {
  const [email, setEmail] = useState<string>('');

  const onSubmit = () => {
    if (!email) {
      toast.error('Please enter your email!');
      return;
    }
    setEmail('');
    toast.success('Your email has been added to our newsletter!');
  };

  return (
    <footer>
      <StyledFooter>
        <PageContentWrapper>
          {/* LOGO */}
          <BigLogo width="22rem" mobileWidth="22rem" />
          {/* NEWSLETTER */}
          <h2>NEWSLETTER</h2>
          <Newsletter>
            <span>
              Sign up for your newsletter to get the latest news and updates
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Enter your email"
            />
            <TransparentButton fullWidth title="Subscribe" onPress={onSubmit} />
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

// style that wraps entire footer
const StyledFooter = styled.footer`
  padding: 3rem 0 1rem 0;
  display: flex;
  background: ${({ theme }) => theme.footerBackground};

  p {
    font-size: 15px;
  }

  h2 {
    text-align: center;
    font-size: 28px;
    align-items: center;
  }
`;

// each column in the footer
const Col = styled.div`
  flex: 1;
  text-align: center;
`;

// wraps links for more info
const LinksWrapper = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.grey};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

// logo
const Logo = styled.img`
  display: flex;
  margin: auto;
  width: 10rem;
  margin-bottom: 2rem;
`;

// wraps the newsletter section
const Newsletter = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
  }

  span {
    margin-bottom: 0.5rem;

    @media (max-width: 400px) {
      text-align: center;
    }
  }

  button {
    width: 60%;
    background: transparent;
    border: 1px solid;
    border-radius: 3px;
    border-color: ${({ theme }) => theme.grey};
    padding: 0.8rem;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  input {
    background: ${({ theme }) => theme.background};
    padding: 0.8rem;
    border: 1px solid;
    border-color: ${({ theme }) => theme.grey};
    width: 60%;
    border-radius: 3px 0px 0px 3px;
    margin-bottom: 0.5rem;

    @media (max-width: 800px) {
      width: 100%;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
`;

// wraps all the socials icons links
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  svg {
    font-size: 27px;
    transition: transform 0.3s ease-in-out;
    margin: 0 0.4rem 0 0.4rem;

    @media (max-width: 800px) {
      font-size: 20px;
    }

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

// copyright section at the bottom of the page
const Copyright = styled.div`
  padding: 1rem 0rem;
  background: ${({ theme }) => theme.footerSecondaryBackground};
  text-align: center;
  color: ${({ theme }) => theme.footerBackground};
`;

export default Footer;
