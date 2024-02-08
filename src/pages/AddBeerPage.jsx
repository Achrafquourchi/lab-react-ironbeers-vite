import React, { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTip, setBrewerTip] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      firstBrewed: firstBrewed,
      brewerTip: brewerTip,
      attenuationLevel: attenuationLevel,
      contributedBy: contributedBy,
    };

    axios.post("https://ih-beers-api2.herokuapp.com/beers", newBeer);
  }

  return (
    <div className="AddBeerPage">
      <h1>Add New Beer</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Tagline
          <input
            type="text"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>

        <label>
          Description
          <textarea
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </label>

        <label>
          First Brewed
          <input
            type="text"
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </label>

        <label>
          Brewer's Tips
          <input
            type="text"
            onChange={(e) => {
              setBrewerTip(e.target.value);
            }}
          />
        </label>

        <label>
          Attenuation Level
          <input
            type="text"
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </label>

        <label>
          Contributed By
          <input
            type="text"
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </label>

        <button>Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
