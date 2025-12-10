const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/Products`)

const userSchema = mongoose.Schema({
    name: String,
    product: String,
    email : String,
    country : String
})

module.exports = mongoose.model('user', userSchema);