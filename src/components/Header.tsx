import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageContentWrapper from './PageContentWrapper';
import useMobile from './hooks/UseMobile';

interface HeaderProps {
  themeToggler: () => void;
  theme: string;
}

function Header({ themeToggler, theme }: HeaderProps) {
  const isMobile = useMobile(680);
  console.log(theme);

  return (
    <MyHeader>
      <PageContentWrapper>
        {isMobile ? (
          <>
            {/* Content for mobile */}
            <MobileMenuWrapper>
              <p>menu</p>
              <Link to="../">
                <HeaderLogo
                  src={
                    theme === 'dark'
                      ? './public/assets/logo-dark.png'
                      : './public/assets/logo.png'
                  }
                />
              </Link>
              <Toggle onClick={themeToggler}>Switch</Toggle>
            </MobileMenuWrapper>
            <LinkBox>
              <Link to="../">Home</Link>
              <Link to="../flavors">Flavors</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
            </LinkBox>
          </>
        ) : (
          <>
            {/* Content for desktop */}
            <AbsoluteBox>
              <Toggle onClick={themeToggler}>Switch</Toggle>
            </AbsoluteBox>
            <DesktopMenuWrapper>
              <DesktopNav>
                <DesktopLinkWrapper>
                  <NavLink to="../">Home</NavLink>
                  <NavLink to="../flavors">Flavors</NavLink>
                  <NavLink to="/gallery">Gallery</NavLink>
                </DesktopLinkWrapper>
                <HeaderLogo
                  src={
                    theme === 'dark'
                      ? './public/assets/logo-dark.png'
                      : './public/assets/logo.png'
                  }
                />
                <RightDesktopLinkWrapper>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/products">Products</NavLink>
                  <NavLink to="/cart">Cart</NavLink>
                </RightDesktopLinkWrapper>
              </DesktopNav>
            </DesktopMenuWrapper>
          </>
        )}
      </PageContentWrapper>
    </MyHeader>
  );
}

const Toggle = styled.button``;

const AbsoluteBox = styled.div`
  position: absolute;
  z-index: 5000;
  padding: 0.5rem 1rem;
  right: 0;
  top: 0;
`;


const MyHeader = styled.header`
z-index: 100000;
  display: flex;
  align-items: center;
  height: 6rem;
  @media (max-width: 680px) {
    height: auto;
    padding: 1rem 0;
  }
`;

const HeaderLogo = styled.img`
  width: 5rem;
  @media (max-width: 680px) {
    width: 4rem;
  }
`;

const DesktopMenuWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 3px;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }

  &:hover {
    transition: all 0.3s ease-in; /* Apply the transition specifically to the transform property */
    background: rgba(0, 0, 0, 0.1);
  }
`;

const MobileMenuWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const DesktopLinkWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.text};
  display: flex;
  transition: all 0.3s linear;
  justify-content: flex-end;
  width: 20rem; /* Set a default width */
  @media (max-width: 800px) {
    /* When the screen is not wide enough, set width to 100% */
    width: 100%;
  }
`;
const RightDesktopLinkWrapper = styled(DesktopLinkWrapper)`
  justify-content: flex-start;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: small;
  gap: .5rem;
`;

export default Header;
