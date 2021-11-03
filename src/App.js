import "./App.css";
import { NavBar, Landing, Features, Overview } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Overview />
      <Features />
    </div>
  );
}

export default App;
