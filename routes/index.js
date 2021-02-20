var express = require('express');
var router = express.Router();
const usersController=require("../controllers/usersController");
/* GET home page. */

router.get('/get_users', usersController.get_users);

module.exports = router;
