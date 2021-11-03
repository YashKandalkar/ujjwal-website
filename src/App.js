import "./App.css";
import {
  NavBar,
  Landing,
  Features,
  Overview,
  Tokenomics,
  Roadmap,
} from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Overview />
      <Features />
      <Tokenomics />
      <Roadmap />
    </div>
  );
}

export default App;
