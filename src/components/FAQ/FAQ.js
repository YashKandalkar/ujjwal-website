import { Accordion } from "../";

const sampleFaqs = [
  {
    question: "What is Techओत्सव?",
    answer:
      "Dev Expo is a one-of-a-kind event where you can showcase your project to the world. It is a platform for developers to showcase their projects and get feedback from the world. It is a platform for developers to showcase their projects and get feedback from the world.",
  },
  {
    question: "How can I participate?",
    answer:
      "Dev Expo is a one-of-a-kind event where you can showcase your project to the world. It is a platform for developers to showcase their projects and get feedback from the world. It is a platform for developers to showcase their projects and get feedback from the world.",
  },
  {
    question: "How many rounds are in total?",
    answer:
      "Dev Expo is a one-of-a-kind event where you can showcase your project to the world. It is a platform for developers to showcase their projects and get feedback from the world. It is a platform for developers to showcase their projects and get feedback from the world.",
  },
];

const FAQ = () => {
  return (
    <section id="team-container" className="py-16">
      <h1
        data-aos="zoom-out"
        className="text-gray-100 text-left px-4 sm:px-16 my-10 text-5xl
    lg:text-6xl uppercase glow font-titleBold"
      >
        FAQs
      </h1>
      <div className="flex flex-wrap justify-items-center justify-center flex-row px-4 sm:px-16">
        {sampleFaqs.map((faq, index) => (
          <Accordion key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
