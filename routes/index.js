const { Router } = require("express");
const express = require("express");
const router = express.Router();

// Home Page
router.get("/", (req, res) => res.render("welcome"));

module.exports = router;
