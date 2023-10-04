const mongoose = require('mongoose')
require('dotenv').config();
const DBconnect = () => {
   try {
      const connect = mongoose.connect(process.env.MONGODB_URI);
console.log("Database connected");
   } catch (error) {
    console.log("Data base error")
   }
}
module.exports = DBconnect; 