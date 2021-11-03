import React from "react";
import RoadmapItem from "../RoadmapItem/RoadmapItem";
import { Chrono } from "react-chrono";
import "./Roadmap.css";

const roadmapData = [
  {
    title: "Q3 2021",
    text: ["Research", "Application Development"],
    iconPath: "./assets/roadmap-1.png",
  },
  {
    title: "Q4 2021",
    text: ["Token Generation Event", "Partnerships", "Launch Product"],
    iconPath: "./assets/roadmap-2.png",
  },
  {
    title: "Q1 2022",
    text: ["NFT marketplace", "Staking"],
    iconPath: "./assets/roadmap-3.png",
  },
  {
    title: "Q2 2022",
    text: ["P2P Marketplace", "Social Network"],
    iconPath: "./assets/roadmap-4.png",
  },
];

function Roadmap() {
  return (
    <section id="roadmap-container" className="py-16">
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
  mb-12"
      >
        ROADMAP
      </h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        hideControls
        theme={{
          cardBgColor: "transparent",
          titleColor: "transparent",
          secondary: "transparent",
        }}
        items={roadmapData.map((item) => ({
          title: (
            <div className="text-left">
              <p className="text-gray-100 text-base">{item.title}</p>
              {item.text.map((item, index) => (
                <>
                  <p key={index} className="text-gray-300 text-base">
                    {item}
                  </p>
                </>
              ))}
            </div>
          ),
        }))}
      >
        {roadmapData.map((roadmap, index) => (
          <RoadmapItem key={index} {...roadmap} parity={index} />
        ))}
      </Chrono>
    </section>
  );
}

export default Roadmap;
