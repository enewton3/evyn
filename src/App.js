import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Dev from "./screens/Dev/Dev";
import Theater from "./screens/Theater/Theater";
import Resume from "./screens/Resume/Resume";
import Portfolio from "./screens/Portfolio/Portfolio";
import Contact from "./screens/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import OtherProjects from "./screens/OtherProjects/OtherProjects";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/dev/resume/:type" element={<Resume />} />
          <Route path="/dev/portfolio/:type" element={<Portfolio />} />
          <Route path="/theater" element={<Theater />} />
          <Route path="/theater/resume/:type" element={<Resume />} />
          <Route path="/theater/portfolio/:type" element={<Portfolio />} />
          {/* <Route path="/other" element={<OtherProjects />} /> */}
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
