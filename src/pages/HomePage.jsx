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
    <Link to="/beers">
      <div>
      <img className="images" src={beersImg} alt={beersImg} />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.
        </p>
      </div>
    </Link>
    <Link to="/random-beer">
      <div>
      <img className="images" src={randomBeerImg} alt={randomBeerImg} />
        <h1>Random Beer</h1>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius. 
        </p>
      </div>
    </Link>
    <Link to="/new-beer">
      <div>
      <img className="images" src={newBeerImg} alt={newBeerImg} />
        <h1>New Beer</h1>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.
        </p>
      </div>
    </Link>
  </div>
);
}
 

export default HomePage;
