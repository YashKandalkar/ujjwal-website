import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer
      id="footer"
      className="px-6 xl:mt-16 items-center py-20 pt-28 md:pt-16 md:py-0 gap-8 md:justify-around flex flex-col md:flex-row"
    >
      <div>
        <a
          href="/"
          className="text-4xl font-bold text-white flex flex-row justify-center items-center"
        >
          <img
            src={"/favicon-96x96.png"}
            alt="logo"
            className="w-16 h-auto my-auto"
          />
          <h1>
            <span className="text-4xl">Ujjwal</span>
          </h1>
        </a>
      </div>
      <div className="flex my-auto flex-col">
        <p className="text-3xl font-sora sm:text-4xl text-gray-100 mb-3">
          Contact Us
        </p>
        <div className="col-lg-3 col-md-6 footer-contact">
          <a
            href="mailto:yashsk.yk@gmail.com"
            className="text-gray-400 text-xl"
          >
            yashsk.yk@gmail.com
          </a>
        </div>
        <hr className="border-gray-500 my-2" />
        <a
          href="mailto:manas.buchade@gmail.com"
          className="text-gray-400 text-xl"
        >
          manas.buchade@gmail.com
        </a>
      </div>
      {/* <div className="flex my-auto flex-col">
        <p className="text-3xl font-sora sm:text-4xl text-gray-100 mb-3">
          Socials
        </p>
        <div className="flex justify-items-center sm:justify-start flex-row sm:flex-col">
          <a
            href="https://twitter.com/DmceGdsc"
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
            href="https://www.instagram.com/gdsc.dmce/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-row mb-1"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="mr-4 sm:mr-2 text-xl"
              style={{ color: "#1e5ecb" }}
            />
            <p className="text-gray-400 hidden sm:block text-xl">Instagram</p>
          </a>
          <a
            href="https://www.linkedin.com/company/gdsc-dmce/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-row mb-1"
          >
            <img
              src={"/assets/icons8-linkedin.svg"}
              alt="linkedin"
              className="mr-0 sm:mr-2 text-xl"
              style={{ color: "#1e5ecb", width: 22, height: 22 }}
            />
            <p className="text-gray-400 hidden sm:block text-xl">Linkedin</p>
          </a>
        </div> 
      </div>*/}
    </footer>
  );
}

export default Footer;
