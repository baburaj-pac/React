import React from 'react'
import {Aboutus} from '../Components/Company/Aboutus'
import {Contactus} from '../Components/Company/Contactus'
import {Homepage} from '../Components/Company/Homepage'


export const LoadPage=(props) => {
debugger;
    const LoadPage1=(c)=> {
        //props.Clicked(c);
        if(props.PageInfo.CurrentPage=="contactus")
        {
          return (<Contactus></Contactus>)
        }
        else if(props.PageInfo.CurrentPage=="aboutus")
        {
          return (<Aboutus></Aboutus>)
        }
        else if(props.PageInfo.CurrentPage=="homepage")
        {
          return (<Homepage></Homepage>)
        }
        
      }

      
debugger;

    let k=LoadPage1(props.PageInfo.CurrentPage);
    
    
   
      

    return ( 
        <div>{k}</div>
                
               
    );
}