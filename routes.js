const express = require("express");
const artistModel = require("./models");
const app = express();

// post endpoint
app.post("/add_artist", async (request, response) => {
  const artist = new artistModel(request.body);

  try {
    await artist.save();
    response.send(artist);
  } catch (error) {
    response.status(500).send(error);
  }
});

//get endpoint
app.get("/artists", async (request, response) => {
  const artists = await artistModel.find({});

  try {
    response.send(artists);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
