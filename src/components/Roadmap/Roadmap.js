import { forwardRef } from "react";
import RoadmapItem from "../RoadmapItem/RoadmapItem";
import { Chrono } from "react-chrono";
import "./Roadmap.css";

const roadmapData = [
  {
    title: "Registration",
    text: "Teams will register on a Google Form",
    date: "22nd March - 5th April",
  },
  {
    title: "Shortlisting Round",
    text: "Top 50 teams will be selected for Online Scrutiny",
    date: "10th April",
  },
  {
    title: "Online Scrutiny",
    text: "The selected teams will present their project in an online meet",
    date: "11th - 13th April",
  },
  {
    title: "Online Scrutiny Results",
    text: "Top 10 teams will be selected for the Grand Finale",
    date: "14th April",
  },
  {
    title: "Grand Finale",
    text: "The selected teams will present their project at DMCE",
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
            className="hidden sm:block absolute right-0 mx-auto"
            style={{ width: 40, left: "36px", top: 6 }}
          />
          <Chrono
            mode={
              window.innerWidth > 640 ? "VERTICAL_ALTERNATING" : "VERTICAL"
            }
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
          <img
            src="/assets/flag-finish.svg"
            alt="flag"
            className="hidden sm:block absolute right-0 mx-auto"
            style={{ width: 40, left: "35px", bottom: -60 }}
          />
        </div>
      </div>
    </section>
  );
});

export default Roadmap;
