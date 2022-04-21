import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Contact />
    </div>
  );
}

export default App;
