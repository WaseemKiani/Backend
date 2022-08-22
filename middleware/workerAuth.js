const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const Worker = require("../Models/workerModel");

exports.isAuthenticatedWorker =  catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next( new ErrorHandler("Please Login to Access the Respource",401));
    }

    const decodedData =jwt.verify(token,process.env.JWT_SECRET);

    req.worker = await Worker.findById(decodedData.id);
    next();
}) 
