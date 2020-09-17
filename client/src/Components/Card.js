import React from "react";
import "./main.css";

const Card = ({ details }) => {
  const ingredients = details.ingredients
    .split(",")
    .map((item, index) => <li key={index}>{item}</li>);

  const preparation = details.preparation
    .split(".")
    .map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="card">
      <div className="title-img-container">
        <h2>{details.nom}</h2>
        <div className="image">
          <img
            src={require(`../images/Recettes/${details.image}`)}
            alt={details.nom}
          />
        </div>
      </div>
      <div className="informations">
        <p>Nombre de personnes : {details.nombre}</p>
        <p>Temps : {details.temps}</p>
        <p>Difficulté : {details.difficulte}</p>
      </div>
      <div className="recipe">
        <ul className="liste-ingredients">
          <h3>Ingrédients : </h3>
          {ingredients}
        </ul>
        <div className="blank"></div>
        <ol className="liste-preparation">
          <h3>Préparation : </h3>
          {preparation}
        </ol>
      </div>

      <hr />
    </div>
  );
};

export default Card;
