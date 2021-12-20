import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios";
import {
    Panel,
    Input,
    FlexboxGrid
} from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";


const styles = {
    marginTop:5,
    marginBottom:5,
}


const Details = () => {
    
    const history = useHistory();
    const employee = history.location.state.user ?? null;
    const date_naissance = String(history.location.state.user.date_naissance);
    const res = date_naissance.substring(0,10);
    const [isReadOnly , setIsReadOnly] = React.useState(true);
    const [nom , setNom] = React.useState(employee.nom);
    const [adress , setAdress] = React.useState(employee.adresse)
    const [lieuNaiss , setLieuNaiss] = React.useState(employee.lieu_naissance);
    const [dateNaiss , setDateNaiss] = React.useState(employee.date_naissence);

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
             value={employee.nom}
             style={styles}
             onChange={(newValue)=>{
               setNom(newValue);
             }}/>
         </FlexboxGridItem>

         <FlexboxGridItem colspan={7}>
             <label>Date de naiss:</label>
             <Input 
             readOnly={isReadOnly} 
             value={employee.date_naissance.substring(0,10)}
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
          value={employee.lieu_naissance}
          onChange={(newValue) => {
            setLieuNaiss(newValue);
          }}
        />

        <label>Adresse:</label>
        <Input
          readOnly={isReadOnly}
          style={styles}
          value={employee.adresse}
          onChange={(newValue) => { 
            setAdress(newValue);
          }}
        />

         
       </Panel>
    )
}

export default Details
