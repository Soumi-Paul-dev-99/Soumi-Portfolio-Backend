const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`DATABASE CONNECTION SUCCESSFULL ${conn.connection.host}`);
  } catch (error) {
    console.log(`database not connected`);
  }
};
module.exports = dbConnect;
