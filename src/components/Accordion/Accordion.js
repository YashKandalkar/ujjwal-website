import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };
  return (
    <div onClick={HandleOpening} className="mb-2 w-full">
      <div className={"p-4 flex justify-between items-center text-offWhite"}>
        <h4 className={"font-sora text-2xl select-none"}>{title}</h4>

        <FontAwesomeIcon
          icon={faChevronUp}
          className="transform-gpu"
          style={{
            transition: "transform 0.3s ease-in-out",
            transform: `rotate(${isOpened ? "0" : "180"}deg)`,
          }}
        />
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="overflow-hidden transition-all duration-200"
      >
        <p className="p-4 pl-8 text-gray-300 select-none">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
