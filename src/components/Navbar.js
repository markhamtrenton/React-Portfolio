import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

import "../styles/Header.css";
// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <body data-spy="scroll" data-target="#navbarResponsive">
  
    <div id="home">
     {/* <!-- navigation start -->   */}
     
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
     {/* <!-- navigation end -->
     <!-- background start --> */}
     <div className="background">
       <img src="images/background2.jpg" className="img-fluid" alt="background image"/>
     </div>
     <div className="heading-content text-center">
       <h5>Hello, I'm</h5>
       <h1>Trenton Markham</h1>
       <p>AND THIS IS MY Portfolio</p>
     </div>
    

{/* 
     <!-- background end --> */}

   </div>

   {/* <!-- About start --> */}
   <div id="about" className="container mt-3 mb-5">
     <div className="post-heading text-center" >
       <h3 className="display-4 font-weight-bold" >About Me</h3>
       <hr className="w-50 mx-auto pb-5"/>
     </div>
     <div className="row">
       <div className="col-lg-6 col-md-6 col-12">  
         <img src="images/profilefinal.jpg" className="img-fluid" alt="profile pic"/>
       </div>

     <div className="col-lg-6 col-md-6 col-12">
       <h2>Want to Know Me?</h2>
       <hr/>
       <p className="display-3">I am a fullstack developer from the Atlanta, Ga area. I have a passion for building and learning. I am experienced in html, css, bootstrap, and javascript. I have a Passion for software development 
         and building things with it. I bring strong skills to the table such as team-building, communication, debugging.  </p>

     </div>

{/* 
   <!-- About end -->

     <!-- my work start --> */}
     <div id="mywork" className="container mt-3 mb-5">
      <div className="post-heading text-center" >
        <h3 className="display-4 font-weight-bold" >MY Work</h3>
        <hr className="w-50 mx-auto pb-5"/>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <img src="images/my work.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">HTML & CSS</h5>
              <p className="card-text">Building and debugging website organizing</p>
              <a href="https://markhamtrenton.github.io/-01-HTML-CSS-Git/" className="btn btn-dark">Preview</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src="images/calender1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Calender/Scheduler App</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="https://markhamtrenton.github.io/Calender-Application/" className="btn btn-dark">Preview</a>
            </div>
          </div>
        </div>
      </div>
        {/* <!-----> */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img src="images/passwordgenerator1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Password Generator App</h5>
                <p className="card-text">Generating random passwords using JS</p>
                <a href="https://markhamtrenton.github.io/3-Password-Generator/index.html" className="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img src="images/weatherapp.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">Using JS and a weather api we can get the weather of any city</p>
                <a href="https://markhamtrenton.github.io/Weather-App/" className="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
        </div>



        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img src="images/OddJobsscreenshot.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Odd Jobs App</h5>
                <p className="card-text">As a construction or renovation type company you can make bids on potential client based projects. The folowing was used APIs JS HTML CSS Jquery Bootstrap Database </p>
                <a href="https://markhamtrenton.github.io/Group-Project-1/" className="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img src="images/quizzapp2.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Coding Quiz App</h5>
                <p className="card-text">Creating a Coding Quiz App with timer</p>
                <a href="https://markhamtrenton.github.io/04-Web-APIs-Code-Quiz/" className="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img src="images\Project2Forum.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Project 2 "Forum App"</h5>
                <p className="card-text">We missed forums of the early-to-mid ‘00s
                  We thought it would be entertaining to reverse engineer the forum concept
                  We wanted to have an aesthetic that evoked that era - so no Bootstrap! Using Spectre, you can actively look at different threads, create different threads as well as comment on any particular thread.
                  Spectre also gives you the ability to create an account with the login/logout feature. 
                  
                   </p>
                <a href="https://github.com/BrenniusXIV/forum007" className="btn btn-dark">Preview</a>
                <a href="https://forum-007.herokuapp.com/" className="btn btn-dark">Heroku Deploy</a>

              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img src="images/EmployeeManagementSystem.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">MySQL: Employee Tracker</h5>
                <p className="card-text">Creating a solution for managing a company's employees using node, inquirer, and MySQL.</p>
                <a href="https://github.com/markhamtrenton/12-MySQL-Homework-Employee-Tracker" className="btn btn-dark">Preview</a>
                <a href="https://www.youtube.com/watch?v=XhvF34RIq6M" className="btn btn-dark">Youtube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img src="images/TeamProfileGenerator.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Object-Oriented Programming: Team Profile Generator</h5>
                <p className="card-text">The Team Profile Generator where a command line is used to write in certain details to build our team that is then generated into an html webpage that displays summaries for each person. </p>
                <a href="https://github.com/markhamtrenton/10-Object-Oriented-Programming" className="btn btn-dark">Preview</a>
                <a href="https://www.youtube.com/watch?v=-vvm8CSBazo" className="btn btn-dark">Youtube</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img src="images/readmegeneratorscreenshot.jpg" className="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">ReadMe Generator</h5>
                <p className="card-text">Creating a ReadMe Generator (Node JS)</p>
                <a href="https://github.com/markhamtrenton/09-Nodejs-Homework" className="btn btn-dark">Preview</a>
                <a href="https://www.youtube.com/watch?v=itZg1YlKMyA" className="btn btn-dark">Youtube</a>
                
              </div>
            </div>
          </div>
        </div>



{/* 
        <!------>
         */}
         
        </div>


      </div>

    </div>
      {/* <!---->
      





      <!---->
 
    <!-- my work end --> */}

     {/* <!-- contact start --> */}
     <div id="contact" className="container mt-5 mb-5">
      <div className="post-heading text-center" >
        <h3 className="display-4 font-weight-bold" >Contact</h3>
        <hr className="w-50 mx-auto pb-5"/>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <h2>Email: markhamtrenton@gmail.com</h2>
        <hr/>
        
 
      </div>

    </div>
    
 
    {/* <!-- contact end -->

    <!-- footer beg --> */}
    <footer>
        
      <p>
          Made by Trenton Markham
      </p>
  </footer>
 {/* <!-- footer end --> */}









  </body>
  );
}

export default Navbar;
