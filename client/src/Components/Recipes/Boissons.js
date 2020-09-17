import React, { useState, useEffect } from "react";
import recettes from "../../recettes";
import Card from "../Card";
import NewHeader from "../NewHeader";

const Boissons = () => {
  const [boissons, setBoissons] = useState({});

  useEffect(() => {
    setBoissons(recettes.boissons);
  }, []);

  const cards = Object.keys(boissons).map((key) => (
    <Card key={key} details={boissons[key]} />
  ));
  return (
    <>
      <NewHeader />
      <div className="cards-container">{cards}</div>
    </>
  );
};

export default Boissons;
