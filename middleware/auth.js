const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../Models/usersModel");

exports.isAuthenticatedUser =  catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next( new ErrorHandler("Please Login to Access the Respource",401));
    }

    const decodedData =jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);
    next();

}) 
