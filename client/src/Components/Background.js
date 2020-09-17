import React from "react";
import { Link } from "react-router-dom";

const Background = () => {
  return (
    <>
      <div id="background"></div>
      <div className="landing-container">
        <Link to="/suggest-recipe">Proposer une recette</Link>
      </div>
      <footer className="landing-footer">
        <span>Photo by Katie Smith on Unsplash</span>
      </footer>
    </>
  );
};

export default Background;
