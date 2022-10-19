import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animateScroll } from "react-scroll";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import {
  NavBar,
  Landing,
  Overview,
  Benefits,
  Events,
  Team,
  Footer,
  Splash,
  FAQ,
  Roadmap,
} from "./components";
import Certificate from "./components/Certificate/Certificate";
import ContactUs from "./components/ContactUs/ContactUs";
import VerifyCertificate from "./components/Certificate/VerifyCertificate";

const options = {
  rootMargin: "-90px 0px 0px 0px",
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/verify" element={<VerifyCertificate />}></Route>
          <Route path="/" element={<MainApp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

const MainApp = () => {
  const location = useLocation();
  const [landingRef, landingInView] = useInView(options);
  const [overviewRef, overviewInView] = useInView(options);
  const [benefitsRef, featuresInView] = useInView(options);
  const [prizesRef, prizesInView] = useInView(options);
  const [roadmapRef, roadmapInView] = useInView(options);
  const [certificateRef, certificateInView] = useInView(options);
  const [teamRef, teamInView] = useInView(options);
  const [faqRef, faqInView] = useInView(options);
  const [contactUsRef, contactUsInView] = useInView(options);

  let inView = "landing";

  if (landingInView) {
    inView = "landing";
  } else if (overviewInView) {
    inView = "overview";
  } else if (featuresInView) {
    inView = "features";
  } else if (prizesInView) {
    inView = "prizes";
  } else if (roadmapInView) {
    inView = "roadmap";
  } else if (certificateInView) {
    inView = "certificate";
  } else if (teamInView) {
    inView = "team";
  } else if (faqInView) {
    inView = "faq";
  } else if (contactUsInView) {
    inView = "contactUs";
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

  return location.pathname === "/" ? (
    <>
      <NavBar inView={inView} fixNavbar={offset >= 60} />
      {/* <Splash /> */}
      <Landing ref={landingRef} fixNavbar={offset >= 60} />
      <Overview ref={overviewRef} location={location.pathname} />
      <div id="benefits-prizes">
        {/* <Benefits ref={benefitsRef} /> */}
        {/* <Events ref={prizesRef} /> */}
      </div>
      <Roadmap ref={roadmapRef} />
      {/* <Certificate ref={certificateRef} /> */}
      <Team ref={teamRef} />
      <ContactUs ref={contactUsRef} />
      {/* <FAQ ref={faqRef} /> */}
      <Footer />
      <div
        className={
          `cursor-pointer
fixed shadow-2xl rounded-full
px-4 py-4 flex items-center justify-items-center 
bottom-4 right-4 bg-primaryDark border-accent
md:bottom-8 md:right-8 border-2
transition-all duration-200 ease-in-out
` + (offset < 200 ? " opacity-0" : " opacity-100")
        }
        onClick={() => {
          animateScroll.scrollToTop({
            smooth: true,
            duration: offset < 1500 ? 250 : offset < 3000 ? 500 : 750,
          });
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-lg text-accent" />
      </div>
    </>
  ) : (
    <></>
  );
};
export default App;
