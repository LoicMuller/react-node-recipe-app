import React, { useState, useEffect } from "react";
import recettes from "../../recettes";
import Card from "../Card";
import NewHeader from "../NewHeader";

const Desserts = () => {
  const [desserts, setDesserts] = useState({});

  useEffect(() => {
    setDesserts(recettes.desserts);
  }, []);

  const cards = Object.keys(desserts).map((key) => (
    <Card key={key} details={desserts[key]} />
  ));

  return (
    <>
      <NewHeader />
      <div className="cards-container">{cards}</div>
    </>
  );
};

export default Desserts;
