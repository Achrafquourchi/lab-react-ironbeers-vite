import {useState,useEffect} from "react";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

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
   
{beers.map((oneBeer)=>{

return (
  <div>
    <img src={oneBeer.image_url} />
    <h2>{oneBeer.name}</h2>
    <p>{oneBeer.description}</p>
  </div>
);

})}

  </div>
  
  )
}

export default AllBeersPage;
