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
import Register from "./components/Register";
const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/app" component={App} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default Main;
