import React from "react";
import "./Tokenomics.css";

function Tokenomics() {
  return (
    <section id="tokenomics-container" className="py-16">
      <h1
        className="
        text-gray-100
    text-center
      text-4xl
      font-bold
      leading-none
      tracking-tighter
      text-neutral-600
      md:text-7xl
      lg:text-5xl"
      >
        Tokenomics
      </h1>
      <div className=" mt-24 px-4 sm:px-8 md:px-8 flex flex-col lg:flex-row md:justify-center md:items-center">
        <img
          id="tokenomics-img"
          src="/assets/tokenomics.png"
          alt="tokenomics"
          className="w-full md:w-96 lg:w-2/5 mb-8"
        />
        <div className="flex flex-col mx-auto lg:mx-0 items-start lg:ml-16">
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Public Round: 3% (20% at TGE, 20% Monthly)
          </p>
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Seed Round: 5% (5% TGE & then 5% Monthly)
          </p>
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Liquidity: 5% (Will be used to add Liquidity to DEX & CEX)
          </p>
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Partners & Advisors: 5% (6 months cliff, then 5% monthly)
          </p>
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Development & Marketing: 7% (One month cliff, then 5% monthly)
          </p>
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Team: 10% (One year cliff, then 2% monthly)
          </p>
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Private Round: 15% (5% TGE & then 5% Monthly)
          </p>
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Rewards & Ecosystem: 50% (2% at TGE, followed by 4% every month)
          </p>
        </div>
      </div>
    </section>
  );
}

// Marketing, Staking Rewards and Ecosystem: 20% (10% unlocked at TGE, 10% unlocked each month)
// Team: 20% ( 6 months cliff, 10% unlocked each month thereafter)
// Liquidity: 10% (20% unlocked at TGE , 20% unlocked each month thereafter)
// Public Token Sale: 15% (25% unlocked at TGE followed by 25% every two weeks)
// Partners: 10% (20% unlocked at TGE followed by 20% every two weeks)

export default Tokenomics;
