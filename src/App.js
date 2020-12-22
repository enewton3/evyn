import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Dev from "./screens/Dev/Dev";
import Theater from "./screens/Theater/Theater";
import Resume from "./screens/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
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
      </Switch>
    </div>
  );
}

export default App;
