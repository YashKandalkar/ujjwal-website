import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    image: "/assets/techotsav-win.jpeg",
    text: "Won Techotsav, organised by Google Developer Student Clubs - DMCE",
    imageAlt: "techotsav win",
  },
  {
    image: "/assets/sih-win.jpeg",
    text: "Won SIH 2022",
    imageAlt: "sih winning",
  },
  {
    image: "/assets/project.jpeg",
    text: "Ujjwal Proof of Concept",
    imageAlt: "demo",
  },
];

const Gallery = () => {
  return (
    <section id="gallery-container">
      <div className="py-16 max-w-2xl mx-auto">
        <h1
          data-aos="zoom-in"
          className="text-gray-100 text-center my-10 text-5xl
      lg:text-6xl uppercase glow font-titleBold"
        >
          Gallery
        </h1>
        <Carousel showThumbs={false}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.imageAlt}
                // className="max-h-96 w-auto"
                style={{
                  margin: "0 auto",
                  maxHeight: "500px",
                  height: "auto",
                  width: "auto",
                }}
              />
              <p className="legend">{item.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
