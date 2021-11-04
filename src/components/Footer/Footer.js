import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer
      id="footer"
      className="px-20 items-center py-20 pt-28 md:pt-16 md:py-0 gap-8 md:gap-0 md:justify-around flex flex-col md:flex-row"
    >
      <img
        src={"/assets/logo.png"}
        alt="logo"
        className="w-48 h-auto my-auto"
      />
      <div className="flex my-auto flex-col">
        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-3xl sm:text-4xl text-gray-100 mb-3"
        >
          Contact Us
        </p>
        <a href="mailto:team@gameup.tech" className="text-gray-400 text-xl">
          team@gameup.tech
        </a>
      </div>
      <div className="flex my-auto flex-col">
        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-3xl sm:text-4xl text-gray-100 mb-3"
        >
          Socials
        </p>
        <div className="flex justify-items-center sm:justify-start flex-row sm:flex-col">
          <a
            href="https://twitter.com/gameup_tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-row mb-1"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="mr-4 sm:mr-2 text-xl"
              style={{ color: "#1e5ecb" }}
            />
            <p className="text-gray-400 hidden sm:block text-xl">Twitter</p>
          </a>
          <a
            href="http://t.me/gameup_tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-row mb-1"
          >
            <FontAwesomeIcon
              icon={faTelegram}
              className="mr-4 sm:mr-2 text-xl"
              style={{ color: "#1e5ecb" }}
            />
            <p className="text-gray-400 hidden sm:block text-xl">Telegram</p>
          </a>
          <a href="/" className="flex items-center flex-row mb-1">
            <FontAwesomeIcon
              icon={faMedium}
              className="mr-0 sm:mr-2 text-xl"
              style={{ color: "#1e5ecb" }}
            />
            <p className="text-gray-400 hidden sm:block text-xl">Medium</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
