const express = require("express");
const app = express();
const PORT = 8080;

//Mouting Api
app.use("/api", require("./api"));

const serverRun = () => {
  const server = app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

serverRun();
