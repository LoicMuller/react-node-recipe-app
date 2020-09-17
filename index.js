const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
  res.send("welcome to my form");
});

app.post("/api/form", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "eugenia.walsh@ethereal.email",
      pass: "Yw4SK6tQwsm61rQ9yQ",
    },
    rejectUnauthorized: false,
  });

  let mailOptions = {
    from: data.email,
    to: "eugenia.walsh@ethereal.email",
    subject: `Message from ${data.email}`,
    html: `
        <h3>Informations</h3>
        <ul>
          <li>Email : ${data.email}</li>
        </ul>

        <h3>Content</h3>
        <p>Titre : ${data.title}</p>
        <p>Nombre de personnes : ${data.number}</p>
        <p>Temps : ${data.time}</p>
        <p>Difficulté : ${data.difficulty}</p>
        <p>Ingrédients : ${data.ingredients}</p>
        <p>Préparation : ${data.preparation}</p>
      `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
      console.log(error);
    } else {
      res.send("Success");
    }

    smtpTransport.close();
  });

  smtpTransport.close();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
