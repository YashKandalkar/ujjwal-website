import React from "react";
import { FeaturesItem } from "..";
import "./Features.css";

const features = [
  {
    imagePath: "/assets/Tokens.png",
    text: "Use $GMU tokens to purchase in-game items from different games",
  },
  {
    imagePath: "/assets/NFTMarket.png",
    text: "NFT Marketplace to mint your unique rewards & trade",
  },
  {
    imagePath: "/assets/P2P.png",
    text: "P2P Marketplace to exchange rewards with other user",
  },
  {
    imagePath: "/assets/Stacking.png",
    text: "Stake $GMU",
  },
  {
    imagePath: "/assets/SocialNetwork.png",
    text: "Social Network to interact with other users and explore more games",
  },
];

function Features() {
  return (
    <section id="features-container" className="py-16">
      <h1
        className="
        text-gray-100
      text-center
      text-4xl
      font-bold
      leading-none
      tracking-tighter
      text-neutral-600
      md:text-7xl
      lg:text-5xl"
      >
        FEATURES
      </h1>

      <div className="grid max-w-7xl mx-auto gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 px-4 justify-items-center  md:px-24 mt-24">
        {features.map((feature, index) => (
          <FeaturesItem
            key={index}
            imagePath={feature.imagePath}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
