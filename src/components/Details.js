import React  from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios";
import {
    Panel,
    Input,
    FlexboxGrid,
    Button,
    Message,
    Loader
} from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import { useLocation, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import Contrat from './Contrat'

const styles = {
    marginTop:5,
    marginBottom:5,
}


const Details = () => {
    const {path , url} = useRouteMatch()
  const history = useHistory();
    const location = useLocation();
    const identifiant = JSON.stringify(useParams().id);
  const employeeId = localStorage.getItem('employeeId');
  const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    //const [employee ,setEmployee] = React.useState([]);
  const [employee, setEmployee] = React.useState((employeeId && history.location.state.user && employeeId === history?.location?.state?.user?._id) ? employeeData : history.location.state.user); /*React.useMemo(()=>{
      return location.state.user
    },[identifiant])*/
    const date_naissance = String(location.state.user.date_naissance);
    const res = date_naissance.substring(0,10);
    const [isReadOnly , setIsReadOnly] = React.useState(true);
  const [nom, setNom] = React.useState(employee?.nom);
  const [adress, setAdress] = React.useState(employee?.adresse)
  const [lieuNaiss, setLieuNaiss] = React.useState(employee?.lieu_naissance);
  const [dateNaiss, setDateNaiss] = React.useState(employee?.date_naissance?.substring(0, 10));
    const [loadingModify , setLoadingModify] = React.useState(false);
    const [Travailleur , setTravailleur] = React.useState(false);

   

    React.useEffect(()=>{
      //history.goBack();
      //history.goForward();
    },[])
    /*React.useEffect(()=>{
        getEmployee();
    } , [])

    const getEmployee = () =>{
        setTravailleur(true)
        axios.get(`http://localhost:5000/api/employes/${identifiant}`)
        .then(res=>{
           setEmployee(JSON.stringify(res.data));
           console.log(res.data)
           setTravailleur(false);
           console.log(employee);
        })
        .catch(err=>{
            setTravailleur(false);
            console.log(err)
        })
    }   */



    const modifyEmployee =()=>{
        setIsReadOnly(false);
    }


    const saveModification = ()=>{
       
        setIsReadOnly(true);
        var data = JSON.stringify({
        "nom": nom,
        "adresse": adress,
        "date_naissance": dateNaiss,
        "lieu_naissance": lieuNaiss})
          
          var config = {
            method: 'put',
            url: `https://cosider-backend.herokuapp.com/api/employes/modifier/${employee._id}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          setLoadingModify(true);
          axios(config)
          .then(function (response) {
            localStorage.setItem('employeeId', response.data._id);
            localStorage.setItem('employeeData', JSON.stringify(response.data));
            setLoadingModify(false)
            alert("c est une plaisir");
        })
            .catch(function (error) {
            setTimeout(setLoadingModify(false), 3000);
            alert("ce n'est pas une plaisir")
            return(
                <Message showIcon type="error">
                  Error
                </Message>
            )
          });

          
    }

    

    return (
       <>
       <Panel header="Information employé" bordered style={{marginTop : 20}}>
         <FlexboxGrid justify="space-between">
         
         <FlexboxGridItem colspan={7}>
         <label>Matricule:</label>
         <Input readOnly style={styles} value={employee.matricule}/>
         </FlexboxGridItem>

         <FlexboxGridItem colspan={7}>
             <label>Nom:</label>
             <Input 
             readOnly={isReadOnly} 
             value={nom}
             style={styles}
             onChange={(newValue)=>{
               setNom(newValue);
             }}/>
         </FlexboxGridItem>

         <FlexboxGridItem colspan={7}>
             <label>Date de naiss:</label>
             <Input 
             readOnly={isReadOnly} 
             value={dateNaiss}
             style={styles}
             onChange={(newValue)=>{
               setDateNaiss(newValue);
             }}/>
         </FlexboxGridItem>
         </FlexboxGrid>

     
         <label>Lieu de naiss:</label>
        <Input
          readOnly={isReadOnly}
          style={styles}
          value={lieuNaiss}
          onChange={(newValue) => {
            setLieuNaiss(newValue);
          }}
        />

        <label>Adresse:</label>
        <Input
          readOnly={isReadOnly}
          style={styles}
          value={adress}
          onChange={(newValue) => { 
            setAdress(newValue);
          }}
        />

    <FlexboxGrid justify="end">
      <FlexboxGrid.Item >
         <Button 
         style={{marginRight : 10 , marginTop:20 , width:100}}
         appearance="primary"
         onClick={isReadOnly ? modifyEmployee : saveModification}>
            { isReadOnly ?(
             <p>Modifier</p>
            ) : loadingModify ? (
                <Loader />
              ): (
                <p>Enregistrer</p>
            )
            }
         </Button>
      </FlexboxGrid.Item>

      <FlexboxGridItem>
          <Button
          style={{marginTop : 20 , marginRight :10 , width:100}}
          appearance="ghost" onClick={()=>{
              history.goBack()
          }}>
              Supprimer
           </Button>
      </FlexboxGridItem>
    </FlexboxGrid>
         
       </Panel>

       <Contrat employee = {employee} history={history} />
       </>
    )
}

export default Details
