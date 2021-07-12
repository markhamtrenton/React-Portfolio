import React from 'react';


import '../styles/Header.css';

function Bdy() {
    return (
      <body>
   <div id="home"> 
   
   <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" >
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#mywork">My Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Me</a>
        </li>
       
      </ul>
     
    </div>
  </nav>



   <div className="background">
     <img src="./images/background2.jpg" className="img-fluid" alt=""/>
   </div>
   <div className="heading-content text-center">
     <h5>Hello, I'm</h5>
     <h1>Trenton Markham</h1>
     <p>AND THIS IS MY Portfolio</p>
   </div>
        </div>
  

        </body>









);
}

  
export default Bdy;

