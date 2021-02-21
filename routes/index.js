var express = require('express');
var router = express.Router();
const usersController=require("../controllers/usersController");
/* GET home page. */

router.get('/get_users', usersController.get_users);
router.post('/add_user', usersController.add_user);
router.get('/:id/delete_user', usersController.delete_user);
module.exports = router;
