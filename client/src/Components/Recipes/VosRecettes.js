import React from "react";
import recettes from "../../recettes";
import Card from "../Card";
import NewHeader from "../NewHeader";

const VosRecettes = () => {
  const [vosRecettes, setVosRecettes] = useState({});

  useEffect(() => {
    setVosRecettes(recettes.vosRecettes);
  }, []);

  const cards = Object.keys(vosRecettes).map((key) => (
    <Card key={key} details={vosRecettes[key]} />
  ));

  return (
    <>
      <NewHeader />
      <div className="cards-container">{cards}</div>
    </>
  );
};

export default VosRecettes;
