import React, { forwardRef } from "react";
import Mascot from "../Mascot/Mascot";
import "./Overview.css";

const Overview = forwardRef((_, ref) => {
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
          <div
            style={{
              height: window.innerWidth > 480 ? 320 : 180,
              maxWidth: 400,
            }}
          >
            <Mascot />
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
              <A b>Techotsav</A> is a state level project competition for
              undergraduate engineering students organized by{" "}
              <A>The Computer Department of DMCE </A> & <A>GDSC-DMCE</A>.{" "}
              <br />
              We believe every engineer has a story to tell! <br />
              This competition will allow students to consolidate their
              <A> knowledge</A> and <A>professional skills</A> as well as
              practice <A>soft skills </A>
              such as communication, presentation, teamwork and problem-solving
              while reinforcing their engineering knowledge hence prepare them
              for industry readiness.
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
