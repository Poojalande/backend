const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017/";

const mongoConnectionFun = () => {
  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection Successfully!!....");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnectionFun;
