import { forwardRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Certificate = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="certificate-container" className="py-16">
      <h1
        data-aos="fade-down"
        className="
        text-gray-100 text-center mt-10 text-5xl
        lg:text-5xl uppercase glow font-titleBold"
      >
        Verify
        <br />
        Certificate
      </h1>
      <div
        className={`mt-24 px-4 sm:px-8 md:px-8
          flex flex-wrap gap-9
          justify-center items-center`}
      >
        {/* <PrizesItem
          key={"prize-0"}
          imagePath="/assets/trophy-1.svg"
          text="1st Prize"
          prize={prizesTexts[0]}
        />
        <PrizesItem
          key={"prize-1"}
          imagePath="/assets/trophy-2.svg"
          text="2nd Prize"
          prize={prizesTexts[1]}
        />
        <PrizesItem
          key={"prize-2"}
          imagePath="/assets/trophy-3.svg"
          text="3rd Prize"
          prize={prizesTexts[2]}
        /> */}
        <Link
          to="/verify"
          style={{
            textShadow:
              "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
            fontWeight: 600,
          }}
          className="bg-purple-500 hover:bg-purple-400 border-b-4 border-purple-700 hover:border-purple-500 text-xl text-gray-50 font-titleBold text-center py-2 px-8 sm:py-4 sm:px-14 rounded mt-16"
        >
          Verify Certificate
        </Link>
      </div>
      {/* <div className="text-gray-300 text-center mt-10">
        All the winning team members will get a certificate!
      </div> */}
    </section>
  );
});

export default Certificate;
