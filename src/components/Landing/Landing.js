// import { faDiscord } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";
import "./Landing.css";

const Landing = forwardRef(({ fixNavbar }, ref) => {
  return (
    <section ref={ref} id="landing-container">
      <div className="px-2 mt-10">
        <div className="flex flex-wrap justify-center flex-row items-center justify-items-center content-center">
          <div className="flex flex-col items-center mb-4 sm:mb-16 text-left ">
            {/* <span className="mb-3 text-2xl text-accent font-bold tracking-widest">
              1-2nd April
            </span> */}
            <div
              data-aos="fade-up"
              data-aos-delay="5300"
              style={{
                textShadow:
                  "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
                fontWeight: 600,
              }}
              className="mt-16 font-sora text-offWhite text-base uppercase text-center"
            >
              GDSC-DMCE Presents
              {/* Unleash the speaker within you! */}
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="5000"
              style={{
                // glow text shadow
                textShadow:
                  "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
                lineHeight: "105px",
              }}
              className="mb-3  font-titleBold text-offWhite text-3xl sm:text-6xl lg:text-6xl"
            >
              Techotsav '22
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="5300"
              style={{
                textShadow:
                  "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
                fontWeight: 600,
              }}
              className="mb-3 font-sora text-offWhite text-base uppercase text-center"
            >
              Show off your project in front of professionals!
              {/* Unleash the speaker within you! */}
            </div>
            {/* <div className="mt-3 max-w-8xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button
                  className={`flex items-center cursor-pointer
                    px-8 py-3 text-lg font-medium
                    text-center text-white transition
                    duration-500 ease-in-out transform
                    rounded-sm hover:bg-blue-500
                    focus:outline-none focus:ring-2
                    focus:ring-offset-2 bg-accent`}
                >
                  <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                  Join Discord
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div id="landing-bg">
        {/* <video
              autoPlay
              muted
              className="bg-cover"
              style={{ height: "100vh" }}
              loop
            >
              <source src="/assets/hero-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
      </div>
      <div className="flex justify-center">
        <a
          href="https://drive.google.com/file/d/1S9FEx9zOInQ4c4flReuHNqc1tYvwW81I/preview"
          target={`_blank`}
          style={{
            textShadow:
              "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
            fontWeight: 600,
          }}
          class="bg-purple-500 hover:bg-purple-400 border-b-4 border-purple-700 hover:border-purple-500 text-xl text-gray-50 font-titleBold text-center py-4 px-14 rounded mt-5"
        >
          REGISTER
        </a>
      </div>

      <img
        data-aos="fade-up"
        data-aos-offset="-100"
        src="/assets/circle-mountain.png"
        id="bg-circle"
        style={{
          // backgroundColor: "rgba(200, 200, 200, 0.93)",
          // clipPath: "ellipse(60px 40px at 75px 30px);",
          zIndex: -2,
          width: "66vmin",
          height: "auto",
          marginBottom: "0px",
          transitionDelay: "5.7s",
        }}
        className="absolute bottom-0 -mb10 mx-auto left-0 right-0 "
        alt="adwwd"
      ></img>
      <div id="mountain" className="bottom-0 absolute" style={{ zIndex: -1 }}>
        {/* <img
          src="/assets/mountain.png"
          style={{ maxHeight: "60vmax", width: "100vw", resize: "none" }}
          alt="background"
        /> */}
      </div>
    </section>
  );
});

export default Landing;
