import React from "react";
import "./FeaturesItem.css";

function FeaturesItem({ imagePath, text }) {
  return (
    <div
      className="items-center features-item rounded-lg shadow-2xl flex flex-col justify-center text-center px-3 py-6"
      style={{
        width: 300,
        border: "1px solid #273b71",
        boxShadow: "0px 10px 15px 0px rgb(0 0 0 / 40%)",
      }}
    >
      <img src={imagePath} style={{ maxWidth: 150 }} alt="feature icon" />
      <p className="text-gray-400 pt-4">{text}</p>
    </div>
  );
}

export default FeaturesItem;
