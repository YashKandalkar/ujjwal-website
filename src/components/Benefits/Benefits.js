import { forwardRef } from "react";
import { FeaturesItem } from "..";
import "./Benefits.css";

const benefits = [
  {
    imagePath: "/assets/money-bag.svg",
    text: (
      <>
        Win exciting <span className="font-bold text-highlight">Prizes</span>{" "}
        with in various contests and workshops
      </>
    ),
  },
  {
    imagePath: "/assets/review.svg",
    text: (
      <>
        Get your projects reviewed by{" "}
        <span className="font-bold text-highlight">industry experts</span>
      </>
    ),
  },
  {
    imagePath: "/assets/SocialNetwork.png",
    text: (
      <>
        <span className="font-bold text-highlight">Network</span> with skilled
        developers from all over the world
      </>
    ),
  },
  {
    imagePath: "/assets/certificate.svg",
    text: (
      <>
        Earn <span className="font-bold text-highlight">Certificates</span> to
        by attending seminars and events
      </>
    ),
  },
  {
    imagePath: "/assets/live-audience.svg",
    text: (
      <>
        <span className="font-bold text-highlight">Hands-on workshops</span> on
        different domains conducted by domain experts
      </>
    ),
  },
];

const Benefits = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="features-container" className="pb-16">
      <h1
        data-aos="fade-down"
        className="
        text-gray-100 text-center text-5xl
        lg:text-6xl uppercase glow font-titleBold
        "
      >
        Benefits
      </h1>

      <div className="flex flex-wrap max-w-7xl mx-auto gap-8 justify-center px-4 justify-items-center md:px-24 mt-24">
        {benefits.map((feature, index) => (
          <FeaturesItem
            key={index}
            imagePath={feature.imagePath}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
});

export default Benefits;
