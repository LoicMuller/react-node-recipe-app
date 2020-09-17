import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import NewHeader from "./NewHeader";
import axios from "axios";

const Suggest = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [sent, setSent] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };
  const handleIngredients = (e) => {
    setIngredients(e.target.value);
  };
  const handlePreparation = (e) => {
    setPreparation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email,
      title,
      number,
      time,
      difficulty,
      ingredients,
      preparation,
    };

    axios
      .post("/api/form", data)
      .then((res) => {
        setSent(true);
      }, resetForm())
      .catch(() => {
        console.log("Message not sent");
      });
  };

  const resetForm = () => {
    setEmail("");
    setTitle("");
    setNumber("");
    setTime("");
    setDifficulty("");
    setIngredients("");
    setPreparation("");

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <>
      <NewHeader />
      <div className={sent ? "success-msg" : "no-display"}>
        <p>Message envoyé avec succès !</p>
      </div>
      <div className="suggest-container">
        <form onSubmit={handleSubmit}>
          <div className="suggest-form-container">
            <div className="email-form">
              <TextField
                fullWidth
                type="email"
                required
                id="standard-required email"
                placeholder="Exemple@email.com"
                name="email"
                label="Email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="title-form">
              <TextField
                fullWidth
                type="text"
                required
                id="standard-required recipe-title"
                placeholder="Titre de la recette"
                name="recipe-title"
                label="Titre"
                value={title}
                onChange={handleTitle}
              />
            </div>
            <div className="number-persons-form">
              <Select
                fullWidth
                native
                required
                value={number}
                onChange={handleNumber}
                inputProps={{
                  name: "number-persons",
                  id: "number-persons",
                  required: true,
                }}
              >
                <option value="">Indiquez le nombre de personnes</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </Select>
            </div>
            <div className="timer-form">
              <TextField
                fullWidth
                type="number"
                required
                id="standard-required time"
                placeholder="Choisir une durée"
                name="time"
                label="Temps (en min)"
                value={time}
                onChange={handleTime}
              />
            </div>
            <div className="difficulte-form">
              <Select
                fullWidth
                native
                required
                value={difficulty}
                onChange={handleDifficulty}
                inputProps={{
                  name: "difficulty",
                  id: "difficulte-info",
                  required: true,
                }}
              >
                <option value="">Indiquez la difficulté</option>
                <option value="tres-facile">Très Facile</option>
                <option value="facile">Facile</option>
                <option value="moyen">Moyen</option>
                <option value="difficile">Difficile</option>
                <option value="tres-difficile">Très Difficile</option>
              </Select>
            </div>
            <div className="ingredients-form">
              <TextField
                fullWidth
                type="text"
                required
                id="standard-required ingredients"
                placeholder="Séparez par un trait d'union"
                name="ingredients"
                label="Ingrédients"
                value={ingredients}
                onChange={handleIngredients}
              />
            </div>
            <div className="preparation-form">
              <TextField
                fullWidth
                type="text"
                required
                id="standard-required preparation"
                placeholder="Séparez par un trait d'union"
                name="preparation"
                label="Préparation"
                value={preparation}
                onChange={handlePreparation}
              />
            </div>
            <Button
              type="submit"
              variant="outlined"
              color="default"
              endIcon={<SendIcon />}
            >
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Suggest;
