import { forwardRef } from "react";
import { TeamMember } from "..";
import "./Team.css";

const teamMembers = [
  {
    imagePath: "/assets/team-1.png",
    text: "Ron",
    role: "CEO",
  },
  {
    imagePath: "/assets/team-2.png",
    text: "Antonio",
    role: "Lead Blockchain Developer",
  },
  {
    imagePath: "/assets/team-3.png",
    text: "Ashley",
    role: "COO",
  },
  {
    imagePath: "/assets/team-4.png",
    text: "Jerry",
    role: "Marketing Manager",
  },
  {
    imagePath: "/assets/team-5.png",
    text: "Max",
    role: "Partnership & BD",
  },
];

const Team = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="team-container" className="py-16">
      <h1
        style={{
          fontFamily: "'Heaters', 'Montserrat', sans-serif",
          background:
            "linear-gradient(to bottom right, #fbbb60 0%, #f66445 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        data-aos="zoom-out"
        className="
    text-gray-100
    text-center
    font-bold
    leading-none
    text-neutral-600
    tracking-wider
    text-7xl
    lg:text-8xl
    mb-16
  "
      >
        Team
      </h1>
      <div className="flex flex-wrap justify-items-center justify-center flex-row px-4 sm:px-16">
        {teamMembers.map((feature, index) => (
          <TeamMember key={index} {...feature} />
        ))}
      </div>
    </section>
  );
});

export default Team;
