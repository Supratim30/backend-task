const App = require("../models/app.model.js");
const xlData = require("../../abc.js");
// Create and Save a new Message
exports.create = (req, res) => {
  const pet = new App({
  datas: [xlData]
  });
  pet
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  App.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the pet.",
      });
    });
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
  App.findById(req.params.petId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Pet not found with id " + req.params.petId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Pet not found with id " + req.params.petId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving pet with id " + req.params.petId,
      });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.petId,
    {
      datas: [xlData]

    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "pet not found with id " + req.params.petId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Pet not found with id " + req.params.petId,
        });
      }
      return res.status(500).send({
        message: "Error updating pet with id " + req.params.petId,
      });
    });
};

// Delete a message with the specified messageId in the request
exports.delete = (req, res) => {
  App.findByIdAndRemove(req.params.petId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Pet not found with id " + req.params.petId,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Pet not found with id " + req.params.petId,
        });
      }
      return res.status(500).send({
        message: "Could not delete pet with id " + req.params.petId,
      });
    });
};
