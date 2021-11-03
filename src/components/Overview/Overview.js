import React from "react";
import "./Overview.css";

function Overview() {
  return (
    <section id="overview-container">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="flex flex-wrap items-center mx-auto max-w-7xl">
          <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div class="relative w-full max-w-lg">
                <div
                  class="
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
                  class="
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
                <div class="relative">
                  <img
                    class="object-cover object-center mx-auto rounded-lg"
                    alt="hero"
                    src="/assets/overview.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="
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
              class="
      mb-8
      text-4xl
      font-bold
      leading-none
      tracking-tighter
      text-neutral-600
      md:text-7xl
      lg:text-5xl
    "
            >
              Overview
            </h1>
            <p class="mb-8 text-lg leading-relaxed text-left text-indigo-800">
              GameUp allows any centralized games' users to swiftly convert
              their in-game rewards into $GMU tokens. Those tokens can be used
              to exchange rewards with other users, purchase in-game items from
              other games, mint NFT of your unique rewards & Stake. GameUp will
              empower already established games to come on blockchain directly
              through our API and rewards system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
