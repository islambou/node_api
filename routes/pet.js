const express = require("express");
const collection = require("../controller/collections");

const router = express.Router();
const controller = require("../controller/petController");

const DEFAULT_PET_STATUS = "available";
/* add a new pet. */
router.post("/", function(req, res) {
  let newPet = {
    name: req.query.name,
    category: req.query.category,
    status: DEFAULT_PET_STATUS
  };
  controller
    .insertIn(newPet, collection.PETS_COLLECTION)
    .then(result => res.send(result.insertedId))
    .catch(e => console.log(e));
});

/* update a pet. */
router.put("/", function(req, res) {
  console.log(req.body);
  let newPet = {
    name: req.query.name,
    category: req.query.category,
    status: DEFAULT_PET_STATUS
  };
  controller
    .updatetById(req.query._id, newPet)
    .then(result => res.send(result.insertedId))
    .catch(e => console.log(e));
});

/* Finds a Pet by status . */
router.get("/findByStatus", function(req, res) {
  controller
    .findByStatus(req.query.status)
    .then(result => {
      res.send(result);
    })
    .catch(e => console.log(e));
});

/* Find Pets by id. */
router.get("/:id", function(req, res) {
  controller
    .findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(e => {
      res.sendStatus(404);
    });
});
module.exports = router;
