
import './App.css';
import { Nav, Dropdown , Message } from "rsuite";
import Button from "rsuite/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import DataGrid from './components/DataGrid';
import Projets from './components/Projets'
import NavCust from './components/NavCust';

function App() {
  const [active, setActive] = React.useState("employés");

  return (
   <Router>
     <div className='container'>
     <NavCust appearance="tabs" active={active} onSelect={setActive}/>
     <Switch>
       <Route path="/employes" component={DataGrid}/>
       <Route path="/projets" component={Projets}/>
     </Switch>
     </div>
   </Router>
  );
}

export default App;
