import React from "react";

function RoadmapItem({ iconPath, parity }) {
  return (
    <div
      className={`
      flex 
      items-center
      justify-end
      flex-col
      ${parity % 2 ? "md:flex-row" : "md:flex-row-reverse"}
      `}
      style={{
        alignSelf: parity % 2 ? "self-start" : "self-end",
      }}
    >
      <img
        src={iconPath}
        alt="icon"
        className={`w-36 ${parity % 2 ? "md:ml-4" : "md:mr-4"}  m-0`}
      />
    </div>
  );
}

export default RoadmapItem;
