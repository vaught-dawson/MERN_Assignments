require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(`${process.env.MONGODB_URL}${process.env.DATABASE_NAME}`)
    .then(() =>
      console.log(
        `[Event] Connected to '${process.env.DATABASE_NAME}' database`
      )
    )
    .catch((err) =>
      console.error(
        "[ERROR] Something went wrong when connecting to the database ",
        err
      )
    );
};
