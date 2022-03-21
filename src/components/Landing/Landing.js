// import { faDiscord } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";
import "./Landing.css";

const Landing = forwardRef(({ fixNavbar }, ref) => {
  return (
    <section ref={ref} id="landing-container" className="relative">
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
              className="mt-10 font-sora text-offWhite text-base uppercase text-center"
            >
              GDSC-DMCE Presents
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="5000"
              style={{
                textShadow:
                  "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
                lineHeight: "105px",
              }}
              className="font-titleBold text-offWhite text-3xl sm:text-6xl lg:text-6xl"
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
              Show off your project in front of professionals
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="5300"
              className="text-center mt-4"
            >
              <span className="mb-3 text-center text-4xl text-accent font-bold tracking-widest">
                5<sup>th</sup> - 22<sup>nd</sup> April
              </span>
            </div>
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
      <div
        data-aos="fade-up"
        data-aos-delay="5300"
        className="flex justify-center"
      >
        <a
          href="/"
          style={{
            textShadow:
              "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
            fontWeight: 600,
          }}
          className="bg-purple-500 hover:bg-purple-400 border-b-4 border-purple-700 hover:border-purple-500 text-xl text-gray-50 font-titleBold text-center py-4 px-14 rounded mt-16"
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
          transitionDelay: "2.7s",
        }}
        className="absolute bottom-0 -mb10 mx-auto left-0 right-0 "
        alt="adwwd"
      ></img>
      <div
        id="mountain"
        className="bottom-0 absolute"
        style={{ zIndex: -1 }}
      />
    </section>
  );
});

export default Landing;
