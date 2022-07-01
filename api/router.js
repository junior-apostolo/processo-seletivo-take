const express = require("express");
const router = express.Router();
const reposController = require("./controller/reposController");

router.get("/",reposController.reposController);

module.exports = router;