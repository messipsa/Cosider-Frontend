import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";

import { Button, Table, ButtonToolbar } from "rsuite";

import axios from "axios";

const Projets = () => {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { innerHeight } = window;
  const { Cell, HeaderCell, Column } = Table;
  const [projets, setProjets] = React.useState([]);
  const [LoadingProjects, setLoadingProjects] = React.useState(false);

  React.useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    var data = "";

    var config = {
      method: "get",
      url: "http://localhost:5000/api/projets",
      headers: {},
      data: data,
    };

    setLoadingProjects(true);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setProjets(response.data);
        setLoadingProjects(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoadingProjects(false);
      });
  };

  return (
    <Switch>
      <Route path={path}>
        <Button
          appearance="primary"
          color="red"
          style={{ margin: 30, marginLeft: window.innerWidth - 300 }}
        >
          Ajouter nouveau projet
        </Button>
        <Table
          virtualized
          height={innerHeight - 200}
          rowHeight={50}
          data={projets}
          loading={LoadingProjects}
          style={{ marginLeft: 10 }}
          onRowClick={(data) => {
            console.log(data);
          }}
        >
          <Column>
            <HeaderCell>Entite</HeaderCell>
            <Cell dataKey="entite"></Cell>
          </Column>

          <Column>
            <HeaderCell>Lieu</HeaderCell>
            <Cell dataKey="lieu"></Cell>
          </Column>

          <Column>
            <HeaderCell>Directeur</HeaderCell>
            <Cell dataKey="directeur"></Cell>
          </Column>

          <Column width={290} fixed="right">
            <HeaderCell></HeaderCell>
            <Cell>
              {(rowData) => {
                return (
                  <>
                    <ButtonToolbar style={{ marginTop: -5 }} align="right">
                      <Button appearance="primary" color="red">
                        Modifier
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
  );
};

export default Projets;
