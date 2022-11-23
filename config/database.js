const mongoose = require("mongoose");

const connect = () => {
  const { MONGODB_URI } = process.env;
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`MongoDB connected`);
    })
    .catch((error) => {
      console.log(`Error while connecting to MongoDB`, error);
    });
};

module.exports = connect;
