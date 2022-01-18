import React from "react";
import { Nav, Navbar } from "rsuite";
import { Button } from "rsuite";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import swal from "sweetalert";

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

  const logout = () => {
    var data = "";

    var config = {
      method: "post",
      url: "http://localhost:5000/api/user/logout",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("user", JSON.stringify(response.data));
        swal("Déconnexion réussie", "", "success");
        history.push("/");
      })
      .catch(function (error) {
        swal("Une erreur survenu lors de la déconnexion", "", "error");
      });
  };

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

        <Button
          style={{ margin: 15, marginTop: 10, marginLeft: 30, width: 130 }}
          color="red"
          appearance="primary"
          onClick={logout}
        >
          Se déconnecter
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavCust;
