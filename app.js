const path = require("path");
const express = require("express");
const cors = require("cors");

const db = require("./data/database");
const errorHandler = require("./middlewares/error-handler");
const todoRoutes = require("./routes/todo.routes");
const humorRoutes = require("./routes/humor.routes");
const contactRoute = require("./routes/contact.routes");

let PORT = 4000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use(contactRoute);
app.use("/todo", todoRoutes);
app.use("/humor", humorRoutes);

app.use(errorHandler);

db()
  .then(function () {
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });
