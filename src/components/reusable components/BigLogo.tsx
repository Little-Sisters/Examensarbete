import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import headerLogoDark from '/bigwhite.png';
import headerLogo from '/bigblack.png';

interface LogoProps {
  width: string; 
  mobileWidth: string;
}

// Logo has 2  breakpoints atm, that you can send as props.
const StyledLogo = styled.img<LogoProps>`
  transition: all 0.3s linear;
  width: ${(props) => props.width || '5rem'};

  @media (max-width: 700px) {
    width: ${(props) => props.mobileWidth || '4rem'};
  }
`;

const BigLogo: React.FC<LogoProps> = ({ width, mobileWidth }) => {
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

export default BigLogo;
