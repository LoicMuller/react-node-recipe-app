import React, { useState, useEffect } from "react";
import recettes from "../../recettes";
import Card from "../Card";
import NewHeader from "../NewHeader";

const Entrees = () => {
  const [entrees, setEntrees] = useState({});

  useEffect(() => {
    setEntrees(recettes.entree);
  }, []);

  const cards = Object.keys(entrees).map((key) => (
    <Card key={key} details={entrees[key]} />
  ));

  return (
    <>
      <NewHeader />
      <div className="cards-container">{cards}</div>
    </>
  );
};

export default Entrees;
