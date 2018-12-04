var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

//GET home page
router.get('/', ctrlMain.get_protected);

//GET registration page
router.get('/register', ctrlMain.get_register);

//POST registration page
router.post('/register', ctrlMain.post_register);

//GET Login page
router.get('/login', ctrlMain.get_login);

//POST Login page
router.post('/login', ctrlMain.post_login);

//GET about page
router.get('/about', ctrlMain.get_about);

//GET stats
router.get('/stats', ctrlMain.get_stats);

//GET Logout page
router.get('/logout', ctrlMain.get_logout);

//GET protected page
router.get('/protected', ctrlMain.get_protected);

//GET dashboard
router.get('/dashboard', ctrlMain.get_dashboard);

router.get('/incidents/search', ctrlMain.loggedIn, ctrlMain.get_search);

router.get('/map', ctrlMain.get_map);
//DB API calls
router.get('/incidentlist', ctrlMain.loggedIn, ctrlMain.get_incidentlist);

router.get('/incidentlist/:id', ctrlMain.loggedIn, ctrlMain.get_showincident);

router.get('/newincident', ctrlMain.loggedIn, ctrlMain.get_newincident);

router.get('/editincident/:id', ctrlMain.loggedIn, ctrlMain.get_editincident);

router.post('/addincident', ctrlMain.loggedIn, ctrlMain.post_addincident);

router.post('/incidentlist/:id', ctrlMain.loggedIn, ctrlMain.post_updateincident);

router.get('/deleteincident/:id', ctrlMain.loggedIn, ctrlMain.get_deleteincident);

module.exports = router;
 