import "./TeamMember.css";

function TeamMember({ imagePath, text, role }) {
  return (
    <div className="teamCard m-4">
      <div className="circle">
        <div className="imgbox">
          <img className="team-member" src={imagePath} alt="ron" />
        </div>
      </div>
      <div className="teamCard-content text-center">
        <p className="text-gray-100 text-lg pt-4">{text}</p>
        <p className="text-gray-400 text-base pt-0">{role}</p>
      </div>
    </div>
  );
}

export default TeamMember;
