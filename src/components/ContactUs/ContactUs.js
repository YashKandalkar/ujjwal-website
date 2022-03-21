import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const ContactUs = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="contact-us-container"
      className="py-16 min-h-screen"
    >
      <h1
        data-aos="zoom-out"
        className="text-gray-100 text-center px-4 sm:px-16 my-10 text-3xl
    sm:text-3xl lg:text-6xl uppercase glow font-titleBold"
      >
        Contact Us
      </h1>
      <p className="font-sora px-4 sm:px-16 mb-28 text-base sm:text-lg text-center text-gray-50">
        Contact us if you have any queries regarding the event!
      </p>
      <div className="flex text-base sm:text-xl gap-5 flex-col px-4 sm:px-16">
        <div className="mx-auto">
          <div>
            <h2 className="text-sm mb-2 text-accent">
              GDSC DMCE Faculty Advisor
            </h2>
            <h2 className="text-gray-50 font-sora">
              Dr. Chhaya Pawar:{" "}
              <FontAwesomeIcon icon={faPhone} className={"mr-2 ml-4"} />
              9930998699,
              <FontAwesomeIcon
                icon={faEnvelope}
                // color={"rgb(96, 165, 250)"}
                className={"mr-2 ml-4"}
              />
              <a
                href="mailto:chhaya.pawar@gmail.com"
                className="text-highlight"
              >
                chhaya.pawar@dmce.ac.in
              </a>
            </h2>
          </div>
          <div className="mt-8">
            <h2 className="text-sm mb-2 text-accent">GDSC DMCE Lead</h2>
            <h2 className="text-gray-50 font-sora">
              Aditya Deshpande:{" "}
              <FontAwesomeIcon icon={faPhone} className={"mr-2 ml-4"} />
              7506188799,
              <FontAwesomeIcon
                icon={faEnvelope}
                // color={"rgb(96, 165, 250)"}
                className={"mr-2 ml-4"}
              />
              <a
                href="mailto:aditya.deshpande@gmail.com"
                className="text-highlight"
              >
                aditya15299@gmail.com
              </a>
            </h2>
          </div>
          <div className="mt-8">
            <h2 className="text-sm mb-2 text-accent">Collaboration Lead</h2>
            <h2 className="text-gray-50 font-sora">
              Hashir Khan:{" "}
              <FontAwesomeIcon icon={faPhone} className={"mr-2 ml-4"} />
              8828443231,
              <FontAwesomeIcon
                icon={faEnvelope}
                // color={"rgb(96, 165, 250)"}
                className={"mr-2 ml-4"}
              />
              <a
                href="mailto:aditya.deshpande@gmail.com"
                className="text-highlight"
              >
                khn24202@gmail.com
              </a>
            </h2>
          </div>
          <div className="mt-8">
            <h2 className="text-sm mb-2 text-accent">Social Media Lead</h2>
            <h2 className="text-gray-50 font-sora">
              Manas Buchade:{" "}
              <FontAwesomeIcon icon={faPhone} className={"mr-2 ml-4"} />
              8097081182,
              <FontAwesomeIcon
                icon={faEnvelope}
                // color={"rgb(96, 165, 250)"}
                className={"mr-2 ml-4"}
              />
              <a
                href="mailto:aditya.deshpande@gmail.com"
                className="text-highlight"
              >
                manas.buchade@gmail.com
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactUs;
