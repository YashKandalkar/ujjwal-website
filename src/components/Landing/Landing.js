import React from "react";
import { Link } from "react-scroll";
import "./Landing.css";

function Landing() {
  return (
    <section id="landing-container">
      <div className="px-4 py-12 pt-12 md:pt-16 mx-auto max-w-7xl sm:px-6 md:px-12 lg:py-24">
        <div className="flex flex-wrap  lg:justify-around flex-row items-center mx-auto max-w-7xl">
          <div
            data-aos="fade-up"
            className="flex flex-col items-start mb-16 text-left ml-4 sm:ml-8 lg:ml-0"
          >
            <span
              className="mb-3 text-3xl lg:text-xl font-bold tracking-widest  uppercase"
              style={{ color: "rgb(59 76 157)" }}
            >
              GAME UP
            </span>
            <h1
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mb-3 text-5xl font-bold leading-none text-gray-50 text-neutral-600 md:text-7xl lg:text-5xl"
            >
              PLAY TO WIN
            </h1>
            <p className="mb-3 text-2xl md:text-3xl lg:text-xl leading-relaxed text-left text-gray-400">
              Play, Invest, Exchange &
              <br />
              Join the Contest with high rewards <br />
              at GameUp!
            </p>
            <div className="mt-3 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <Link
                  to="overview-container"
                  smooth={true}
                  duration={500}
                  className="items-center cursor-pointer block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  style={{ backgroundColor: "rgb(59 76 157)" }}
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="mx-auto lg:mx-0 flex xl:mt-0">
            <img
              className="object-cover object-center mx-auto rounded-lg "
              alt="hero"
              src="/assets/landing-hero-new.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
