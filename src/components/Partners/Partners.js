import { forwardRef } from "react";
import PartnersItem from "../PartnersItem/PartnersItem";
import "./Partners.css";

const partners = [
  {
    imagePath: "/assets/team-1.png",
  },
  {
    imagePath: "/assets/team-2.png",
  },
  {
    imagePath: "/assets/team-3.png",
  },
  {
    imagePath: "/assets/team-4.png",
  },
  {
    imagePath: "/assets/team-5.png",
  },
];

const Partners = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="partners-container" className="py-16">
      <h1
        style={{
          fontFamily: "'Heaters', 'Montserrat', sans-serif",
          background:
            "linear-gradient(to bottom right, #fbbb60 0%, #f66445 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        data-aos="zoom-out"
        className="
text-gray-100
text-center
font-bold
leading-none
text-neutral-600
tracking-wider
text-7xl
lg:text-8xl
mb-16
"
      >
        Partners
      </h1>
      <div className="flex flex-wrap justify-items-center justify-center flex-row px-4 sm:px-16">
        {partners.map((feature, index) => (
          <PartnersItem key={index} {...feature} />
        ))}
      </div>
    </section>
  );
});

export default Partners;
