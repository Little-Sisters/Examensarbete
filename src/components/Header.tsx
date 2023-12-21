import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <Link to="../">Home</Link>
      <Link to="../flavors">Flavors</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/products">Products</Link>
    </header>
  );
}

export default Header;
