import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 3rem 6.5rem;
  background: ${({ theme }) => theme.footer};
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

  p {
    font-size: 15px;
    color: ${({ theme }) => theme.footerDetail};
  }

  a {
    color: ${({ theme }) => theme.footerDetail};
  }

  input {
    background-color: transparent;
    padding: 0.5rem 1rem;
    border: 1px solid;
    border-color: ${({ theme }) => theme.footerDetail};
    width: 13rem;
  }

  button {
    border: none;
    padding: 0.5rem 1rem;
    border: 1px solid;
    background-color: transparent;
    border-color: ${({ theme }) => theme.footerDetail};
    margin-left: -1px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
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

function Footer() {
  return (
    <footer>
      <StyledFooter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <h2>BEAUTIFUL CAKES</h2>
        </motion.div>
        <FlexWrapper>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: [0.17, 0.67, 0.83, 0.67],
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <Column>
              <h4>MORE INFO</h4>
              <p>
                <a href="#">News & events</a>
              </p>
              <p>
                <a href="#">Privacy policy</a>
              </p>
              <p>
                <a href="#">Customer care</a>
              </p>

              <IconWrapper>
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
                <FaFacebook />
              </IconWrapper>
            </Column>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: [0.17, 0.67, 0.83, 0.67],
              duration: 0.5,
              delay: 1,
            }}
          >
            <Column>
              <h4>GET IN TOUCH</h4>
              <p>+46 123 12 12</p>
              <p>beautifulcakes@cakeab.com</p>
              <p>adress 23 st</p>
            </Column>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: [0.17, 0.67, 0.83, 0.67],
              duration: 0.5,
              delay: 1.5,
            }}
          >
            <Column>
              <h4>NEWSLETTER</h4>
              <div>
                <input type="text" placeholder="Enter your email" />
                {/* <input type="btn" value="Subscribe" /> */}
                <button>Subscribe</button>
              </div>
            </Column>
          </motion.div>
        </FlexWrapper>
      </StyledFooter>
    </footer>
  );
}

export default Footer;
