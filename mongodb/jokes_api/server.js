require("dotenv").config();
const express = require("express");
const app = express();

require("./config/mongoose.config")();

app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/joke.route")(app);

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `[Event] Express server is listening on port ${process.env.EXPRESS_PORT}`
  )
);
