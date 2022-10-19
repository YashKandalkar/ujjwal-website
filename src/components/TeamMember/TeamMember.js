import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./TeamMember.css";

function TeamMember({ imagePath, text, github, linkedin }) {
  return (
    <div className="teamCard inline-block m-4">
      <div className="circle">
        <div className="imgbox">
          <LazyLoadImage
            key={text}
            src={imagePath}
            className="team-member"
            alt={text}
          />
        </div>
      </div>
      <div className="teamCard-content whitespace-pre-wrap text-center">
        <p className="text-gray-100 text-sm md:text-lg pt-4">{text}</p>
        {/* <p className="text-gray-400 text-xs md:text-base pt-0">{role}</p> */}
        <div className="flex flex-row justify-center items-center gap-3 pt-2">
          <a
            href={linkedin}
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
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-row mb-1"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="mr-4 sm:mr-2 text-xl"
              style={{ color: "#1e5ecb" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
