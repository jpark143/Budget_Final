const mongoose = require('mongoose');

const URI = "mongodb+srv://jae:K!llbe999@cluster0.rxovf.mongodb.net/budget_app?retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('database connected');
}

module.exports = connectDB;
