import { forwardRef } from "react";
import { Accordion } from "../";

const sampleFaqs = [
  {
    question: "What is Techotsav?",
    answer: (
      <>
        <p>
          Technotsav is a state level project presentation competition
          organised by GDSC -DMCE and Dept of Computer Engineering.
        </p>

        <p>
          It aims at promoting quality projects, an opportunity for forthcoming
          developers to get their projects reviewed by eminent industrial
          experts and resource persons from trending domains.
        </p>
      </>
    ),
  },
  {
    question: "What are the different rounds?",
    answer: (
      <>
        <h3 className="text-lg font-bold">Round 1 - Registration process:</h3>
        <p>
          Here participants will have to submit their project related details
          for e.g. project abstract, presentation, a 2 min video demonstration
          of your project, GitHub/other links if any as per the given format.
          On the basis of these, top 50 teams will be shortlisted.
        </p>
        <h3 className="text-lg font-bold">Round 2 - Online Scrutiny Round:</h3>
        <p>
          In this round the shortlisted teams will have to present their
          projects in front of a panel of judges and out of 50, the top 10
          teams will be shortlisted for the finale.
        </p>
        <h3 className="text-lg font-bold">
          Round 3 - Final Presentation Round:
        </h3>
        <p>
          The Top 10 finalists will have to present their prototypes in front
          of eminent industry experts and they will declare the top 3 projects.
        </p>
      </>
    ),
  },
  {
    question: "Who all can participate?",
    answer:
      "The event is open for under graduate students all over the state of Maharashtra!",
  },
  {
    question: "What is the team size limit?",
    answer:
      "The event is open for under graduate students all over the state of Maharashtra!",
  },
  {
    question: "Who all can participate?",
    answer:
      "The event is open for under graduate students all over the state of Maharashtra!",
  },
];

const FAQ = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="faq-container" className="py-16">
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
});

export default FAQ;
