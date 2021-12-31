import React, { Component } from "react";
import { Table, Loader, ButtonToolbar, Button, ButtonGroup } from "rsuite";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import Details from "./Details";
import AddEmployee from "./AddEmployee";
const { Cell, HeaderCell, Column } = Table;

const DataGrid = () => {
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const { innerHeight } = window;
  const [employees, setEmployees] = React.useState([]);
  const [loadingEmployees, setLoadingEmployees] = React.useState(false);
  const [loadingDeletion, setLoadingDeletion] = React.useState(false);
  //window.addEventListener('focus', () => getEmployees());
  //window.location.reload();

  React.useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    console.log("obligé");
    setLoadingEmployees(true);
    axios
      .get("https://cosider-backend.herokuapp.com/api/employes")
      .then((response) => {
        setEmployees(response.data);
        setLoadingEmployees(false);
      })
      .catch((err) => {
        setLoadingEmployees(false);
        console.log(err);
      });
  };

  const addEmployee = () => {
    history.push(`${path}/ajouter`);
  };

  return (
    <>
      <Switch>
        <Route path={`${path}/details/:id`} component={Details} />

        <Route path={`${path}/ajouter`} component={AddEmployee} />

        <Route path={path}>
          <Button
            onClick={addEmployee}
            appearance="primary"
            color="red"
            style={{ margin: 30, marginLeft: window.innerWidth - 300 }}
          >
            Ajouter nouvel employé
          </Button>

          <Table
            virtualized
            height={innerHeight - 200}
            data={employees}
            loading={loadingEmployees}
            rowHeight={50}
            style={{ marginLeft: 10 }}
            onRowClick={(data) => {
              console.log(data);
            }}
          >
            <Column>
              <HeaderCell>Matricule</HeaderCell>
              <Cell dataKey="matricule"></Cell>
            </Column>

            <Column width={200}>
              <HeaderCell>Nom</HeaderCell>
              <Cell dataKey="nom"></Cell>
            </Column>

            <Column>
              <HeaderCell>Projet</HeaderCell>
              <Cell dataKey="projet.entite"></Cell>
            </Column>

            <Column width={290} fixed="right">
              <HeaderCell></HeaderCell>
              <Cell>
                {(rowData) => {
                  const showDetails = () => {
                    history.push((path = `${path}/details/${rowData._id}`), {
                      user: rowData,
                    });
                    console.log(rowData);
                    localStorage.setItem("employeeId", rowData._id);
                    localStorage.setItem(
                      "employeeData",
                      JSON.stringify(rowData)
                    );
                    console.log(localStorage.getItem("employeeData"));
                  };

                  const deleteEmployee = () => {
                    setLoadingDeletion(true);
                    console.log("identifiant : " + rowData._id);
                    var data = "";

                    var config = {
                      method: "delete",
                      url: `https://cosider-backend.herokuapp.com/api/employes/supprimer/${rowData._id}`,
                      headers: {},
                      data: data,
                    };

                    axios(config)
                      .then((response) => {
                        console.log(JSON.stringify(response.data));
                        alert("c'est une plair ");
                        setLoadingDeletion(false);
                      })
                      .catch((error) => {
                        console.log(error);
                        alert("ce n'est pas une plaisir");
                        setLoadingDeletion(false);
                      });
                    // window.location.reload()
                  };
                  return (
                    <>
                      <ButtonToolbar style={{ marginTop: -5 }} align="right">
                        <Button
                          onClick={showDetails}
                          appearance="primary"
                          color="red"
                        >
                          Details
                        </Button>

                        <Button
                          style={{ marginLeft: 15 }}
                          onClick={deleteEmployee}
                          appearance="primary"
                          color="red"
                        >
                          Supprimer
                        </Button>
                      </ButtonToolbar>
                    </>
                  );
                }}
              </Cell>
            </Column>
          </Table>
        </Route>
      </Switch>
    </>
  );
};

export default DataGrid;
