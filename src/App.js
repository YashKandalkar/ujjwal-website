import "./App.css";
import { NavBar, Landing } from "./components";
import Overview from "./components/Overview/Overview";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Overview />
    </div>
  );
}

export default App;
