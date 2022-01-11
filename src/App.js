import "./App.css";
import { Nav, Dropdown, Message } from "rsuite";
import Button from "rsuite/Button";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import DataGrid from "./components/DataGrid";
import Projets from "./components/Projets";
import NavCust from "./components/NavCust";
import Login from "./components/Login";

function App() {
  const [active, setActive] = React.useState("home");

  return <NavCust appearance="tabs" active={active} onSelect={setActive} />;
}

export default App;
