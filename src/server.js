const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

mongoose.connect("mongodb://localhost:27017/empresa",{
  useNewUrlParser:true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);
const routes = require("./routes");


server.use(routes);
server.listen(3333);
