import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import headerLogoDark from '/dark-small-logo.png';
import headerLogo from '/light-small-logo.png';

interface LogoProps {
  width: string;
  mobileWidth: string;
}

// Logo has 2  breakpoints atm, that you can send as props.
const StyledLogo = styled.img<LogoProps>`
  transition: all 0.3s linear;
  padding-top: 4px;
  width: ${(props) => props.width || '5rem'};

  @media (max-width: 730px) {
    width: ${(props) => props.mobileWidth || '4rem'};
    padding-top: 0px;
  }
`;

const Logo: React.FC<LogoProps> = ({ width, mobileWidth }) => {
  // Access to current theme, "light" or "dark"
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.mode;

  return (
    <StyledLogo
      src={theme === 'dark' ? headerLogoDark : headerLogo}
      alt={'Logo'}
      width={width}
      mobileWidth={mobileWidth}
    />
  );
};

export default Logo;
