import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <section id="landing-container">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="flex flex-wrap items-center mx-auto max-w-7xl">
          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0">
            <span class="mb-3 text-xl font-bold tracking-widest text-blue-900 uppercase">
              NEW CRYPTO GAME
            </span>
            <h1 class="mb-3 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              PLAY TO WIN
            </h1>
            <p class="mb-0 text-xl leading-relaxed text-left text-gray-700">
              Play, Invest, Exchange &
              <br />
              Join the Contest with high rewards <br />
              at GameUp!
            </p>
            <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div class="mt-3 rounded-lg sm:mt-0">
                <button
                  class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  style={{ backgroundColor: "rgb(37, 47, 90)" }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div class="w-full mt-12 lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0">
            <div>
              <div class="relative w-full max-w-lg">
                <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div class="relative">
                  <img
                    class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src="/assets/landing-hero.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
