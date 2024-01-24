const express = require("express");
const { sendEmailController } = require("../controller/portfollioController");
const router = express.Router();

router.route("/sendEmail").post(sendEmailController);

module.exports = router;
