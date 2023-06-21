const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();

app.use(express.json());

const username = "trayana";
const password = "admin";
const cluster = "cluster0";
const dbname = "songbook";

//database connection
mongoose.connect(
  `mongodb+srv://trayana:admin@cluster0.bmawi0v.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//checking the connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//port connection
app.use(Router);

app.listen(4700, () => {
  console.log("Server is running at port 4700");
});
