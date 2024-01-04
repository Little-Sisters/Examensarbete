import styled from 'styled-components';

interface BurgerProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const Burger: React.FC<BurgerProps> = ({ isOpen, handleToggle }) => {
  return (
    <div
      id="menu-toggle"
      className={isOpen ? 'open' : ''}
      onClick={handleToggle}
    >
      <div id="hamburger">
        <StyledSpan className="span"></StyledSpan>
        <StyledSpan className="span"></StyledSpan>
        <StyledSpan className="span"></StyledSpan>
      </div>
      <div id="cross">
        <StyledSpan className="span"></StyledSpan>
        <StyledSpan className="span"></StyledSpan>
      </div>
    </div>
  );
};

const StyledSpan = styled.span`

`;

export default Burger;
