import "./TeamMember.css";

function TeamMember({ imagePath, text, role }) {
  return (
    // <div
    //   className="items-center m-4 features-item rounded-lg  flex flex-col justify-center text-center px-3 py-6"
    //   style={{
    //     width: "200px",
    //     border: "1px solid #273b71",
    //     boxShadow: "0px 10px 15px 0px rgb(0 0 0 / 40%)",
    //   }}
    // >
    //   <img
    //     src={imagePath}
    //     style={{
    //       maxWidth: 150,
    //       borderRadius: "50%",
    //       padding: "8px",
    //       border: "2px solid #273b71",
    //     }}
    //     alt="feature icon"
    //   />
    //   <p className="text-gray-100 text-3xl pt-4">{text}</p>
    //   <p className="text-gray-400 text-lg pt-0">{role}</p>
    // </div>
    <div className="teamCard m-4" data-aos="flip-left">
      <div className="circle">
        <div className="imgbox">
          <img className="team-member" src={imagePath} alt="ron" />
        </div>
      </div>
      <div className="teamCard-content text-center">
        <p className="text-gray-100 text-3xl pt-4">{text}</p>
        <p className="text-gray-400 text-base pt-0">{role}</p>
      </div>
    </div>
  );
}

export default TeamMember;
