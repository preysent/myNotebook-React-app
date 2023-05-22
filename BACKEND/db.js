// // this file for databases


const mongoose = require('mongoose');
const mongoURI =  "mongodb://127.0.0.1:27017/myDB"

  const connectToMongoose = async() =>{
    await mongoose.connect(mongoURI);
    console.log("connected to mongo successfully")
}

module.exports = connectToMongoose;