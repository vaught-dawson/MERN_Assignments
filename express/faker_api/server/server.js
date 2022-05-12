const User = require("./models/User");
const Company = require("./models/Company");
const express = require("express");
const app = express();
const { serverPort } = require("./config/config.json");

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/api/users/new", (req, res) => {
  const newUser = new User();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = new Company();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = new User();
  const newCompany = new Company();
  res.json({ user: newUser, company: newCompany });
});

app.listen(serverPort, () => console.log(`>> Listening on port ${serverPort}`));
