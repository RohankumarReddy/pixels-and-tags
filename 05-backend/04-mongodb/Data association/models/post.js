const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
postdata: String,
username: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
}],
age:Number,
date:{
    type:Date,
    default: Date.now,
}

}); 
module.exports = mongoose.model("post",postSchema);