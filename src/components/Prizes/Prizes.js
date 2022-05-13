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
        Events
      </h1>
      <div
        className={`mt-24 px-4 sm:px-8 md:px-8
          flex flex-wrap gap-9
          justify-center items-center`}
      >
        {/* <PrizesItem
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
        /> */}
        <a
          href="https://gdsc.community.dev/datta-meghe-college-of-engineering-navi-mumbai/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textShadow:
              "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
            fontWeight: 600,
          }}
          className="bg-purple-500 hover:bg-purple-400 border-b-4 border-purple-700 hover:border-purple-500 text-xl text-gray-50 font-titleBold text-center py-2 px-8 sm:py-4 sm:px-14 rounded mt-16"
        >
          View Events
        </a>
      </div>
      {/* <div className="text-gray-300 text-center mt-10">
        All the winning team members will get a certificate!
      </div> */}
    </section>
  );
});

export default Prizes;
