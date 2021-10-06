import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import User from "./Pages/User";
import PageNotFound from "./Pages/PageNotFound";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink exact activeClassName="selected" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="selected" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="selected" to="/project">
            Project
          </NavLink>
          <NavLink activeClassName="selected" to="/username/kopki">
            kopki
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/username/:username" component={User} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
