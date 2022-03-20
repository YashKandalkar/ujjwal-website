import { forwardRef } from "react";
// import PartnersItem from "../PartnersItem/PartnersItem";
import "./Partners.css";

// const partners = [
// {
//   imagePath: "/assets/investor-1.png",
// },
// {
//   imagePath: "/assets/investor-2.png",
// },
// {
//   imagePath: "/assets/investor-3.png",
// },
// {
//   imagePath: "/assets/investor-4.png",
// },
// {
//   imagePath: "/assets/investor-5.png",
// },
// {
//   imagePath: "/assets/investor-6.png",
// },
// {
//   imagePath: "/assets/investor-7.png",
// },
// {
//   imagePath: "/assets/investor-8.png",
// },
// {
//   imagePath: "/assets/investor-9.png",
// },
// {
//   imagePath: "/assets/investor-10.png",
// },
// ];

const Partners = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="partners-container" className="py-16">
      <h1
        data-aos="zoom-out"
        className="text-gray-100 text-center my-10 text-5xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        Sponsors
      </h1>

      <div className="flex flex-wrap justify-items-center justify-center flex-row px-4 sm:px-16">
        {/* {partners.map((feature, index) => (
          <PartnersItem key={index} {...feature} />
        ))} */}
        <a
          href="https://drive.google.com/file/d/1S9FEx9zOInQ4c4flReuHNqc1tYvwW81I/preview"
          target={`_blank`}
          className="px-8 py-4 bg-primary text-gray-50 font-sora mt-36 rounded-sm text-2xl"
        >
          View Brochure
        </a>
      </div>
    </section>
  );
});

export default Partners;
