import { forwardRef } from "react";
import { Accordion } from "../";

const sampleFaqs = [
  {
    question: "What is GDSC?",
    answer: (
      <>
        <p>
          Google Developer Student Clubs - DMCE is an international community
          backed by Google for groups of students interested in Google
          developer techonologies. It creates a bridge for students between
          theory and practice.
        </p>
      </>
    ),
  },
  {
    question: "What are the different activities under GDSC?",
    answer: (
      <>
        <p>
          Students are introduced to two real-life problems that can be solved
          by using the engineering design process. DSC provides them with
          platform which helps them in developing problem solving skills as
          well as communication skills as they begin to ask questions, interact
          with different Techbrains and exchange ideas.
        </p>
      </>
    ),
  },
  {
    question: "What is DSC summit?",
    answer: (
      <p>
        DSC leads are invited to attend a summit that are truly transformative
        in helping educators integrating Google technology into their daily
        lives thus helps in building their application skills, technological
        skills and leadership skills.
      </p>
    ),
  },
  {
    question: "How does GDSC help to grow the local community?",
    answer: (
      <p>
        DSC leads are connected to the members of Google and Google developer
        communities ( Google developer groups, Google developer experts etc.)
        and other programs including women Tec makers scholars, alumina of the
        former google student ambassador program, interns, facilators of
        applied CS programs etc. collaborations are encouraged to support each
        other.
      </p>
    ),
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
