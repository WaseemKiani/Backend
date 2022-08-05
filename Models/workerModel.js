const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please Enter Your Name"]
    },
    category:{
        type: String,
        required: [true,"Please Enter Your Name"]
    },
    email:{
        type: String,
        required: [true,"Please Enter Your Email"],
        unique: true
    },
    password:{
        type: String,
        required: [true,"Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
    },
    perHourRate:{
        type: Number,
        default: 0,
        required: true
    },
    role:{
        type: String,
        default: "worker"
    },
    completedOrders:{
        type: Number,
        default:0
    },
    pendingOrders:{
        type: Number,
        default:0
    },
    ordersRequest:{
        type: Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: Date.now    
    },
    image:{
        type: String,
    }

})

module.exports = mongoose.model("Worker",workerSchema);