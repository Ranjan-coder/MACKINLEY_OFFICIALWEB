const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const Port = process.env.PORT;

app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);


app.listen(Port, async () => {
  try {
    console.log(`SERVER STARED  : http://localhost:${Port}`);
  } catch (err) {
    console.log(`SOMETHING WENT WRONG : ${err}`);
  }
});
