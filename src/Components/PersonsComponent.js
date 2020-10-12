import React from 'react'
import {PersonDetails} from './Persondetails'
import {AddPerson} from './AddPerson'
export const PersonsComponents=(props) => {
debugger;
let newPerson = {
    id:3,
    name:"Baburaj1",
    age:40,
    degree:"MS"
};
    let k=props.Persons1.Persons.map((itm,index)=>  (
        <PersonDetails key={itm.id} currentPerson={itm}>
            

        </PersonDetails>    
        
   
     ) ); 

    return ( 
        <div>{k}<AddPerson addclick={props.addperson_Click}   per={newPerson}></AddPerson> </div>
                
               
    );
}