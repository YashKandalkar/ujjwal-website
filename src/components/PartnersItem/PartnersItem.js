import React from "react";

function PartnersItem({ imagePath, name, width, type, url, titleSponsor }) {
  return (
    <div
      // data-aos="fade-up"
      className="items-center justify-items-center mx-4 flex flex-col justify-center text-center px-3 py-6"
      style={{ maxWidth: width, width: "100%", minWidth: 200 }}
    >
      <a
        href={url}
        target={"_blank"}
        style={{ width: "100%" }}
        rel={"noopener noreferrer"}
      >
        <img
          className="mx-auto"
          src={imagePath}
          style={{
            height: "auto",
            width: "100%",
            maxWidth: width || 280,
          }}
          alt="partner logo"
        />
      </a>
      {!titleSponsor && (
        <a
          href={url}
          target={"_blank"}
          rel={"noopener noreferrer"}
          className="mt-4"
        >
          <span className="text-highlight text-3xl">{name}</span>
        </a>
      )}
      <span
        className={`text-gray-200 mt-2  ${
          titleSponsor
            ? "text-3xl sm:text-4xl mt-20 mb-20 text-white glow"
            : "text-xl"
        }`}
      >
        {type}
      </span>
    </div>
  );
}

export default PartnersItem;
