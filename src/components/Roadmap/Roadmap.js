import { forwardRef } from "react";
import RoadmapItem from "../RoadmapItem/RoadmapItem";
import { Chrono } from "react-chrono";
import "./Roadmap.css";

const roadmapData = [
  {
    title: "Idea Selection",
    // went through 250+ ideas and selected the one that resonated with us the most
    text: "Went through 250+ ideas and selected the one that resonated with us the most",
    date: "February 2022",
  },
  {
    title: "DMCE Internal Hackathon",
    text: "Got selected in the top 10 teams of our college",
    date: "April 2022",
  },
  {
    title: "SIH Finale Selection",
    text: "One of the top 5 teams shortlisted for the finale of the hackathon.",
    date: "June 2022",
  },
  {
    title: "SIH Grand Finale",
    text: "Won the 1st Prize in the Grand Finale at IIT Kanpur!",
    image: "/assets/sih-win.jpeg",
    date: "August 2022",
  },
  {
    title: "To be continued...",
    text: "We are working on implementing the solution and will be launching it soon!",
    date: "",
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
          Journey
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
              {roadmapData.map((_, ind) => (
                <img
                  key={"roadmap-icon-" + ind}
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
