import { LazyLoadImage } from "react-lazy-load-image-component";
import "./TeamMember.css";

function TeamMember({ imagePath, text, role }) {
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
        <p className="text-gray-400 text-xs md:text-base pt-0">{role}</p>
      </div>
    </div>
  );
}

export default TeamMember;
