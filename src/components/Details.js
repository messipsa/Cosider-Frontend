import React from "react";
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
import { useLocation } from "react-router-dom";


const styles = {
    marginTop:5,
    marginBottom:5,
}


const Details = () => {
    const history = useHistory();
    const location = useLocation();
    const employee = location.state.user ?? null;
    const date_naissance = String(location.state.user.date_naissance);
    const res = date_naissance.substring(0,10);
    const [isReadOnly , setIsReadOnly] = React.useState(true);
    const [nom , setNom] = React.useState(employee.nom);
    const [adress , setAdress] = React.useState(employee.adresse)
    const [lieuNaiss , setLieuNaiss] = React.useState(employee.lieu_naissance);
    const [dateNaiss , setDateNaiss] = React.useState(employee.date_naissance.substring(0,10));
    const [loadingModify , setLoadingModify] = React.useState(false);

   

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
            url: `http://localhost:5000/api/employes/modifier/${employee._id}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          setLoadingModify(true);
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setLoadingModify(false)
            alert("c est une plaisir")
            return(
                <Message showIcon type="success">
                 Success
                 </Message>  
            )
        })
          .catch(function (error) {
            console.log(error);
            console.log(`le id ${employee._id}`)

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
          appearance="ghost">
              Supprimer
           </Button>
      </FlexboxGridItem>
    </FlexboxGrid>
         
       </Panel>
    )
}

export default Details
