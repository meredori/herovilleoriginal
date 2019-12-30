import React from "react";
import { Provider } from "react-redux"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import {HomePage, HeroPage, SettingsPage, GlobalElements} from './layouts'
import {store,persistor} from './stores/store'

export default function Routes() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/heroes">Heroes</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
              </ul>
            </nav>
            <GlobalElements></GlobalElements>
            <Switch>
              <Route path="/heroes" component={HeroPage}>
              </Route>
              <Route path="/settings" component={SettingsPage}>
              </Route>
              <Route exact path="/" component={HomePage}>
              </Route>
            </Switch>
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}