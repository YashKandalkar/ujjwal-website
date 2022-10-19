import React, { forwardRef } from "react";
import Mascot from "../Mascot/Mascot";
import "./Overview.css";

const Overview = forwardRef(({ location }, ref) => {
  return (
    <section
      ref={ref}
      id="overview-container"
      className="flex bg-primaryDark items-center"
    >
      <div className="px-4 pt-12 w-full sm:px-6 md:px-12 lg:pt-24">
        <div className="flex lg:justify-around flex-col lg:flex-row items-center">
          <h1
            className={`glow mb-3 block lg:hidden mt-5 text-gray-100 mx-auto
                lg:mx-0 text-4xl lg:text-5xl 
              `}
          >
            OVERVIEW
          </h1>
          <div className="relative flex justify-center items-center">
            <iframe
              title="Ujjwal's Overview"
              width={400}
              height={220}
              src="https://drive.google.com/file/d/1t0ZMLtyApco6XSjZpHRP-7UaP5sBXXVG/preview"
            ></iframe>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="
            flex flex-col text-center lg:text-left 
            max-w-2xl sm:max-w-2xl lg:max-w-lg 2xl:max-w-screen-xl items-start 
            lg:mb-16 ml-0 lg:ml-4"
          >
            <h1
              className={`glow mb-3 hidden lg:block text-gray-100 mx-auto
                lg:mx-0 text-4xl lg:text-5xl 
              `}
            >
              OVERVIEW
            </h1>
            <p className="mb-3 font-sora mt-6 lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-gray-300">
              <A>Ujjwal</A> - is an Automated Street Light <br />
              <A>Fault Detection</A> system, especially built for rural areas.
            </p>
            {/* <p className="mb-3 lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-gray-300">
              GameUp will empower already established games to come on
              blockchain directly through our API and rewards system.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
});

const A = ({ children, b }) => (
  <span className={`text-highlight ${b && "font-bold"}`}>{children}</span>
);

export default Overview;
