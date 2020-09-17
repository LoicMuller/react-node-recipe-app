import React, { useEffect, useState } from "react";
import recettes from "../../recettes";
import Card from "../Card";
import NewHeader from "../NewHeader";

const Plats = () => {
  const [plats, setPlats] = useState({});

  useEffect(() => {
    setPlats(recettes.plats);
  }, []);

  const cards = Object.keys(plats).map((key) => (
    <Card key={key} details={plats[key]} />
  ));

  return (
    <>
      <NewHeader />
      <div className="cards-container">{cards}</div>
    </>
  );
};

export default Plats;
