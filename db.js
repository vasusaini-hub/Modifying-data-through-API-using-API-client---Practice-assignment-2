const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://pandilwadvedants70:a1apeVDF0Q1vJ0cD@cluster0.lb80m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch((err) => {
    console.log(`Error:${err}`);
  });
// a1apeVDF0Q1vJ0cD
