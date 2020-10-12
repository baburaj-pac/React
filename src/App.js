import React,{useState} from 'react';
import {GetPersons} from './Persons/Person/AllPerson'
//import {PersonsComponents} from './Components/PersonsComponent'
import {Aboutus} from './Components/Company/Aboutus'
import {Contactus} from './Components/Company/Contactus'
import {Homepage} from './Components/Company/Homepage'
import {Menus} from './Components/LeftNav/Menus'
import {LoadPage} from './Components/LoadPage'
import  classes from './Components/Company/Styles/homepage.module.css'


import './App.css';

function App() {
const getpersons=GetPersons();

const[GetPersonsData,SetPersonData]=useState({ Persons:getpersons})

const[GetPage,SetPage]=useState({ CurrentPage:"homepage"})

const Navigation_clicked=(c) => {
  debugger;
  SetPage( {
    CurrentPage:c
  })
}

const Add_Person_EvenHandelr=(per) => {
  debugger;
const getAllPerData=GetPersonsData.Persons;

getAllPerData.push(per);



SetPersonData( {
  Persons:getAllPerData
}

)

}


/*
const Update_Person_Name_EvenHandelr=(p) => {
  const findPerson=GetPersons.Persons;
  findPerson.splice(p.id,1)

  SetPerson({
    Persons:[...findPerson]
  })
}
*/
  return (
    
    
    <div className="App">


      
    { /*<PersonsComponents addperson_Click={Add_Person_EvenHandelr} Persons1={GetPersonsData}></PersonsComponents>
  */ }
  <div><Menus onClik={Navigation_clicked} ></Menus></div>
  { /*
  <div><Homepage></Homepage></div>
  <div><Contactus></Contactus></div>
  <div><Aboutus></Aboutus></div>
  */ }

  <div class={classes.pageStyle}
    
>
  <LoadPage  Clicked={Navigation_clicked } PageInfo={GetPage}></LoadPage>
     </div>
         </div>
  );
}

export default App;
