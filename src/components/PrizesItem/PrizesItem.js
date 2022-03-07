import React from "react";
import "./PrizeItem.css";

const PrizesItem = ({ imagePath, text }) => {
  return (
    <div
      //   data-aos="flip-left"
      className="prizeContainer"
      style={{
        width: 300,
        // backgroundColor: "rgb(29, 56, 107)",
      }}
    >
      {/* <div className="prizeContainer"> */}
      <div className="card mx-auto">
        <div
          className="prizeBack rounded-lg shadow-2xl px-3 py-6 text-gray-50 text-center"
          style={{ backgroundColor: "rgb(29, 56, 107)" }}
        >
          <img src={imagePath} style={{ maxWidth: 250 }} alt="feature icon" />
          <p className="text-gray-200 pt-4 text-3xl">{text}</p>
        </div>
        <div
          className="prizeFront rounded-lg shadow-2xl px-5 py-6 text-gray-50"
          style={{ backgroundColor: "rgb(29, 56, 107)" }}
        >
          Anim irure laboris cupidatat labore nostrud esse consectetur.
          Pariatur dolore in ex esse duis quis cupidatat minim sunt. Duis eu
          aliquip dolore culpa elit culpa sunt pariatur sit. Minim nisi labElit
          do culpa aliqua amet aliquip non labore enim reprehenderit.
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default PrizesItem;
