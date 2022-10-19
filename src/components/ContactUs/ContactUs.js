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
        Contact us if you have any queries regarding the project!
      </p>
      <div className="flex text-base sm:text-xl gap-5 flex-col px-4 sm:px-16">
        <div className="mx-auto">
          <div>
            <h2 className="text-gray-50 flex flex-col lg:flex-row font-sora">
              Manas Buchade:{" "}
              <span className="flex flex-col sm:flex-row">
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    // color={"rgb(96, 165, 250)"}
                    className={"mr-2 ml-4"}
                  />
                  <a href="manas.buchade@gmail.com" className="text-highlight">
                    manas.buchade@gmail.com
                  </a>
                </span>
              </span>
            </h2>
          </div>
          <div className="mt-8">
            <h2 className="text-gray-50 flex flex-col lg:flex-row font-sora">
              Yash Kandalkar:{" "}
              <span className="flex flex-col sm:flex-row">
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    // color={"rgb(96, 165, 250)"}
                    className={"mr-2 ml-4"}
                  />
                  <a
                    href="mailto:yashsk.yk@gmail.com"
                    className="text-highlight"
                  >
                    yashsk.yk@gmail.com
                  </a>
                </span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactUs;
