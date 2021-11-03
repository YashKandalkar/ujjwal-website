import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer
      id="footer"
      className="px-20 justify-center sm:justify-around flex flex-col sm:flex-row"
    >
      <img
        src={"/assets/logo.png"}
        alt="logo"
        className="w-48 h-auto my-auto"
      />
      <div className="flex my-auto flex-col">
        <p className="text-4xl text-gray-100 mb-3">Contact Us</p>
        <a href="mailto:team@gameup.tech" className="text-gray-400 text-xl">
          team@gameup.tech
        </a>
      </div>
      <div className="flex my-auto flex-col">
        <p className="text-4xl text-gray-100 mb-3">Socials</p>
        <div className="flex items-center flex-row mb-1">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-blue-500 mr-2 text-xl"
          />
          <p className="text-gray-400 text-xl">Twitter</p>
        </div>
        <div className="flex items-center flex-row">
          <FontAwesomeIcon
            icon={faTelegram}
            className="text-blue-500 mr-2 text-xl"
          />
          <p className="text-gray-400 text-xl">Telegram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
