import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/dev">
            <Dev />
          </Route>
          <Route path="/dev/resume/:type">
            <Resume />
          </Route>
          <Route path="/dev/portfolio/:type">
            <Portfolio />
          </Route>
          <Route path="/theater">
            <Theater />
          </Route>
          <Route path="/theater/resume/:type">
            <Resume />
          </Route>
          <Route path="/theater/portfolio/:type">
            <Portfolio />
          </Route>
          {/* <Route path="/other">
          <OtherProjects />
        </Route> */}
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
