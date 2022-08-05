const express = require("express");
const {workerSignUp, getAllWorkers} = require("./../Controllers/workerController.js");

const router = express.Router();

router.route("/newWorker").post(workerSignUp);
router.route("/getallworkers").get(getAllWorkers);

module.exports= router