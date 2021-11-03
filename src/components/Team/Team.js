import React from "react";
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

function Team() {
  return (
    <section id="team-container" className="py-16">
      <h1
        className="
    text-gray-100
  text-center
  text-4xl
  font-bold
  leading-none
  tracking-tighter
  text-neutral-600
  md:text-7xl
  lg:text-5xl
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
}

export default Team;
