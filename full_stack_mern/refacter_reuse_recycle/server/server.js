require("dotenv").config();
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();

require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

fs.readdirSync(`${__dirname}/routes`)
  .filter((file) => file.endsWith(".routes.js"))
  .forEach((route) => require(`./routes/${route}`)(app));

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `[Event] Express server is listening on port ${process.env.EXPRESS_PORT}`
  )
);
