import React from "react";
// import { Link } from "react-scroll";
import "./Landing.css";

function Landing() {
  return (
    <section id="landing-container">
      <div className="px-2 py-12 pt-12 md:pt-16 mx-auto max-w-7xl sm:px-6 md:px-4 lg:py-24">
        <div className="flex flex-wrap  lg:justify-around flex-row items-center mx-auto max-w-7xl">
          <div
            data-aos="fade-up"
            className="flex flex-col items-start mb-4 sm:mb-16 text-left ml-4 sm:ml-8 lg:ml-0"
          >
            {/* <span
              className="mb-3 text-3xl lg:text-2xl font-bold tracking-widest  uppercase"
              style={{ color: "rgb(59 76 157)" }}
            >
              GAME UP
            </span> */}
            <h1
              style={{
                fontFamily: "'Heaters', 'Montserrat', sans-serif",
                background:
                  "linear-gradient(to bottom right, #fbbb60 0%, #f66445 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="mb-3  font-bold leading-none text-8xl mr-24  pr-4 sm:text-8xl lg:text-10xl"
            >
              PLAY TO EARN
            </h1>
            <p className="mb-3 text-4xl md:text-3xl lg:text-3xl text-left text-gray-400">
              Use your in-game Rewards <br />
              in a Better way
            </p>
            <div className="mt-3 max-w-8xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                {/* <Link
                  to="overview-container"
                  smooth={true}
                  duration={500}
                  className="items-center cursor-pointer block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  style={{ backgroundColor: "rgb(59 76 157)" }}
                >
                  Explore
                </Link> */}
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="mx-auto lg:mx-0 flex xl:mt-0">
            <img
              className="object-cover object-center mx-auto rounded-lg "
              alt="hero"
              style={{ width: "100%", maxWidth: 750 }}
              src="/assets/landing-hero-new.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
