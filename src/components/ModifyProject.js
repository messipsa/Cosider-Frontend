import React from "react";
import { Panel, FlexboxGrid, Input, Button, Loader } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import axios from "axios";
import { useLocation } from "react-router-dom";
import NavCust from "./NavCust.js";

const styles = {
  marginTop: 5,
  marginBottom: 5,
};

const ModifyProject = () => {
  const [active, setActive] = React.useState("projets");
  const [isReadOnly, setIsReadOnly] = React.useState(true);
  const [loadingModify, setLoadingModify] = React.useState(false);
  const [projet, setProjet] = React.useState(
    JSON.parse(localStorage.getItem("project"))
  );

  const [directeur, setDirecteur] = React.useState(projet.directeur);
  const [lieu, setLieu] = React.useState(projet.lieu);
  const location = useLocation();

  const modifyProject = () => {
    setIsReadOnly(false);
  };

  const saveModification = () => {
    var data = JSON.stringify({
      entite: projet.entite,
      directeur: directeur,
      lieu: lieu,
    });

    var config = {
      method: "put",
      url: `http://localhost:5000/api/projets/modifier/${projet._id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setIsReadOnly(true);
        console.log(JSON.stringify(response.data));
        localStorage.setItem("projectId", projet._id);
        localStorage.setItem("project", JSON.stringify(response.data));
        alert("Infos projet modifiés avec succès");
        window.location.reload();
      })
      .catch(function (error) {
        setIsReadOnly(true);
        console.log(error);
        alert("Echec de la modification d'infos projet");
      });
  };

  return (
    <>
      <NavCust appearance="tabs" active={active} onSelect={setActive} />
      <Panel header="Information projet" bordered style={{ marginTop: 20 }}>
        <FlexboxGrid justify="space-between" style={{ marginTop: 20 }}>
          <label>Entite:</label>
          <Input readOnly style={styles} value={projet.entite} />
        </FlexboxGrid>

        <FlexboxGrid justify="space-between" style={{ marginTop: 20 }}>
          <label>Lieu:</label>
          <Input
            readOnly={isReadOnly}
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
            readOnly={isReadOnly}
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
              style={{ marginRight: 10, marginTop: 20, width: 100 }}
              appearance="primary"
              onClick={isReadOnly ? modifyProject : saveModification}
            >
              {isReadOnly ? (
                <p>Modifier</p>
              ) : loadingModify ? (
                <Loader />
              ) : (
                <p>Enregistrer</p>
              )}
            </Button>
          </FlexboxGridItem>
        </FlexboxGrid>
      </Panel>
    </>
  );
};

export default ModifyProject;
