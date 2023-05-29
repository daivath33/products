import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-links">
      <p>Share At: </p>
      <a href="https://www.facebook.com/">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com/">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/">
        <FaInstagram />
      </a>
      <a href="https://www.whatsapp.com/">
        <FaWhatsapp />
      </a>
      <a href="https://www.pinterest.com/">
        <FaPinterestP />
      </a>
    </div>
  );
};

export default SocialIcons;
