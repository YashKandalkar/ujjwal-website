import { forwardRef } from "react";
import "./Events.css";

const Events = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="prizes-container" className="py-16">
      <h1
        data-aos="fade-down"
        className="
        text-gray-100 text-center mt-10 text-5xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        Events
      </h1>
      <div
        className={`mt-24 px-4 sm:px-8 md:px-8
          flex flex-wrap gap-9
          justify-center items-center`}
      >
        <a
          href="https://gdsc.community.dev/datta-meghe-college-of-engineering-navi-mumbai/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textShadow:
              "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
            fontWeight: 600,
          }}
          className="bg-purple-500 hover:bg-purple-400 border-b-4 border-purple-700 hover:border-purple-500 text-xl text-gray-50 font-titleBold text-center py-2 px-8 sm:py-4 sm:px-14 rounded mt-16"
        >
          View Events
        </a>
      </div>
    </section>
  );
});

export default Events;
