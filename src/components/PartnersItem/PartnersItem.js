import React from "react";

function PartnersItem({ imagePath, name, width, type, url }) {
  return (
    <div
      data-aos="fade-up"
      className="items-center justify-items-center mx-4 max-w-sm md:max-w-xl flex flex-col justify-center text-center px-3 py-6"
      style={{}}
    >
      <a href={url} target={"_blank"} rel={"noopener noreferrer"}>
        <img
          src={imagePath}
          style={{
            height: "auto",
            width: "100%",
            maxWidth: width || 280,
          }}
          alt="partner logo"
        />
      </a>
      <a
        href={url}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className="mt-4"
      >
        <span className="text-highlight text-3xl">{name}</span>
      </a>
      <span className="text-gray-200 mt-2 text-xl">{type}</span>
    </div>
  );
}

export default PartnersItem;
