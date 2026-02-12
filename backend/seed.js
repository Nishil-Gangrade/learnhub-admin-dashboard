require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hash = await bcrypt.hash("123456", 10);

    await User.create({
      email: "admin@test.com",
      password: hash,
      role: "admin"
    });

    console.log("✅ Admin user created");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
