import React from 'react'
import  classes from './Styles/aboutus.module.css'
export const Aboutus=() => {
return (
    <div>
          <div class="about-section">
              <h1>This is About us  page</h1>
              <p>Some text about who we are and what we do.</p>
              <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

<h2>Our Team</h2>
<div class={classes.row}>
  <div class={classes.column}>
    <div class={classes.card}>
      <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane"/>
      <div class={classes.container}>
        <h2>Jane Doe</h2>
        <p class={classes.title}>CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class={classes.button}>Contact</button></p>
      </div>
    </div>
  </div>

  <div class={classes.column}>
    <div class={classes.card}>
      <img src="https://www.w3schools.com//w3images/team2.jpg" alt="Mike" />
      <div class="container">
        <h2>Mike Ross</h2>
        <p class={classes.title}>Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class={classes.button}>Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</div>
);
}