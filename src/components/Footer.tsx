import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
function Footer() {
  return (
    <>
      <footer>
        <div>
          <h1>BEAUTIFUL CAKES LOGO</h1>
        </div>
        <div>
          <h1>CONTACT US</h1>
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaFacebook />
        </div>
        <div>
          <h1>NEWSLETTER</h1>
          <input type="text" />
          <input type="button" value="" />
        </div>
        <div>
          <h1>GET IN TOUCH</h1>
          <p>Number</p>
          <p>Email</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
