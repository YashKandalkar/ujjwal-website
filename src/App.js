import "./App.css";
import {
  NavBar,
  Landing,
  Features,
  Overview,
  Tokenomics,
  Roadmap,
} from "./components";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function App() {
  AOS.init();
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Overview />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
