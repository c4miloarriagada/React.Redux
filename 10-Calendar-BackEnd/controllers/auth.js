const { response } = require("express");
const { validationResult } = require("express-validator");
const userCreate = (req, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "registro",
    name,
    email,
    password,
  });
};

const userLogin = (req, res = response) => {
  const { email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const tokenValidation = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  userCreate,
  userLogin,
  tokenValidation,
};
