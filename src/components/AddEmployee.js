import React from "react";
import axios from "axios";
import { Panel, Button, FlexboxGrid, Input, Loader, Dropdown } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import { useLocation } from "react-router-dom";
import NavCust from "./NavCust.js";
import swal from "sweetalert";

const styles = {
  marginTop: 5,
  marginBottom: 5,
};

const AddEmployee = () => {
  const location = useLocation();
  const [active, setActive] = React.useState("employes");
  const [attenteModifier, setAttenteModifier] = React.useState(false);
  const [project, setProject] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [dateDebut, setDateDebut] = React.useState("");
  const [dateFin, setDateFin] = React.useState("");
  const [poste, setPoste] = React.useState("");
  const [salaire, setSalaire] = React.useState("");
  const [salaireLettres, setSalaireLettres] = React.useState("");
  const [statut, setStatut] = React.useState("");
  const [categorie, setCategorie] = React.useState("");
  const [affectation, setAffectation] = React.useState("");
  const [groupe, setGroupe] = React.useState("");
  const [section, setSection] = React.useState("");
  const [periode, setPeriode] = React.useState("");
  const [classification, setClassification] = React.useState("");

  const [nom, setNom] = React.useState("");
  const [matricule, setMatricule] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [lieuNaiss, setLieuNaiss] = React.useState("");
  const [dateNaiss, setDateNaiss] = React.useState("");

  const [projets, setProjets] = React.useState([]);

  const token = "Bearer " + JSON.parse(localStorage.getItem("user")).token;

  const addEmployee = () => {
    var data = JSON.stringify({
      matricule: matricule,
      nom: nom,
      adresse: adress,
      entite: project,
      lieu_naissance: lieuNaiss,
      date_naissance: dateNaiss,
      contrat: {
        numero: numero,
        salaire: salaire,
        salaire_lettres: salaireLettres,
        groupe: groupe,
        section: section,
        categorie: categorie,
        date_debut: dateDebut,
        date_fin: dateFin,
        statut: statut,
        poste_travail: poste,
        affectation: affectation,
        periode_essai: periode,
        classification: classification,
      },
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/api/employes/ajouter",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        swal("Employé ajouté correctement", "", "success").then(() =>
          window.location.reload()
        );
      })
      .catch(function (error) {
        console.log(data);
        console.log(error.message);
        if (error.message === "Request failed with status code 400") {
          swal("Matricule déja existante dans ce projet", "", "error");
        } else {
          swal(
            "Tous les chmaps doivent etre remplis correctement",
            "",
            "error"
          );
        }
      });
  };

  return (
    <>
      <NavCust appearance="tabs" active={active} onSelect={setActive} />
      <Panel
        header="Ajout d'un nouvel employé"
        bordered
        style={{ marginTop: 20 }}
      >
        <FlexboxGrid style={{ marginTop: 50 }} justify="space-between">
          <FlexboxGridItem colspan={7}>
            <label>Matricule:</label>
            <Input
              style={styles}
              value={matricule}
              onChange={(newValue) => {
                setMatricule(newValue);
              }}
            />
          </FlexboxGridItem>

          <FlexboxGridItem colspan={7}>
            <label>Nom:</label>
            <Input
              value={nom}
              style={styles}
              onChange={(newValue) => {
                setNom(newValue);
              }}
            />
          </FlexboxGridItem>

          <FlexboxGridItem colspan={7}>
            <label>Date de naiss:</label>
            <Input
              value={dateNaiss}
              style={styles}
              onChange={(newValue) => {
                setDateNaiss(newValue);
              }}
            />
          </FlexboxGridItem>
        </FlexboxGrid>

        <label>Lieu de naiss:</label>
        <Input
          style={styles}
          value={lieuNaiss}
          onChange={(newValue) => {
            setLieuNaiss(newValue);
          }}
        />

        <label>Adresse:</label>
        <Input
          style={styles}
          value={adress}
          onChange={(newValue) => {
            setAdress(newValue);
          }}
        />

        <FlexboxGrid style={{ marginTop: 40 }} justify="space-between">
          <FlexboxGridItem colspan={10}>
            <label>Numero:</label>
            <Input
              style={styles}
              value={numero}
              onChange={(newValue) => {
                setNumero(newValue);
              }}
            />
          </FlexboxGridItem>

          <FlexboxGridItem colspan={10}>
            <label>Entite:</label>
            <Input
              style={styles}
              value={project}
              onChange={(newValue) => {
                setProject(newValue);
              }}
            />
          </FlexboxGridItem>
        </FlexboxGrid>
        <FlexboxGrid justify="space-between" style={{ marginTop: 40 }}>
          <FlexboxGridItem colspan={10}>
            <label>Poste:</label>
            <Input
              style={styles}
              value={poste}
              onChange={(newValue) => {
                setPoste(newValue);
              }}
            />
          </FlexboxGridItem>

          <FlexboxGridItem colspan={10}>
            <label>Classification:</label>
            <Input
              style={styles}
              value={classification}
              onChange={(newValue) => {
                setClassification(newValue);
              }}
            />
          </FlexboxGridItem>
        </FlexboxGrid>

        <FlexboxGrid justify="space-between" style={{ marginTop: 40 }}>
          <FlexboxGridItem colspan={10}>
            <label>Affectation:</label>
            <Input
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
              onClick={addEmployee}
            >
              {!attenteModifier ? <p>Ajouter</p> : <Loader />}
            </Button>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
    </>
  );
};

export default AddEmployee;
