import React from "react";
import "./Home.css";
//Assets
import CAROL from '../assets/images/carol.jpeg';

// Functional component.
function Home() {
  return (
    <div className="header">
      <h1 className="home-title"> Carolina</h1>
      <h2 className="home-subtitle"> Software Engineer</h2>
      <image className="carolphoto" src={CAROL} ></image> 
    </div>
  );
}

export default Home;
