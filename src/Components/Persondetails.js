import React from 'react'

export const PersonDetails=(itm) => {

    let ct='';
    let changeBgStyle= {
      bgcolor:  'background-color:green'
    }
    let changeStyle= {        
        bgcolor:  'background-color:yellow'
    }
    const changeStyleclick=() => {
        debugger
        ct='background-color:green';
        
    }
    return (
    <div onClick={()=>changeStyleclick()} style={{...changeBgStyle}}>
    <div>{itm.currentPerson.name} </div>
    <div>{itm.currentPerson.age} </div>
    <div>{itm.currentPerson.degree} </div>
    
    </div>
    );
 

}