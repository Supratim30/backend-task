module.exports = (app) => {
  const App = require("../controllers/app.controller.js");

  app.post("/api/pet", App.create);

  app.get("/api/pet", App.findAll);

  app.get("“/api/pet/:petId", App.findOne);

  app.put("/api/pet/:petId", App.update);

  app.delete("/api/pet/:petId", App.delete);
};