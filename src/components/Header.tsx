import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PageContentWrapper from './PageContentWrapper';
import useMobile from '../hooks/UseMobile';
import Toggle from './Toggle';

interface HeaderProps {
  themeToggler: () => void;
  theme: string;
  isOn: boolean;
}

function Header({ themeToggler, theme, isOn }: HeaderProps) {
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
                      ? './assets/logo-dark.png'
                      : './assets/logo.png'
                  }
                />
              </Link>
              <Toggle isOn={isOn} toggleTheme={themeToggler} />
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
              <Toggle isOn={isOn} toggleTheme={themeToggler} />
            </AbsoluteBox>
            <DesktopMenuWrapper>
              <DesktopNav id="desktop-nav">
                <DesktopLinkWrapper>
                  <DesktopNavLink
                    className={({ isActive, isPending }) =>
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }
                    to="../"
                  >
                    Home
                  </DesktopNavLink>
                  <DesktopNavLink to="../flavors">Flavors</DesktopNavLink>
                  <DesktopNavLink to="/gallery">Gallery</DesktopNavLink>
                </DesktopLinkWrapper>
                <HeaderLogo
                  src={
                    theme === 'dark'
                      ? './assets/logo-dark.png'
                      : './assets/logo.png'
                  }
                />
                <RightDesktopLinkWrapper>
                  <DesktopNavLink to="/about">About</DesktopNavLink>
                  <DesktopNavLink to="/products">Products</DesktopNavLink>
                  <DesktopNavLink to="/cart">Cart</DesktopNavLink>
                </RightDesktopLinkWrapper>
              </DesktopNav>
            </DesktopMenuWrapper>
          </>
        )}
      </PageContentWrapper>
    </MyHeader>
  );
}

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
const DesktopNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transition: all 0.3s ease-in; /* Apply the transition specifically to the transform property */

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }

  &:hover {
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
  gap: 0.5rem;
`;

export default Header;
