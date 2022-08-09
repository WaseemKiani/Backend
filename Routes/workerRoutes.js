const express = require("express");
const {workerSignUp, getAllWorkers, loginWorker} = require("./../Controllers/workerController.js");

const router = express.Router();

router.route("/newWorker").post(workerSignUp);
router.route("/getallworkers").get(getAllWorkers);
router.route("/workerlogin").post(loginWorker);
module.exports= router