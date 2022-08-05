const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const Worker = require("./../Models/workerModel");

exports.workerSignUp = catchAsyncError(async(req,res,next)=>{

    const {name, category, email, password, perHourRate, image }= req.body;
    let role= "worker";


    if(!name || !category || !email || !password || !perHourRate || !image){
        return next(new ErrorHandler("Fill Data Completely", 404))
    }else{
        const data = await Worker.create({
            name, category, email, password, role , perHourRate , image
        })
    res.status(200).json({
        success: true
    })
}
});

exports.getAllWorkers = catchAsyncError(async(req,res,next)=>{

    const user = await Worker.find();
    
    if(!user){
        return next(new ErrorHandler("No Collection Find",404));
    }

    res.status(200).json({
        user
    })
});