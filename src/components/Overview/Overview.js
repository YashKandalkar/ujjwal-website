import React from "react";
import "./Overview.css";
// TODO: justify around
function Overview() {
  return (
    <section id="overview-container" className="flex items-center">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12  lg:py-24">
        <div className="flex lg:justify-around flex-col-reverse lg:flex-row items-center mx-auto max-w-7xl">
          <div className="mx-auto max-w-lg lg:mx-0 flex xl:mt-0">
            <img
              className="object-cover z-0 object-center rounded-lg"
              alt="hero"
              src="/assets/overview.png"
            />
          </div>
          <div className="flex flex-col max-w-md items-start mb-16 text-left">
            <h1 className="mb-3 text-gray-100 text-5xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              Overview
            </h1>
            <p className="mb-3 text-sm md:text-xl leading-relaxed text-left text-gray-400">
              GameUp allows any centralized games' users to swiftly convert
              their in-game rewards into $GMU tokens. Those tokens can be used
              to exchange rewards with other users, purchase in-game items from
              other games, mint NFT of your unique rewards & Stake. GameUp will
              empower already established games to come on blockchain directly
              through our API and rewards system.
            </p>
          </div>
          {/* <div
            className="
            z-10
    flex flex-col
    items-start
    mt-12
    mb-16
    text-left
    lg:flex-grow lg:w-1/2 lg:pl-6
    xl:pl-24
    md:mb-0
    xl:mt-0
  "
          >
            <h1
              className="
      mb-8
      text-4xl
      font-bold
      leading-none
      tracking-tighter
      text-neutral-600
      md:text-5xl
    "
            >
              Overview
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-left text-gray-700">
              GameUp allows any centralized games' users to swiftly convert
              their in-game rewards into $GMU tokens. Those tokens can be used
              to exchange rewards with other users, purchase in-game items from
              other games, mint NFT of your unique rewards & Stake. GameUp will
              empower already established games to come on blockchain directly
              through our API and rewards system.
            </p>
          </div> */}
        </div>
      </div>
      {/* <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div
                  className="
          absolute
          top-0
          rounded-full
          bg-violet-300
          -left-4
          w-72
          h-72
          mix-blend-multiply
          filter
          blur-xl
          opacity-70
          animate-blob
        "
                ></div>
                <div
                  className="
          absolute
          rounded-full
          bg-fuchsia-300
          -bottom-24
          right-20
          w-72
          h-72
          mix-blend-multiply
          filter
          blur-xl
          opacity-70
          animate-blob
          animation-delay-4000
        "
                ></div>
                <div className="relative">
                  <img
                    className="object-cover object-center mx-auto rounded-lg"
                    alt="hero"
                    src="/assets/overview.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="
    flex flex-col
    items-start
    mt-12
    mb-16
    text-left
    lg:flex-grow lg:w-1/2 lg:pl-6
    xl:pl-24
    md:mb-0
    xl:mt-0
  "
          >
            <h1
              className="
      mb-8
      text-4xl
      font-bold
      leading-none
      tracking-tighter
      text-neutral-600
      md:text-5xl
    "
            >
              Overview
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-left text-gray-700">
              GameUp allows any centralized games' users to swiftly convert
              their in-game rewards into $GMU tokens. Those tokens can be used
              to exchange rewards with other users, purchase in-game items from
              other games, mint NFT of your unique rewards & Stake. GameUp will
              empower already established games to come on blockchain directly
              through our API and rewards system.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Overview;
