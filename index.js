const server = require("./api/server");
const Actors = require("./actors/actors-model");

const PORT = process.env.PORT || 5000;

// GET actors
server.get("/actors", async (req, res, next) => {
  try {
    const actors = await Actors.find();
    res.status(200).json(actors);
  } catch (err) {
    next(err);
  }
});

// GET actors by id
server.get("/actors/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const actors = await Actors.findById(id);

    if (character) {
      res.status(200).json(actors);
    } else {
      res.status(404).json({
        message: "The characte with the specified ID does not exist"
      });
    }
  } catch (err) {
    next(err);
  }
});

// POST actor
server.post("/actors", async (req, res, next) => {
  try {
    const newActor = await Actors.insert(req.body);
    res.status(201).json(newActor);
  } catch (err) {
    next(err);
  }
});

// PUT actors by id
server.put("/actors/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newActor = await Actors.update(id);

    if (newActor) {
      res.json(newActor);
    } else {
      res.status(404).json({
        message: "The actor with the specified ID does not exist."
      });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE actors by id
server.delete("/actors/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedActor = await Actors.remove(id);

    if (deletedActor) {
      res.status(200).json({
        message: deletedActor
      });
    } else {
      res.status(401).json({
        message: "The actor with the specified ID does not exist."
      });
    }
  } catch (err) {
    next(err);
  }
});

// ERROR HANDLER
server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "Something went wrong"
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
