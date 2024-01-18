import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { useCart } from '../contexts/CartContext';
import useMobile from '../hooks/UseMobile';
import Logo from './reusable components/Logo';
import PageContentWrapper from './reusable components/PageContentWrapper';
import Toggle from './Toggle';
import Burger from './burger-menu/Burger';
import headerLinks from '../../data/headerData';

interface HeaderProps {
  themeToggler: () => void;
  theme: string;
  isOn: boolean;
}

//Values for the "turn" effect animation on links in header drawer on mobile.
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

//Values for the open and close effect animation on header drawer on mobile.
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
    if (scrollY.get() > 5) {
      setBackgroundColor(myTheme.bodyOpacity);
      setBackdropFilter('blur(6px)');
    }
    if (scrollY.get() === 0 && isOpen) {
      setBackdropFilter('blur(6px)');
    }
    if (scrollY.get() < 5 && !isOpen) {
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
    if (latest > 0) {
      setBackdropFilter('blur(6px)');
    }
  });

  // Closes the drawer when you click outside of if.
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
              <Logo width="5rem" mobileWidth="4rem" />
              <Toggle isOn={isOn} toggleTheme={themeToggler} />
            </MobileMenuWrapper>
            {/* Animated drawer content */}
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
                          <Link to={link.to}>
                            {link.title === 'Cart'
                              ? `Cart (${totalItems})`
                              : link.title}
                          </Link>
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
            {/*Absolutley positions the darkmode toggle in desktop */}
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
                <Logo width="4rem" mobileWidth="4rem" />
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
