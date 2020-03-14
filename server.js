const express = require("express");

// do we need this? not sure yet
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
