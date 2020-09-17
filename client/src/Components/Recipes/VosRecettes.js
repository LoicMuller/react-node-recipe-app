import React from "react";
import { Link } from "react-router-dom";
// import recettes from "../../recettes";
// import Card from "../Card";
import NewHeader from "../NewHeader";

const VosRecettes = () => {
  // const [vosRecettes, setVosRecettes] = useState({});

  // useEffect(() => {
  //   setVosRecettes(recettes.vosRecettes);
  // }, []);

  // const cards = Object.keys(vosRecettes).map((key) => (
  //   <Card key={key} details={vosRecettes[key]} />
  // ));

  return (
    <>
      <NewHeader />
      <div className="empty-container">
        <h1>Il n'y a aucune recette disponible pour l'instant !</h1>
        <p>
          <Link to="/suggest-recipe">Cliquez ici</Link> pour en ajouter
        </p>
      </div>
      {/* <div className="cards-container">{cards}</div> */}
    </>
  );
};

export default VosRecettes;
