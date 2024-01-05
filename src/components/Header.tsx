import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import useMobile from '../hooks/UseMobile';
import PageContentWrapper from './PageContentWrapper';
import Toggle from './Toggle';
import Burger from './burger-menu/Burger';
import headerLinks from './data';
import headerLogoDark from '/logo-dark.png';
import headerLogo from '/logo.png';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  themeToggler: () => void;
  theme: string;
  isOn: boolean;
}

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 45,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.4 + i * 0.12 },
    rotateX: 0,
  }),
  exit: {
    opacity: 0,
  },
};

const variants = {
  open: {
    width: '100%',
    height: 300,
    transition: { duration: 0.65, ease: [0.75, 0, 0.25, 1] },
  },
  closed: {
    width: '100%',
    height: 0,
    transition: { duration: 0.65, delay: 0.35, ease: [0.75, 0, 0.25, 1] },
  },
};

function Header({ themeToggler, theme, isOn }: HeaderProps) {
  const isMobile = useMobile(700);
  const { scrollY } = useScroll();
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [isScrolling, setIsBig] = useState(false);
  const [backdropFilter, setBackdropFilter] = useState('none');
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { totalItems } = useCart();

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (scrollY.get() === 0) {
      setBackdropFilter('blur(6px)');
    }
  };

  const myTheme = useTheme();

  useEffect(() => {
    if (scrollY.get() > 0) {
      setBackgroundColor(myTheme.bodyOpacity);
      setBackdropFilter('blur(6px)');
    }
    if (scrollY.get() === 0 && isOpen) {
      setBackdropFilter('blur(6px)');
    }
    if (scrollY.get() === 0 && !isOpen) {
      setBackgroundColor('transparent');
      setBackdropFilter('none');
    }
  }, [theme, myTheme.bodyOpacity, scrollY, isOpen]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const newBackgroundColor = latest > 0 ? myTheme.bodyOpacity : 'transparent';
    setBackgroundColor(newBackgroundColor);

    if (!isMobile) {
      setIsBig(latest > 0);
    }
  });

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuRef]);

  const headerAnimation = isMobile
    ? { height: 'auto' }
    : { height: isScrolling ? '4rem' : '6rem' };

  return (
    <MyHeader
      ref={menuRef}
      style={{
        background: backgroundColor,
        backdropFilter: backdropFilter,
      }}
      animate={headerAnimation}
    >
      <PageContentWrapper>
        {isMobile ? (
          <>
            {/* Content for mobile */}
            <MobileMenuWrapper>
              <Burger isOpen={isOpen} handleToggle={handleToggle}></Burger>
              <HeaderLogo
                src={theme === 'dark' ? headerLogoDark : headerLogo}
              />
              <Toggle isOn={isOn} toggleTheme={themeToggler} />
            </MobileMenuWrapper>
            <LinkBox
              variants={variants}
              animate={isOpen ? 'open' : 'closed'}
              initial={closed}
            >
              <AnimatePresence>
                {isOpen && (
                  <NavBox>
                    {headerLinks.map((link, i) => (
                      <LinkRotationBox key={i}>
                        <LinkAnimation
                          variants={perspective}
                          className="header-menu-border"
                          animate="enter"
                          exit="exit"
                          initial="initial"
                          custom={i}
                          onClick={handleToggle}
                        >
                          <Link to={link.to}>{link.title}</Link>
                        </LinkAnimation>
                      </LinkRotationBox>
                    ))}
                  </NavBox>
                )}
              </AnimatePresence>
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
                  src={theme === 'dark' ? headerLogoDark : headerLogo}
                />
                <RightDesktopLinkWrapper>
                  <DesktopNavLink to="/about">About</DesktopNavLink>
                  <DesktopNavLink to="/products">Products</DesktopNavLink>
                  <DesktopNavLink to="/cart">Cart({totalItems})</DesktopNavLink>
                </RightDesktopLinkWrapper>
              </DesktopNav>
            </DesktopMenuWrapper>
          </>
        )}
      </PageContentWrapper>
    </MyHeader>
  );
}

const LinkBox = styled(motion.div)`
  width: 100%;
  height: 300px;
`;

const NavBox = styled.div`
  height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  a {
    text-decoration: none;
    width: 100%;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`;
const LinkRotationBox = styled(motion.div)`
  perspective: 120px;
`;

const LinkAnimation = styled(motion.div)`
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;

const AbsoluteBox = styled.div`
  position: absolute;
  z-index: 5000;
  padding: 0.5rem 1rem;
  right: 0;
  top: 0;
`;

const MyHeader = styled(motion.header)`
  z-index: 100000;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    padding: 0.8rem 0;
  }
  transition: all 0.3s ease;
`;

const HeaderLogo = styled.img`
  width: 5rem;
  @media (max-width: 700px) {
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

export default Header;
