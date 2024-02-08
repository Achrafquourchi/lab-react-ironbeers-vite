import React from "react";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar"

function HomePage() {
  return (
    <div>
    <Navbar/>
    <div>
      <Link to="/beers">
      <img className="images" src={beersImg} alt={beersImg} />
        <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.
        </p>
      </div>
   
    
      <div>
      <Link to="/random-beer">
      <img className="images" src={randomBeerImg} alt={randomBeerImg} />
        <h1>Random Beer</h1>
        </Link>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius. 
        </p>
      </div>
    
    
      <div>
      <Link to="/new-beer">
      <img className="images" src={newBeerImg} alt={newBeerImg} />
        <h1>New Beer</h1>
        </Link>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.
        </p>
      </div>
  </div>
);
}
 

export default HomePage;
