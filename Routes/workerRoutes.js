const express = require("express");
const {workerSignUp, getAllWorkers, loginWorker, logoutWorker} = require("./../Controllers/workerController.js");

const router = express.Router();

router.route("/newWorker").post(workerSignUp);
router.route("/getallworkers").get(getAllWorkers);
router.route("/workerlogin").post(loginWorker);
router.route("/logoutWorker").get(logoutWorker);


module.exports= router