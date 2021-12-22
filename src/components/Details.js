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


const styles = {
    marginTop:5,
    marginBottom:5,
}


const Details = () => {
    const {path , url} = useRouteMatch()
    const history = useHistory();
    console.log(history)
    const location = useLocation();
    const identifiant = JSON.stringify(useParams().id);
    console.log(identifiant)
    //const [employee ,setEmployee] = React.useState([]);
    const employee = location.state.user /*React.useMemo(()=>{ 
      return location.state.user
    },[identifiant])*/
    console.log(employee)
    const date_naissance = String(location.state.user.date_naissance);
    const res = date_naissance.substring(0,10);
    const [isReadOnly , setIsReadOnly] = React.useState(true);
    const [nom , setNom] = React.useState(employee.nom);
    console.log(nom)
    const [adress , setAdress] = React.useState(employee.adresse)
    const [lieuNaiss , setLieuNaiss] = React.useState(employee.lieu_naissance);
    const [dateNaiss , setDateNaiss] = React.useState(employee.date_naissance.substring(0,10));
    const [loadingModify , setLoadingModify] = React.useState(false);
    const [Travailleur , setTravailleur] = React.useState(false);

    //Contrat
    const [project , setProject] = React.useState(employee.projet.entite)
    const [numero , setNumero] = React.useState(employee.contrat.numero)
    const [dateDebut , setDateDebut] = React.useState(employee.contrat.date_debut)
    const [dateFin , setDateFin] = React.useState(employee.contrat.date_fin)
    const [poste , setPoste] = React.useState(employee.contrat.poste_travail)
    const [salaire , setSalaire] = React.useState(employee.contrat.salaire)
    const [salaireLettres , setSalaireLettres] = React.useState(employee.contrat.salaire_lettres)
    const [statut , setStatut] = React.useState(employee.contrat.statut)
    const [categorie , setCategorie] =React.useState(employee.contrat.categorie)
    const [affectation , setAffectation] =React.useState(employee.contrat.affectation)
    const [groupe , setGroupe] =React.useState(employee.contrat.groupe)
    const [section ,setSection] =React.useState(employee.contrat.section)

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
              history.goForward()
          }}>
              Supprimer
           </Button>
      </FlexboxGridItem>
    </FlexboxGrid>
         
       </Panel>

       <Panel header="Information employé" bordered style={{marginTop : 20}}>
       <FlexboxGrid justify="space-between">
       
       <FlexboxGridItem colspan={7}>
         <label>Numero:</label>
         <Input readOnly style={styles} value={numero}/>
        </FlexboxGridItem>

       <FlexboxGridItem colspan={7}>
         <label>Projet:</label>
         <Input readOnly style={styles} value={project}/>
        </FlexboxGridItem>

        <FlexboxGridItem colspan={7}>
         <label>Poste:</label>
         <Input readOnly style={styles} value={poste}/>
        </FlexboxGridItem>
       
        </FlexboxGrid>
  
        <FlexboxGrid justify="space-between">

        <FlexboxGridItem colspan={7}>
         <label>Salaire:</label>
         <Input readOnly style={styles} value={salaire}/>
        </FlexboxGridItem>

       <FlexboxGridItem colspan={7}>
         <label>Salaire lettres:</label>
         <Input readOnly style={styles} value={salaireLettres}/>
        </FlexboxGridItem>

        <FlexboxGridItem colspan={7}>
         <label>Statut:</label>
         <Input readOnly style={styles} value={statut}/>
        </FlexboxGridItem>
       
        </FlexboxGrid>


            <FlexboxGrid justify="space-between">

                <FlexboxGridItem colspan={4}>
                <label>Salaire:</label>
                <Input readOnly style={styles} value={salaire}/>
                </FlexboxGridItem>

                <FlexboxGridItem colspan={4}>
                <label>Salaire lettres:</label>
                <Input readOnly style={styles} value={salaireLettres}/>
                </FlexboxGridItem>

                <FlexboxGridItem colspan={4}>
                <label>Statut:</label>
                <Input readOnly style={styles} value={statut}/>
                </FlexboxGridItem>

                <FlexboxGridItem colspan={4}>
                <label>Statut:</label>
                <Input readOnly style={styles} value={statut}/>
                </FlexboxGridItem>

            </FlexboxGrid>

            <FlexboxGrid justify="space-between">
        
        <FlexboxGridItem colspan={9}>
            <label>Date debut:</label>
            <Input readOnly style={styles} value={dateDebut.substring(0,10)}/>
            </FlexboxGridItem>

       <FlexboxGridItem colspan={9}>
         <label>Date fin:</label>
         <Input readOnly style={styles} value={dateFin.substring(0,10)}/>
        </FlexboxGridItem>
       
        </FlexboxGrid>
       </Panel>
       </>
    )
}

export default Details
