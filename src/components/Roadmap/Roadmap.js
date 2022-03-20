import { forwardRef } from "react";
import RoadmapItem from "../RoadmapItem/RoadmapItem";
import { Chrono } from "react-chrono";
import "./Roadmap.css";

const roadmapData = [
  {
    title: "Registration (Round 1)",
    text: "Teams will register on a Google Form",
    date: "22nd March - 5th April",
  },
  {
    title: "Round 1 Results",
    text: "Top 50 teams will be selected for Round 2",
    date: "10th April",
  },
  {
    title: "Round 2",
    text: "Online Presentation Round",
    date: "11th - 13th April",
  },
  {
    title: "Round 2 - Results",
    text: "Top 10 teams will be selected for Round 3",
    date: "14th April",
  },
  {
    title: "Round 3 - Grand Finale",
    text: "Offline Presentation Round",
    date: "22nd April",
  },
  {
    title: "Final Results",
    text: "Top 3 teams will be announced on the spot!",
    date: "22nd April",
  },
];

const Roadmap = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="roadmap-container">
      <div className="py-16 max-w-2xl mx-auto">
        <h1
          data-aos="zoom-in"
          className="text-gray-100 text-center my-10 text-5xl
        lg:text-6xl uppercase glow font-titleBold"
        >
          timeline
        </h1>
        <div className="relative">
          <img
            src="/assets/flag.svg"
            alt="flag"
            className="absolute right-0 mx-auto"
            style={{ width: 40, left: "36px", top: 6 }}
          />
          <Chrono
            mode="VERTICAL_ALTERNATING"
            hideControls
            theme={{
              cardBgColor: "rgb(145, 81, 192)",
              primary: "#eee",
            }}
          >
            {roadmapData.map((roadmap, index) => (
              <RoadmapItem
                key={"roadmap-item-" + index}
                {...roadmap}
                parity={index}
              />
            ))}
            <div className="chrono-icons">
              {roadmapData.map(() => (
                <img
                  src="/assets/star.png"
                  style={{ marginTop: 2 }}
                  alt="star"
                />
              ))}
            </div>
          </Chrono>
        </div>
      </div>
    </section>
  );
});

export default Roadmap;
