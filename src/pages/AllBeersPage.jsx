import {useState,useEffect} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom"

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((beersFromAPI) => {
        setBeers(beersFromAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
  
  <div>
  <Navbar/>
   
{ beers && beers.map((oneBeer)=>{

return (
  <Link key={oneBeer._id} to={`/beers/${oneBeer._id}`}>
  <div>
  <div>
    <img src={oneBeer.image_url} />
    </div>
    <div>
    <h1>{oneBeer.name}</h1>
    <h2>{oneBeer.tagline}</h2>
    <p>Created by: {oneBeer.contributed_by}</p>
  </div>
  </div>
  </Link>
);

})}

  </div>
  
  )
}

export default AllBeersPage;
