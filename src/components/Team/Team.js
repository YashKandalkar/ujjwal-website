import { forwardRef } from "react";
import { TeamMember } from "..";
import "./Team.css";

const teamMembers = [
  {
    text: "Manas Buchade",
    github: "https://github.com/manasb15",
    linkedin: "https://www.linkedin.com/in/thisismanas/",
  },
  {
    text: "Yash Kandalkar",
    github: "https://github.com/YashKandalkar",
    linkedin: "https://www.linkedin.com/in/yash-kandalkar-b5890b1aa/",
  },
  {
    text: "Nirmiti Bhoir",
    github: "https://github.com/The-CoffeeCraver",
    linkedin: "https://www.linkedin.com/in/nirmiti-bhoir-b22b671bb/",
  },
  {
    text: "Raj Jadhav",
    github: "https://github.com/FrozenSamurai/",
    linkedin: "https://www.linkedin.com/in/frozensamurai/",
  },
  {
    text: "Aarushi Das",
    github: "https://github.com/iamaarushidas",
    linkedin: "https://www.linkedin.com/in/aarushi-das-b48a291bb/",
  },
  {
    text: "Dhruv Bhanushali",
    github: "https://github.com/dhruv-bhanushali",
    linkedin: "https://www.linkedin.com/in/dhruv-bhanushali-1801/",
  },
];

const teamImages = [
  "/assets/team/manas.png",
  "/assets/team/yash.png",
  "/assets/team/nirmiti.png",
  "/assets/team/raj.png",
  "/assets/team/aarushi.png",
  "/assets/team/dhruv.png",
];

const Team = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="team-container" className="py-16">
      <h1
        data-aos="zoom-out"
        className="text-gray-100 text-center my-10 text-3xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        Team
      </h1>
      <div className="overflow-x-auto flex-nowrap whitespace-nowrap mx-4 sm:mx-16">
        {teamMembers.map((data, index) => (
          <TeamMember key={index} {...data} imagePath={teamImages[index]} />
        ))}
      </div>
    </section>
  );
});

export default Team;
