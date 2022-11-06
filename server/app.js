const { MDB } = require("./config/keys");
const { PORT } = require("./config");
const { error, success } = require("consola");
const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

//profix
const base_api = "/api/v1";

app.use(cors());
app.use(morgan("tiny"));

//connection status
mongoose.connect(MDB, (err, res) => {
  if (err) return error(err);
  success("Data Base online");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//generate public directory
app.use("/", express.static(path.resolve(__dirname, "../public")));

//global routes config
app.use(base_api, require("./routes/index"));

app.listen(process.env.PORT || 5050, () => {
  success("Server is running on port: ", PORT);
});
