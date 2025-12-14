const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/mongopactice`);
// Schema meanse structure 
const userSchema = mongoose.Schema({
    name  : String,
    usename : String,
    email : String

})

module.exports  = mongoose.model("user", userSchema);