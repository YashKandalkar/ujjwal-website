import React from "react";

function PartnersItem({ imagePath }) {
  return (
    <div
      data-aos="fade-up"
      className="items-center mx-4 max-w-sm md:max-w-xl flex flex-col justify-center text-center px-3 py-6"
      style={{
        width: 150,
      }}
    >
      <img src={imagePath} style={{ width: "100%" }} alt="partner logo" />
    </div>
  );
}

export default PartnersItem;
