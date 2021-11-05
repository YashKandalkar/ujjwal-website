import { forwardRef } from "react";
import "./Tokenomics.css";

const Tokenomics = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="tokenomics-container" className="py-16">
      <h1
        style={{
          fontFamily: "'Heaters', 'Montserrat', sans-serif",
          background:
            "linear-gradient(to bottom right, #fbbb60 0%, #f66445 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        data-aos="fade-down"
        className="
      text-gray-100
      text-center
      font-bold
      leading-none
      text-neutral-600
      tracking-wider
      text-7xl
      lg:text-8xl"
      >
        TOKENOMICS
      </h1>
      <div className=" mt-24 px-4 sm:px-8 md:px-8 flex flex-col lg:flex-row md:justify-center md:items-center">
        <img
          data-aos="fade-up-right"
          id="tokenomics-img"
          src="/assets/tokenomics.png"
          alt="tokenomics"
          className="w-full md:w-96 lg:w-2/5 mb-8"
        />
        <div
          data-aos="fade-up-left"
          className="flex flex-col mx-auto lg:mx-0 items-start lg:ml-16"
        >
          <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-4">
            Public Round: 3% (20% at TGE, 20% Monthly)
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-4">
            Seed Round: 5% (5% TGE & then 5% Monthly)
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-4">
            Liquidity: 5% (Will be used to add Liquidity to DEX & CEX)
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-4">
            Partners & Advisors: 5% (6 months cliff, then 5% monthly)
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-4">
            Development & Marketing: 7% (One month cliff, then 5% monthly)
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-4">
            Team: 10% (One year cliff, then 2% monthly)
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-4">
            Private Round: 15% (5% TGE & then 5% Monthly)
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-4">
            Rewards & Ecosystem: 50% (2% at TGE, followed by 4% every month)
          </p>
        </div>
      </div>
    </section>
  );
});

export default Tokenomics;
