import Navbar from "../components/Navbar";
import axios from "axios"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from "react"

function BeerDetailsPage() {
    const [oneBeer , setBeer] = useState()
    const { beerId} = useParams()

useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((oneBeerDetailsAPI) => {
        setBeer(oneBeerDetailsAPI.data)
        console.log(oneBeerDetailsAPI.data)
    })
        .catch((err) => { console.log(err) })

}, [beerId])


if (oneBeer)
 return (
  <div>
       <Navbar/>
          <div>
          <img src={oneBeer.image_url} alt="" />
          </div>
          <div>
            <h1>{oneBeer.name}</h1>
            <h2>{oneBeer.tagline}</h2>
            <h2> {oneBeer.first_brewed} </h2>
            <h1>{oneBeer.attenuation_level}</h1>
            <p>{oneBeer.description}</p>
            <p>{oneBeer.contributed_by}</p>
        </div>
  </div>
 )
}

export default BeerDetailsPage;
