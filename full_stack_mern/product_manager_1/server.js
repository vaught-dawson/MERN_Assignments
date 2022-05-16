const fs = require("fs");
const express = require("express");
const cors = require("cors");

require("./server/config/mongoose.config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

fs.readdirSync("./server/routes")
  .filter((file) => file.endsWith(".routes.js"))
  .map((route) => require(`./server/routes/${route}`)(app));

app.listen(5000, () =>
  console.log("[Event] Express server is listening on port 5000")
);
