import React from 'react'
import {Panel ,Button , FlexboxGrid , Input ,Loader } from 'rsuite'
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";

const styles = {
    marginTop:5,
    marginBottom:5,
}

const AddEmployee = () => {

    const [attenteModifier , setAttenteModifier] =React.useState(false);
    const [project , setProject] = React.useState('')
     const [numero , setNumero] = React.useState('')
     const [dateDebut , setDateDebut] = React.useState('')
     const [dateFin , setDateFin] = React.useState('')
     const [poste , setPoste] = React.useState('')
     const [salaire , setSalaire] = React.useState('')
     const [salaireLettres , setSalaireLettres] = React.useState('')
     const [statut , setStatut] = React.useState('')
     const [categorie , setCategorie] =React.useState('')
     const [affectation , setAffectation] =React.useState('')
     const [groupe , setGroupe] =React.useState('')
     const [section ,setSection] =React.useState('')
     const [periode , setPeriode] = React.useState('')


    return (
        <Panel header="Information employé" bordered style={{marginTop : 20}}>
        <FlexboxGrid justify="space-between">
        
        <FlexboxGridItem colspan={7}>
          <label>Numero:</label>
            <Input
               style={styles} 
             value={numero}
              onChange={(newValue)=>{
                setNumero(newValue);
              }} />
         </FlexboxGridItem>
 
        <FlexboxGridItem colspan={7}>
          <label>Projet:</label>
          <Input 
          
          style={styles} 
          value={project}
          onChange={(newValue)=>{
             setProject(newValue);
           }}/>
         </FlexboxGridItem>
 
         <FlexboxGridItem colspan={7}>
          <label>Poste:</label>
          <Input 
          
          style={styles} 
          value={poste}
          onChange={(newValue)=>{
             setPoste(newValue);
           }}/>
         </FlexboxGridItem>
        
         </FlexboxGrid>
 
 
 
         <FlexboxGrid justify="space-between" style={{marginTop : 40}}>
        
        <FlexboxGridItem colspan={10}>
          <label>Affectation:</label>
          <Input 
         
          style={styles} 
          value={affectation}
          onChange={(newValue)=>{
             setAffectation(newValue);
           }}/>
         </FlexboxGridItem>
 
         <FlexboxGridItem colspan={10} >
          <label>Categorie:</label>
          <Input 
         
          style={styles} 
          value={categorie}
          onChange={(newValue)=>{
             setCategorie(newValue);
           }}/>
         </FlexboxGridItem>
         </FlexboxGrid>
 
 
         <FlexboxGrid justify="space-between" style={{marginTop : 40}}>
        
        <FlexboxGridItem colspan={10}>
          <label>Section:</label>
          <Input 
        
          style={styles} 
          value={section}
          onChange={(newValue)=>{
             setSection(newValue);
           }}/>
         </FlexboxGridItem>
 
         <FlexboxGridItem colspan={10} >
          <label>Groupe:</label>
          <Input 
          
          style={styles} 
          value={groupe}
          onChange={(newValue)=>{
             setGroupe(newValue);
           }}/>
         </FlexboxGridItem>
         </FlexboxGrid>
 
 
 
         <FlexboxGrid justify="space-between" style={{marginTop : 40}}>
        
        <FlexboxGridItem colspan={10}>
          <label>Statut:</label>
          <Input 
           
          style={styles} 
          value={statut}
          onChange={(newValue)=>{
             setStatut(newValue);
           }}/>
         </FlexboxGridItem>
 
         <FlexboxGridItem colspan={10} >
          <label>Période essai:</label>
          <Input 
          
          style={styles} 
          value={periode}
          onChange={(newValue)=>{
             setPeriode(newValue);
           }}/>
         </FlexboxGridItem>
         </FlexboxGrid>
 
 
         <FlexboxGrid justify="space-between" style={{marginTop : 40}}>
        
        <FlexboxGridItem colspan={10}>
          <label>Salaire:</label>
          <Input 
          
          style={styles} 
          value={salaire}
          onChange={(newValue)=>{
             setSalaire(newValue);
           }}/>
         </FlexboxGridItem>
 
         <FlexboxGridItem colspan={10} >
          <label>Salaire Lettres:</label>
          <Input 
          
          style={styles} 
          value={salaireLettres}
          onChange={(newValue)=>{
             setSalaireLettres(newValue);
           }}/>
         </FlexboxGridItem>
         </FlexboxGrid>
 
  
 
         <FlexboxGrid justify="space-between" style={{marginTop : 40}}>
        
        <FlexboxGridItem colspan={10}>
          <label>Date debut:</label>
          <Input 
         
          style={styles} 
          value={dateDebut.substring(0,10)}
          onChange={(newValue)=>{
             setDateDebut(newValue);
           }}/>
         </FlexboxGridItem>
 
         <FlexboxGridItem colspan={10} >
          <label>Date fin:</label>
          <Input 
          
          style={styles} 
          value={dateFin.substring(0,10)}
          onChange={(newValue)=>{
             setDateFin(newValue);
           }}/>
         </FlexboxGridItem>
         </FlexboxGrid>
 
 
         <FlexboxGrid justify="end">
       <FlexboxGrid.Item >
          <Button 
          style={{marginRight : 10 , marginTop:20 , width:140}}
          appearance="primary"
          >
             { !attenteModifier ?(
              <p>Ajouter</p>
             ) : (
                 <Loader />
               )
             }
          </Button>
       </FlexboxGrid.Item>
       </FlexboxGrid>
       </Panel>
    )
}

export default AddEmployee
