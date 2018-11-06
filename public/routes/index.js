var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

//GET home page

router.get('/', ctrlMain.index);

//GET registration page

router.get('/register', ctrlMain.get_register);

//POST registration page

router.post('/register', ctrlMain.post_register);

//GET Login page

router.get('/login', ctrlMain.get_login);

//POST Login page

router.post('/login', ctrlMain.post_login);

router.get('/stats', ctrlMain.get_stats);


//GET Logout page

router.get('/logout', ctrlMain.get_logout);

//GET protected page

router.get('/protected', ctrlMain.loggedIn, ctrlMain.get_protected);

router.get('/incidents/search', ctrlMain.loggedIn, ctrlMain.get_search);

//GET dashboard
router.get('/dashboard', ctrlMain.loggedIn, ctrlMain.get_dashboard);

module.exports = router ; 