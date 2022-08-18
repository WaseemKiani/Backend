const express = require("express");
const {workerSignUp, getAllWorkers, loginWorker, logoutWorker, getAllWorkerOrder} = require("./../Controllers/workerController.js");

const router = express.Router();

router.route("/newWorker").post(workerSignUp);
router.route("/getallworkers").get(getAllWorkers);
router.route("/workerlogin").post(loginWorker);
router.route("/logoutWorker").get(logoutWorker);
router.route("/getAllWorkerOrder/:id").get(getAllWorkerOrder);


module.exports= router