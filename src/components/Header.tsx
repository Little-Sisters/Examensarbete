import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageContentWrapper from './PageContentWrapper';

interface HeaderProps {
  themeToggler: () => void;
}

function Header({ themeToggler }: HeaderProps) {
  return (
    <MyHeader>
      <PageContentWrapper>
        <h5>Header</h5>
        <Link to="../">Home</Link>
        <Link to="../flavors">Flavors</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/products">Products</Link>
        <button onClick={themeToggler}>Switch Theme</button>
      </PageContentWrapper>
    </MyHeader>
  );
}

const MyHeader = styled.header`
  background: grey;
`;

export default Header;
