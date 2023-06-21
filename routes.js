const express = require("express");
const songModel = require("./models");
const app = express();

// post endpoint
app.post("/song", async (request, response) => {
  //const song = new songModel(request.body);
  const data = new songModel(request.body);

  try {
    const result = await data.save();
    response.json(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

//get endpoint
app.get("/song", async (request, response) => {
  const song = await songModel.find({});
  console.log(song);
  try {
    response.send(song);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
