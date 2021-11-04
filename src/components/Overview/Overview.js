import React from "react";
import "./Overview.css";

function Overview() {
  return (
    <section id="overview-container" className="flex items-center">
      <div className="px-4 py-12 w-full max-w-7xl sm:px-6 md:px-12 lg:py-24">
        <div className="flex  lg:justify-around flex-col-reverse lg:flex-row items-center">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="mx-auto max-w-2xl lg:mx-0 flex xl:mt-0"
          >
            <img
              className="object-cover z-0 object-center rounded-lg"
              alt="hero"
              src="/assets/overview.png"
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col max-w-2xl text-center lg:text-left lg:max-w-lg items-start lg:mb-16"
          >
            <h1
              style={{
                fontFamily: "'Heaters', 'Montserrat', sans-serif",
                background:
                  "linear-gradient(to bottom right, #fbbb60 0%, #f66445 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="mb-3 text-gray-100 mx-auto lg:mx-0 font-bold leading-none text-neutral-600 tracking-wider text-7xl lg:text-8xl"
            >
              OVERVIEW
            </h1>
            <p className="mb-1 sm:mb-3 mt-6 lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-gray-400">
              GameUp allows any centralized games' users to swiftly convert
              their in-game rewards into $GMU tokens. Those tokens can be used
              to exchange rewards with other users, purchase in-game items from
              other games, mint NFT of your unique rewards & Stake.
            </p>
            <p className="mb-3 lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-gray-400">
              GameUp will empower already established games to come on
              blockchain directly through our API and rewards system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
