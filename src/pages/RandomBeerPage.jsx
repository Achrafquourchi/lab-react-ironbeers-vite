import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [randomBeer , setRandomBeer] = useState()
  

useEffect(() => {
  axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((oneBeerDetailsAPI) => {
      setRandomBeer(oneBeerDetailsAPI.data)
      console.log(oneBeerDetailsAPI.data)
  })
      .catch((err) => { console.log(err) })

}, [])


if (randomBeer)
return (
<div>
     <Navbar/>
        <div>
        <img src={randomBeer.image_url} alt="" />
        </div>
        <div>
          <h1>{randomBeer.name}</h1>
          <h2>{randomBeer.tagline}</h2>
          <h2> {randomBeer.first_brewed} </h2>
          <h1>{randomBeer.attenuation_level}</h1>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
      </div>
</div>
)
}

 


export default RandomBeersPage;
