const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    postdata : String,
    user: String,
    Date :{
        Type : Date,
        default: Date.now
    }
})

module.exports = mongoose.model("post", postSchema);


