import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
