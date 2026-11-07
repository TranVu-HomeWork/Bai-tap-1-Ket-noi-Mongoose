require('dotenv').config();

const mongoose = require('mongoose');
const User = require('./models/User');

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Kết nối MongoDB thành công!');
    console.log('User model đã được tạo:', User.modelName);
  } catch (error) {
    console.error('Kết nối MongoDB thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

connectDatabase();