import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { Button } from "rsuite";
import Login from "./components/Login";
import App from "./App";
import NavCust from "./components/NavCust";
import Register from "./components/Register";
import DataGrid from "./components/DataGrid";
import Projets from "./components/Projets";
const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={App} />
        <Route path="/register" component={Register} />
        <Route path="/employes" component={DataGrid} />
        <Route path="/projets" component={Projets} />
      </Switch>
    </Router>
  );
};

export default Main;
