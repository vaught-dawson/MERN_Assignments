const fs = require("fs");
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

fs.readdirSync(`${__dirname}/routes`)
  .filter((file) => file.endsWith(".routes.js"))
  .map((route) => require(`./routes/${route}`)(app));

app.listen(5000, () =>
  console.log("[Event] Express server is listening on port 5000")
);
