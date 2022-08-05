const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("./../Models/usersModel");
const sendToken = require("../utils/jwtToken");

// Register New User
exports.registerUser = catchAsyncError(async (req, res, next) => {
   /*  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    }); */
  
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,

    });
    const token = user.getJWTToken();
    res.status(201).json({
        success:true,
        token
    })
  });


// Login New User

exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 201, res);  
  });

  // Logout User
exports.logout = catchAsyncError(async (req, res, next) => {
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