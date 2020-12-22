import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Dev from "./screens/Dev/Dev";
import Theater from "./screens/Theater/Theater";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="about">
          <About />
        </Route>
        <Route>
          <Dev />
        </Route>
        <Route>
          <Theater />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
