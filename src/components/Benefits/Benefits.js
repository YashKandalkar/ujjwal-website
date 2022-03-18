import { forwardRef } from "react";
import { FeaturesItem } from "..";
import "./Benefits.css";

const benefits = [
  {
    imagePath: "/assets/money-bag.svg",
    text: "Cash prize to the winners along with consolation prizes and goodies",
  },
  {
    imagePath: "/assets/review.svg",
    text: "Get your project reviewed by experts",
  },
  {
    imagePath: "/assets/SocialNetwork.png",
    text: "Community building",
  },
  {
    imagePath: "/assets/certificate.svg",
    text: "Certificates to all the final teams",
  },
  {
    imagePath: "/assets/interaction.svg",
    text: "Interaction with teams all over state",
  },
];

const Benefits = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="features-container" className="py-16">
      <h1
        data-aos="fade-down"
        className="
        text-gray-100 text-center mt-10 text-5xl
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
