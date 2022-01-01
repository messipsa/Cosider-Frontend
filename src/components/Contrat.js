import React from "react";
import axios from "axios";
import { Panel, Input, FlexboxGrid, Button, Message, Loader } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";

const styles = {
  marginTop: 5,
  marginBottom: 5,
};

const Contrat = ({ employee, history }) => {
  console.log(JSON.parse(employee).projet.entite);
  const [lecture, setLecture] = React.useState(true);
  const [attenteModifier, setAttenteModifier] = React.useState(false);
  const [project, setProject] = React.useState(
    JSON.parse(employee).projet.entite
  );
  const [numero, setNumero] = React.useState(
    JSON.parse(employee).contrat.numero
  );
  const [dateDebut, setDateDebut] = React.useState(
    JSON.parse(employee).contrat.date_debut
  );
  const [dateFin, setDateFin] = React.useState(
    JSON.parse(employee).contrat.date_fin
  );
  const [poste, setPoste] = React.useState(
    JSON.parse(employee).contrat.poste_travail
  );
  const [salaire, setSalaire] = React.useState(
    JSON.parse(employee).contrat.salaire
  );
  const [salaireLettres, setSalaireLettres] = React.useState(
    JSON.parse(employee).contrat.salaire_lettres
  );
  const [statut, setStatut] = React.useState(
    JSON.parse(employee).contrat.statut
  );
  const [categorie, setCategorie] = React.useState(
    JSON.parse(employee).contrat.categorie
  );
  const [affectation, setAffectation] = React.useState(
    JSON.parse(employee).contrat.affectation
  );
  const [groupe, setGroupe] = React.useState(
    JSON.parse(employee).contrat.groupe
  );
  const [section, setSection] = React.useState(
    JSON.parse(employee).contrat.section
  );
  const [periode, setPeriode] = React.useState(
    JSON.parse(employee).contrat.periode_essai
  );

  const renouvelerContrat = () => {
    setLecture(false);
  };

  const saveContract = () => {
    setLecture(true);
    var data = JSON.stringify({
      entite: project,
    });

    var config = {
      method: "put",
      url: `https://cosider-backend.herokuapp.com/api/contrats/renouveler/${
        JSON.parse(employee)._id
      }`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(data);
    setAttenteModifier(true);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setAttenteModifier(false);
        alert("c est une plaisir");
      })
      .catch(function (error) {
        console.log(error);
        setAttenteModifier(false);
        alert("ce n'est pas une plaisir");
      });
  };

  return (
    <Panel header="Information employé" bordered style={{ marginTop: 20 }}>
      <FlexboxGrid justify="space-between">
        <FlexboxGridItem colspan={7}>
          <label>Numero:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={numero}
            onChange={(newValue) => {
              setNumero(newValue);
            }}
          />
        </FlexboxGridItem>

        <FlexboxGridItem colspan={7}>
          <label>Projet:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={project}
            onChange={(newValue) => {
              setProject(newValue);
            }}
          />
        </FlexboxGridItem>

        <FlexboxGridItem colspan={7}>
          <label>Poste:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={poste}
            onChange={(newValue) => {
              setPoste(newValue);
            }}
          />
        </FlexboxGridItem>
      </FlexboxGrid>

      <FlexboxGrid justify="space-between" style={{ marginTop: 40 }}>
        <FlexboxGridItem colspan={10}>
          <label>Affectation:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={affectation}
            onChange={(newValue) => {
              setAffectation(newValue);
            }}
          />
        </FlexboxGridItem>

        <FlexboxGridItem colspan={10}>
          <label>Categorie:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={categorie}
            onChange={(newValue) => {
              setCategorie(newValue);
            }}
          />
        </FlexboxGridItem>
      </FlexboxGrid>

      <FlexboxGrid justify="space-between" style={{ marginTop: 40 }}>
        <FlexboxGridItem colspan={10}>
          <label>Section:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={section}
            onChange={(newValue) => {
              setSection(newValue);
            }}
          />
        </FlexboxGridItem>

        <FlexboxGridItem colspan={10}>
          <label>Groupe:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={groupe}
            onChange={(newValue) => {
              setGroupe(newValue);
            }}
          />
        </FlexboxGridItem>
      </FlexboxGrid>

      <FlexboxGrid justify="space-between" style={{ marginTop: 40 }}>
        <FlexboxGridItem colspan={10}>
          <label>Statut:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={statut}
            onChange={(newValue) => {
              setStatut(newValue);
            }}
          />
        </FlexboxGridItem>

        <FlexboxGridItem colspan={10}>
          <label>Période essai:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={periode}
            onChange={(newValue) => {
              setPeriode(newValue);
            }}
          />
        </FlexboxGridItem>
      </FlexboxGrid>

      <FlexboxGrid justify="space-between" style={{ marginTop: 40 }}>
        <FlexboxGridItem colspan={10}>
          <label>Salaire:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={salaire}
            onChange={(newValue) => {
              setSalaire(newValue);
            }}
          />
        </FlexboxGridItem>

        <FlexboxGridItem colspan={10}>
          <label>Salaire Lettres:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={salaireLettres}
            onChange={(newValue) => {
              setSalaireLettres(newValue);
            }}
          />
        </FlexboxGridItem>
      </FlexboxGrid>

      <FlexboxGrid justify="space-between" style={{ marginTop: 40 }}>
        <FlexboxGridItem colspan={10}>
          <label>Date debut:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={dateDebut.substring(0, 10)}
            onChange={(newValue) => {
              setDateDebut(newValue);
            }}
          />
        </FlexboxGridItem>

        <FlexboxGridItem colspan={10}>
          <label>Date fin:</label>
          <Input
            readOnly={lecture}
            style={styles}
            value={dateFin.substring(0, 10)}
            onChange={(newValue) => {
              setDateFin(newValue);
            }}
          />
        </FlexboxGridItem>
      </FlexboxGrid>

      <FlexboxGrid justify="end">
        <FlexboxGrid.Item>
          <Button
            style={{ marginRight: 10, marginTop: 20, width: 140 }}
            appearance="primary"
            onClick={lecture ? renouvelerContrat : saveContract}
          >
            {lecture ? (
              <p>Renouveler Contrat</p>
            ) : attenteModifier ? (
              <Loader />
            ) : (
              <p>Enregistrer </p>
            )}
          </Button>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Panel>
  );
};

export default Contrat;
