import React from "react";
import AllBeersPage from "./AllBeersPage.jsx";
import RandomBeerPage from "./RandomBeerPage.jsx";
import AddBeerPage from "./AddBeerPage.jsx";

function HomePage() {
  return (
    <div>
      <AllBeersPage></AllBeersPage>
      <RandomBeerPage></RandomBeerPage>
      <AddBeerPage></AddBeerPage>
    </div>
  );
}

export default HomePage;
