const mongoose = require('mongoose');

const connectDB = async () => {

 await mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.rdlcnd2.mongodb.net/?appName=Cluster0"
 );

 console.log("MongoDB Atlas Connected");
};

module.exports = connectDB;
