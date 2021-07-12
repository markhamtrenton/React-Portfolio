import React from 'react';
import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Card from './components/Card';
// import Bdy from './components/Bdy';
import 'bootstrap/dist/css/bootstrap.css';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
        <Navbar />


       {/* <Bdy />
       <Card />
      <Header />
      <Navbar />
      <Card />
      
      */}
    </div>
  );
}

export default App;
