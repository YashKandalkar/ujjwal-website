import React, { forwardRef } from "react";
import "./Overview.css";

const Overview = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="overview-container"
      className="flex bg-primaryDark items-center"
    >
      <div className="px-4 py-12 w-full sm:px-6 md:px-12 lg:py-24">
        <div className="flex  lg:justify-around flex-col-reverse lg:flex-row items-center">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="mx-auto max-w-lg lg:max-w-lg 2xl:max-w-screen-md flex xl:mt-0"
          >
            <img
              className="object-cover z-0  object-center rounded-lg"
              alt="hero"
              src="/assets/teacher-student.png"
            />
          </div>
          <div
            data-aos="fade-left"
            className="
            flex flex-col text-center lg:text-left 
            max-w-2xl sm:max-w-2xl lg:max-w-lg 2xl:max-w-screen-xl items-start 
            lg:mb-16 ml-0 lg:ml-4"
          >
            <h1
              className={`glow mb-3 text-gray-100 mx-auto
                lg:mx-0 text-4xl lg:text-5xl 
              `}
            >
              OVERVIEW
            </h1>
            <p className="mb-3 font-sora mt-6 lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-gray-300">
              GameUp allows any centralized games' users to swiftly convert
              their in-game rewards into $GMU tokens. Those tokens can be used
              to exchange rewards with other users, purchase in-game items from
              other games, mint NFT of your unique rewards & Stake.
            </p>
            <p className="mb-3 lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-gray-300">
              GameUp will empower already established games to come on
              blockchain directly through our API and rewards system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Overview;
