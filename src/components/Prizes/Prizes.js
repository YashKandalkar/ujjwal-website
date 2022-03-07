import { forwardRef } from "react";
import PrizesItem from "../PrizesItem/PrizesItem";
import "./Prizes.css";

const Prizes = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="tokenomics-container" className="py-16">
      <h1
        data-aos="fade-down"
        className="
        text-gray-100 text-center mt-10 text-5xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        Prizes
      </h1>
      <div
        className={`mt-24 px-4 sm:px-8 md:px-8
          flex flex-wrap gap-9
          justify-center items-center`}
      >
        <PrizesItem imagePath="/assets/trophy-1.svg" text="1st Prize" />
        <PrizesItem imagePath="/assets/trophy-2.svg" text="2nd Prize" />
        <PrizesItem imagePath="/assets/trophy-3.svg" text="3rd Prize" />
      </div>
    </section>
  );
});

export default Prizes;
