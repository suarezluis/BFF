const express = require("express");
const router = express.Router();

// @route GET to api/users/test
// @description Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "🍺 Users Works ✔" }));

module.exports = router;
