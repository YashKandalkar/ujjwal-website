import { forwardRef } from "react";
import { FeaturesItem } from "..";
import "./Benefits.css";

const benefits = [
  {
    imagePath: "/assets/money-bag.svg",
    text: (
      <>
        <span className="font-bold text-highlight">Cash prize</span> to the
        winners along with consolation prizes and goodies
      </>
    ),
  },
  {
    imagePath: "/assets/review.svg",
    text: (
      <>
        Get your project{" "}
        <span className="font-bold text-highlight">reviewed</span> by experts
      </>
    ),
  },
  {
    imagePath: "/assets/SocialNetwork.png",
    text: (
      <>
        <span className="font-bold text-highlight">Network</span> with skilled
        teams of different domains from all over the state
      </>
    ),
  },
  {
    imagePath: "/assets/certificate.svg",
    text: (
      <>
        <span className="font-bold text-highlight">Certificates</span> to all
        the final teams
      </>
    ),
  },
  {
    imagePath: "/assets/live-audience.svg",
    text: (
      <>
        Present your project in front of{" "}
        <span className="font-bold text-highlight">live audience</span>
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
