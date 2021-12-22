import React, { Component } from "react";
import { Table , Loader , ButtonToolbar , Button } from "rsuite";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from 'react-router-dom';
import axios from "axios";
import Details from "./Details";
const {Cell ,HeaderCell , Column} = Table;

const DataGrid = () => {

    let {path , url} = useRouteMatch();
    const history = useHistory();
    const {innerHeight} = window;
    const [employees , setEmployees] = React.useState([]);
    const [loadingEmployees , setLoadingEmployees] = React.useState(false);
    

    React.useEffect(()=>{
       getEmployees();
    } , [])

    const getEmployees = () =>{
        setLoadingEmployees(true);
        axios.get("http://localhost:5000/api/employes")
        .then(response=>{
             setEmployees(response.data);
             setLoadingEmployees(false);
            })
            .catch(err=>{
                setLoadingEmployees(false);
                console.log(err);
            })
        
    }

    return (

          <Switch>
              <Route path={`${path}/details/:id`} component={Details} />
                  
              <Route path={path} >
                  <Table
                  virtualized
                  height={innerHeight - 200}
                  data={employees}
                  loading={loadingEmployees}
                  rowHeight={50}
                  style={{marginLeft : 10}}
                  onRowClick={(data)=>{
                      console.log(data)
                  }}>
                      <Column >
                      <HeaderCell>Matricule</HeaderCell>
                      <Cell dataKey="matricule"></Cell>
                      </Column>

                      <Column width={200}>
                      <HeaderCell>Nom</HeaderCell>
                      <Cell dataKey="nom"></Cell>
                      </Column>

                      <Column >
                      <HeaderCell>Projet</HeaderCell>
                      <Cell dataKey="projet.entite"></Cell>
                      </Column>

                      <Column width={120} fixed="right">
                      <HeaderCell></HeaderCell>
                      <Cell>
                         { (rowData) =>{
                             const showDetails = () =>{
                                 history.push(path=`${path}/details/${rowData._id}` , {user : rowData})
                             }
                             return(
                                <ButtonToolbar style={{ marginTop: -5 } } align='right'>
                                <Button
                                  onClick={showDetails}
                                  appearance="primary"
                                  color="red"
                                  
                                >
                                  Details
                                </Button>
                              </ButtonToolbar>
                             );
                         }
                         } 
                      </Cell>
                      </Column>
        

                  </Table>
                  </Route>
          </Switch>

    )
}

export default DataGrid
