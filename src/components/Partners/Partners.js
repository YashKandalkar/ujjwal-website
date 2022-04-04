import { forwardRef } from "react";
import PartnersItem from "../PartnersItem/PartnersItem";
import "./Partners.css";

const partners = [
  {
    imagePath: "/assets/Ugam.png",
    name: "Ugam",
    type: "Title Sponsor",
    url: "https://www.ugamsolutions.com/",
  },
  {
    imagePath: "/assets/StreamYard.png",
    name: "StreamYard",
    type: "Streaming Partner",
    url: "https://www.streamyard.com/",
  },
  {
    imagePath: "/assets/Raahee.svg",
    name: "Raahee",
    type: "Well Being Partner",
    url: "https://raahee.in/",
  },
  {
    imagePath: "/assets/InterviewCake.svg",
    name: "InterviewCake",
    type: "Interview Partner",
    url: "https://www.interviewcake.com/",
  },
  {
    imagePath: "/assets/GenXYZ.svg",
    name: "Gen.xyz",
    type: "Domain Partner",
    url: "https://www.gen.xyz/",
  },
  {
    imagePath: "/assets/Taskade.png",
    name: "Taskade",
    type: "Management Partner",
    url: "https://www.taskade.com/",
  },
];

const Partners = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="partners-container" className="py-16">
      <h1
        data-aos="zoom-out"
        className="text-gray-100 text-center my-10 text-4xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        Sponsors
      </h1>

      <div className="flex flex-wrap justify-items-center gap-y-10 items-center justify-center flex-col px-4 sm:px-16">
        {/* {partners.map((partnerItem, index) => (
          <PartnersItem key={index} {...partnerItem} />
        ))} */}
        <PartnersItem {...partners[0]} width={300} />
        <PartnersItem {...partners[1]} width={170} />
        <PartnersItem {...partners[2]} width={140} />
        <PartnersItem {...partners[3]} width={290} />
        <PartnersItem {...partners[4]} width={160} />
        <PartnersItem {...partners[5]} width={160} />
        {/* <a
          href="https://drive.google.com/file/d/1R_tpVIsoWs1v6KPWmH6b1ANiQ-KF3hcc/preview"
          target={`_blank`}
          className="px-8 py-4 bg-primary text-gray-50 font-sora mt-36 rounded-sm text-base sm:text-2xl"
        >
          View Brochure
        </a> */}
      </div>
    </section>
  );
});

export default Partners;
