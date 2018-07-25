const express = require("express");
const router = express.Router();

// @route GET to api/post/test
// @description Test post route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "🍺 Posts Works ✔" }));

module.exports = router;
