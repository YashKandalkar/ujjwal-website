import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animateScroll } from "react-scroll";
import "./App.css";
import {
  NavBar,
  Landing,
  Features,
  Overview,
  Tokenomics,
  Roadmap,
  Team,
  Footer,
  // eslint-disable-next-line
  Partners,
} from "./components";

const options = {
  rootMargin: "-90px 0px 0px 0px",
};

function App() {
  const [landingRef, landingInView] = useInView(options);
  const [overviewRef, overviewInView] = useInView(options);
  const [featuresRef, featuresInView] = useInView(options);
  const [tokenomicsRef, tokenomicsInView] = useInView(options);
  const [roadmapRef, roadmapInView] = useInView(options);
  // eslint-disable-next-line
  const [partnersRef, partnersInView] = useInView(options);
  const [teamRef, teamInView] = useInView(options);

  let inView = "landing";

  if (landingInView) {
    inView = "landing";
  } else if (overviewInView) {
    inView = "overview";
  } else if (featuresInView) {
    inView = "features";
  } else if (tokenomicsInView) {
    inView = "tokenomics";
  } else if (roadmapInView) {
    inView = "roadmap";
  } else if (partnersInView) {
    inView = "partners";
  } else if (teamInView) {
    inView = "team";
  }

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className="App">
      <NavBar inView={inView} fixNavbar={offset >= 60} />
      <Landing ref={landingRef} fixNavbar={offset >= 60} />
      <Overview ref={overviewRef} />
      <Features ref={featuresRef} />
      <Tokenomics ref={tokenomicsRef} />
      <Roadmap ref={roadmapRef} />
      {/* <Partners ref={partnersRef} /> */}
      <Team ref={teamRef} />
      <Footer />
      <div
        className={
          `cursor-pointer
      fixed shadow-2xl rounded-full
      px-4 py-4 flex items-center justify-items-center 
      bottom-4 right-4 
      md:bottom-8 md:right-8
      transition-all duration-200 ease-in-out
      ` + (offset < 200 ? " opacity-0" : " opacity-100")
        }
        style={{ backgroundColor: "#262F5A", border: "2px solid #273b71" }}
        onClick={() => {
          animateScroll.scrollToTop({
            smooth: true,
            duration: offset < 1500 ? 250 : offset < 3000 ? 500 : 750,
          });
        }}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-lg"
          style={{ color: "rgb(251, 187, 96)" }}
        />
      </div>
    </div>
  );
}

export default App;
