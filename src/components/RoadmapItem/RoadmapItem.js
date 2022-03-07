import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function RoadmapItem({ iconPath, parity }) {
  return (
    <div
      className={`
      flex 
      flex-grow
      items-center
      justify-end
      flex-col
      ${parity % 2 ? "md:flex-row" : "md:flex-row-reverse"}
      `}
      style={{
        alignSelf: parity % 2 ? "self-start" : "self-end",
      }}
    >
      <FontAwesomeIcon
        icon={iconPath}
        className="text-accent mt-6 text-7xl md:text-9xl mr-2"
      />
    </div>
  );
}

export default RoadmapItem;
