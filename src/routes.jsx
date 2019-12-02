import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {HomePage, HeroPage} from './layouts'

export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/heroes">Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/heroes" component={HeroPage}>
          </Route>
          <Route exact path="/" component={HomePage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}