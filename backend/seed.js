const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect("mongodb+srv://admin:admin123@cluster0.rdlcnd2.mongodb.net/?appName=Cluster0");

async function seed(){

 const hash = await bcrypt.hash("123456",10);

 await User.create({
   email:"admin@test.com",
   password:hash,
   role:"admin"
 });

 console.log("Admin created");
 process.exit();
}

seed();
