import React from "react";
import { Nav, Navbar } from "rsuite";
import { Button } from "rsuite";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const styles = {
  margin: 10,
};

const BrandStyle = {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 6,
};

const NavCust = ({ active, onSelect, props }) => {
  const history = useHistory();

  return (
    <Navbar>
      <Navbar.Brand style={BrandStyle}>Cosider Travaux Publics</Navbar.Brand>
      <Nav
        pullRight
        {...props}
        activeKey={active}
        onSelect={onSelect}
        style={styles}
      >
        <Nav.Item
          eventKey="home"
          onClick={() => {
            history.push("/home");
          }}
        >
          Acceuil
        </Nav.Item>
        <Nav.Item
          eventKey="employes"
          onClick={() => {
            history.push("/employes");
          }}
        >
          Employés
        </Nav.Item>
        <Nav.Item
          eventKey="projets"
          onClick={() => {
            history.push("/projets");
          }}
        >
          Projets
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavCust;
