import React from 'react'


import  classes from './Styles/menus.module.css'

export const Menus=(props) => {
return (
    <div class={classes.sidenav}>
    <a onClick={()=>props.onClik('homepage')} >Home</a>
    
    <a onClick={()=>props.onClik('aboutus')} >About us</a>
    
    <a onClick={()=>props.onClik('contactus')} >Contact</a>
  </div>
);
}