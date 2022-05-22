import { forwardRef } from "react";
import PartnersItem from "../PartnersItem/PartnersItem";
import "./Partners.css";

const partners = [
  {
    imagePath: "/assets/Ugam.svg",
    name: "Ugam",
    type: "Title Sponsor",
    url: "https://www.ugamsolutions.com/",
  },
  {
    imagePath: "/assets/StreamYard.png",
    name: "StreamYard",
    type: "Streaming Partner",
    url: "https://www.streamyard.com/",
  },
  {
    imagePath: "/assets/Raahee.svg",
    name: "Raahee",
    type: "Well Being Partner",
    url: "https://raahee.in/",
  },
  {
    imagePath: "/assets/InterviewCake.svg",
    name: "InterviewCake",
    type: "Interview Partner",
    url: "https://www.interviewcake.com/",
  },
  {
    imagePath: "/assets/GenXYZ.svg",
    name: "Gen.xyz",
    type: "Domain Partner",
    url: "https://www.gen.xyz/",
  },
  {
    imagePath: "/assets/Taskade.png",
    name: "Taskade",
    type: "Management Partner",
    url: "https://www.taskade.com/",
  },
];

const Partners = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="partners-container" className="py-16">
      <h1
        className="text-gray-100 text-center my-10 text-4xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        Sponsors
      </h1>

      <div
        style={{ minHeight: "80vh" }}
        className="flex px-10 flex-wrap justify-items-center gap-y-10 items-center justify-center flex-col sm:px-16"
      >
        <PartnersItem titleSponsor {...partners[0]} width={450} />
      </div>
      <div className="flex flex-wrap gap-y-10 items-baseline justify-center flex-row px-4 sm:px-16">
        <PartnersItem {...partners[1]} width={150} />
        <PartnersItem {...partners[2]} width={120} />
        <PartnersItem {...partners[3]} width={290} />
        <PartnersItem {...partners[4]} width={140} />
        <PartnersItem {...partners[5]} width={140} />
      </div>
    </section>
  );
});

export default Partners;
