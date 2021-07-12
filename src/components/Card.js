import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import '../styles/Header.css';

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
   <body>
    <div>
    <div id="about" className="container mt-3 mb-5"/>
     <div className="post-heading text-center" >
       <h3 className="display-4 font-weight-bold" >About Me</h3>
       <hr className="w-50 mx-auto pb-5"/>
     </div>
     <div className="row">
       <div className="col-lg-6 col-md-6 col-12">  
         <img src="./images/profilefinal.jpg" className="img-fluid" alt=""/>
       </div>
        </div>
     <div className="col-lg-6 col-md-6 col-12"/>
       <h2>Want to Know Me?</h2>
       <hr></hr>
       <p className="display-3">I am a fullstack developer from the Atlanta, Ga area. I have a passion for building and learning. I am experienced in html, css, bootstrap, and javascript. I have a Passion for software development 
         and building things with it. I bring strong skills to the table such as team-building, communication, debugging.</p>

         </div>
         </body>

);
}

  
export default Card;
