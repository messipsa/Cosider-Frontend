import React from "react";
import { Panel, FlexboxGrid, Input, Button, Loader } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import axios from "axios";
import { useLocation } from "react-router-dom";
import NavCust from "./NavCust";

const styles = {
  marginTop: 5,
  marginBottom: 5,
};

const AddProject = () => {
  const [active, setActive] = React.useState("projets");

  const [directeur, setDirecteur] = React.useState("");
  const [lieu, setLieu] = React.useState("");
  const [entite, setEntite] = React.useState("");
  const location = useLocation();

  const addProject = () => {
    var data = JSON.stringify({
      entite: entite,
      directeur: directeur,
      lieu: lieu,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/api/projets/ajouter",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Projet ajouté avec succès");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        alert("Echec de l'ajout du projet");
      });
  };

  return (
    <>
      <NavCust appearance="tabs" active={active} onSelect={setActive} />

      <Panel header="Information projet" bordered style={{ marginTop: 20 }}>
        <FlexboxGrid justify="space-between" style={{ marginTop: 20 }}>
          <label>Entite:</label>
          <Input
            style={styles}
            value={entite}
            onChange={(newValue) => {
              setEntite(newValue);
            }}
          />
        </FlexboxGrid>

        <FlexboxGrid justify="space-between" style={{ marginTop: 20 }}>
          <label>Lieu:</label>
          <Input
            style={styles}
            value={lieu}
            onChange={(newValue) => {
              setLieu(newValue);
            }}
          />
        </FlexboxGrid>

        <FlexboxGrid justify="space-between" style={{ marginTop: 20 }}>
          <label>Directeur:</label>
          <Input
            style={styles}
            value={directeur}
            onChange={(newValue) => {
              setDirecteur(newValue);
            }}
          />
        </FlexboxGrid>

        <FlexboxGrid justify="end">
          <FlexboxGridItem>
            <Button
              style={{ marginRight: 10, marginTop: 20, width: 140 }}
              appearance="primary"
              onClick={addProject}
            >
              <p>Ajouter</p>
            </Button>
          </FlexboxGridItem>
        </FlexboxGrid>
      </Panel>
    </>
  );
};

export default AddProject;
