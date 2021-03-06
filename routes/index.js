const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", (req, res) => res.render("welcome"));

// Dashboard Page
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard")
);

module.exports = router;
