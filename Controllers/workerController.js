const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const Worker = require("./../Models/workerModel");
const sendToken = require("../utils/jwtToken");

exports.workerSignUp = catchAsyncError(async(req,res,next)=>{

    const {name, category, email, password, perHourRate, image }= req.body;
    let role= "worker";


    if(!name || !email || !password || !category || !image){
        return next(new ErrorHandler("Fill Data Completely", 404))
    }else{
        const worker = await Worker.create({
            name, category, email, password, image
        })
        
        sendToken(worker,201,res);
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



exports.loginWorker = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
  
    const worker = await Worker.findOne({ email });
  
    if (!worker) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await worker.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(worker, 201, res);  
  });


  

  // Logout User
  exports.logoutWorker = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });

  
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    res.json({
        success:true,
        message:"Cookie Route is Working Fine"
    })   
})