import { forwardRef } from "react";
import RoadmapItem from "../RoadmapItem/RoadmapItem";
import { Chrono } from "react-chrono";
import "./Roadmap.css";
import {
  faAnchor,
  faAtom,
  faFilter,
  faSpider,
} from "@fortawesome/free-solid-svg-icons";

const roadmapData = [
  {
    title: "Registration",
    text: "Participants register on Google Forms",
    iconPath: faFilter,
  },
  {
    title: "Round 1",
    text: (
      <>
        Select top 10 teams
        <br />
        based on online contest
      </>
    ),
    iconPath: faSpider,
  },
  {
    title: "Q1 2022",
    text: ["NFT marketplace", "Staking"],
    iconPath: faAnchor,
  },
  {
    title: "Q2 2022",
    text: ["P2P Marketplace", "Social Network"],
    iconPath: faAtom,
  },
];

const Roadmap = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="roadmap-container" className="py-16">
      <h1
        data-aos="zoom-in"
        className="text-gray-100 text-center my-10 text-5xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        timeline
      </h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        hideControls
        theme={{
          cardBgColor: "transparent",
          titleColor: "transparent",
          secondary: "transparent",
        }}
        items={roadmapData.map((item, rIndex) => ({
          title: (
            <div
              key={"title-item-" + rIndex}
              className={rIndex % 2 ? "text-right" : "text-left"}
            >
              <p className="text-gray-100 text-base">{item.title}</p>
              <p className="text-gray-300 text-base">{item.text}</p>
            </div>
          ),
        }))}
      >
        {roadmapData.map((roadmap, index) => (
          <RoadmapItem
            key={"roadmap-item-" + index}
            {...roadmap}
            parity={index}
          />
        ))}
      </Chrono>
    </section>
  );
});

export default Roadmap;
