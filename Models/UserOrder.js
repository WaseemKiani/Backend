const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please Enter Your Name"]
    },
    contact:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: [true,"Please Enter Your Address"]
    },
    offer:{
        type: Number,
        required: true
    },
    startDuration:{
        type: Date,
    },
    endDuration:{
        type: Date,
    },
    worker:{
        type: String,
        required: [true,"Please Enter Your Address"]
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }
})


module.exports = mongoose.model("Order",orderSchema);


