import { forwardRef } from "react";
import PrizesItem from "../PrizesItem/PrizesItem";
import "./Prizes.css";

const prizesTexts = [
  <ul className="list-disc text-left ml-4 text-sm">
    <li>₹5000/- </li>
    <li>Team Trophy </li>
    <li> .xyz domain for each team member for one year </li>
    <li>StreamYard essential for 1 year for each team member </li>
    <li>Free upgrades to taskade</li>

    <li>Internship interview opportunity at Raahee </li>
    <li>Lunch and Learn session with top teams at Ugam Office.</li>
    <li>
      Free 30 day access pass for coding interview prep course by InterviewCake
    </li>
  </ul>,
  <ul className="list-disc text-left ml-4 text-sm">
    <li>₹3000/- </li>
    <li>Team Trophy </li>
    <li> .xyz domain for each team member for one year </li>
    <li>StreamYard essential for 1 year for each team member </li>
    <li>Free upgrades to taskade</li>

    <li>Internship interview opportunity at Raahee </li>
    <li>Lunch and Learn session with top teams at Ugam Office.</li>
    <li>
      Free 30 day access pass for coding interview prep course by InterviewCake
    </li>
  </ul>,
  <ul className="list-disc text-left ml-4 text-sm">
    <li>₹2000/- </li>
    <li>Team Trophy </li>
    <li> .xyz domain for each team member for one year </li>
    <li>StreamYard essential for 1 year for each team member </li>
    <li>Free upgrades to taskade</li>

    <li>Internship interview opportunity at Raahee </li>
    <li>Lunch and Learn session with top teams at Ugam Office.</li>
    <li>
      Free 30 day access pass for coding interview prep course by InterviewCake
    </li>
  </ul>,
];

const Prizes = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="tokenomics-container" className="py-16">
      <h1
        data-aos="fade-down"
        className="
        text-gray-100 text-center mt-10 text-5xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        Prizes
      </h1>
      <div
        className={`mt-24 px-4 sm:px-8 md:px-8
          flex flex-wrap gap-9
          justify-center items-center`}
      >
        <PrizesItem
          key={"prize-0"}
          imagePath="/assets/trophy-1.svg"
          text="1st Prize"
          prize={prizesTexts[0]}
        />
        <PrizesItem
          key={"prize-1"}
          imagePath="/assets/trophy-2.svg"
          text="2nd Prize"
          prize={prizesTexts[1]}
        />
        <PrizesItem
          key={"prize-2"}
          imagePath="/assets/trophy-3.svg"
          text="3rd Prize"
          prize={prizesTexts[2]}
        />
      </div>
      <span></span>
    </section>
  );
});

export default Prizes;
