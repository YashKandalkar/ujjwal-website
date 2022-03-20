import { useEffect } from "react";
import "./Splash.css";

const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector("#quote-container").style.display = "none";
      document.body.style.overflowY = "auto";
      document.querySelector("html").style.overflowY = "auto";
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="quote-container"
      style={{
        fontFamily: "'Yuji Syuku', serif",
        zIndex: 999,
        background: `linear-gradient(
            180deg,
            #120015 5%,
            rgb(138, 66, 255) 65.6%,
            #ff9def 115.93%
        )`,
      }}
      className="top-0 left-0 fixed w-full h-full z-50 flex items-center text-sm sm:text-base md:text-lg justify-center flex-col"
    >
      {/* <img
        src={"/dmce-logo.png"}
        alt="logo"
        className="h-auto mb-12"
        style={{ width: "80vmin" }}
      /> */}
      <img
        src={"/gdsc-dmce-logo.png"}
        alt="logo"
        className="h-auto"
        style={{ width: "80vmin" }}
      />
    </div>
  );
};

export default Splash;
