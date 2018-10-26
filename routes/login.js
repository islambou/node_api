var express = require('express');
const collection = require("../controller/collections")

var router = express.Router();
var controller = require('../controller')
/* GET users listing. */
router.get('/:user?/:password?', function(req, res) {
 controller.insertIn({},collection.PETS_COLLECTION)
 .then(result => res.send(result.insertedId))
 .catch(e=> console.log(e))
});

module.exports = router;
