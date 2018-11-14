var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

router.use(bodyParser.urlencoded({extended: true}));

router.use(methodOverride(function(req,res){
    if(req.body && typeof req.body == 'object' && '_method' in req.body){
        var method = req.body._method
        delete req.body._method
        return method
    } 
}));
var registeredUsers = [] ;
module.exports.loggedIn = function(req, res, next)
{
    console.log("Checking if logged in:");
    if(req.session.user)
    {
        //Proceed if the user is logged in
        console.log("logged in: ");
        console.log(req.session.user);
        next();
    } else
    {
        console.log("Not logged in");
        res.send("You must first log in");
    }
};

//GET home page

module.exports.index = function(req, res, next)
{
    res.render('index', {title: 'Silencer Prototype'});
    console.log('Cookies: ', req.cookies);
};

//GET registration page

module.exports.get_register = function(req, res)
{
    console.log("in get register:");

    res.render('register', {message: "Please register!"});
};

//POST registration page

module.exports.post_register = function(req, res)
{
    console.log("in post register:");

    if(!req.body.username || !req.body.password)
    {
        res.status("400");
        res.send("Invalid details");
    }
    else {
        //Create an array of users with matching usernames
        var matches = registeredUsers.filter(function (user) {
            return user.username === req.body.username;
            console.log("registeredUsers:");
            console.log(registeredUsers);
        });
//if there is a match, the user has already registered

if(matches.length > 0)
{
    res.render('register', {message: "User already registered!"});
}

//Register a new user

        else {

        var newUser = {username: req.body.username,
                       password: req.body.password};
        registeredUsers.push(newUser);
        console.log("New User: ");
        console.log(newUser);
        console.log("Registered Users: ");
        console.log(registeredUsers);
        res.redirect('/login');

        }
    }
};

//GET login page

module.exports.get_login = function (req, res) {

    res.render('login', {message: "Please log in!"});

};

//POST login page

module.exports.post_login = function (req, res) {

    console.log("Registered users:");
    console.log(registeredUsers);
    console.log("Loggin in: " + req.body.username + "/" + req.body.password);

//Create an array of users with matching credentials

var matches = registeredUsers.filter(function(user) {

    return (user.username === req.body.username)
        && (user.password === req.body.password);
});

console.log("Matching credentials: ");
console.log(matches);

if(matches.length === 0)
{
    res.render('login', {message: "Invalid credentials!"});
}
else {

    //The user is logged in for this session
    req.session.user = matches[0];
    console.log("Succesfully logged in: ");
    console.log(req.session.user.username);

    res.render('loggedIn', {name: req.session.user.username});
}
};

//GET stats page

module.exports.get_stats = function (req, res) {

    res.render('stats');

};

//GET Logout page

module.exports.get_logout = function (req, res) {

    console.log("Logging out: ");

    if (req.session.user) {
        var name = req.session.user.username;
        console.log(name);

        req.session.destroy(function () {

            console.log(name + "logged out.");
        });

        res.send(name + "is now logged out.");
    } else {

        console.log("Nobody is currently logged in!");
        res.send("Nobody is currently logged in!");
    }
};

//GET protected page

module.exports.get_protected = function(req, res)
{
    res.render('protected', {name: req.session.user.username});
}; 

//GET search page

module.exports.get_search = function(req, res)
{
    res.render('incidents/search');
}; 

//GET dashboard page

module.exports.get_dashboard = function(req, res)
{
    res.render('dashboard');
}; 

//API calls
module.exports.get_incidentlist = function(req,res,next)
{
    mongoose.model('Incident').find({},function(err,incident){
        if(err){
            return console.error(err);
        }else{
            res.format({
                html: function(){
                    res.render('incidents/index',{
                        title:'All gun incidents',
                        "incidents": incident
                    });
                },

                json: function(){
                    res.json(infophotos);
                }
            });
        }
    });
};
// //router.get('/incidentlist/:id', ctrlMain.get_showincident);
module.exports.get_newincident = function(req,res){
        res.render('incidents/adddata',{title: 'Add new incidents'});
};
// router.get('/editincident/:id', ctrlMain.get_editincident);
module.exports.post_addincident = function(req,res){
    var date = req.body.date;
    var state = req.body.state;
    var citycounty = req.body.citycounty;
    var address = req.body.address;
    var n_killed = req.body.n_killed;
    var n_injured = req.body.n_injured;
    var incident_url = req.body.incident_url;
    var source_url = req.body.source_url;
    var congressional_district = req.body.congressional_district;
    var gun_type = req.body.gun_type;
    var incident_characteristics = req.body.incident_characteristics;
    var latitude = req.body.latitude;
    var location_description = req.body.location_description;
    var longitude = req.body.longitude;
    var n_guns_involved = req.body.n_guns_involved;
    var notes = req.body.notes;
    var participant_age = req.body.participant_age;

    mongoose.model("Incident").create({
        date:date,
        state:state,
        citycounty:citycounty,
        address:address,
        n_killed:n_killed,
        n_injured:n_injured,
        incident_url:incident_url,
        source_url:source_url,
        congressional_district:congressional_district,
        gun_type:gun_type,
        incident_characteristics:incident_characteristics,
        latitude:latitude,
        location_description:location_description,
        longitude:longitude,
        n_guns_involved:n_guns_involved,
        notes:notes,
        participant_age:participant_age

    },function(err,incident){
        if(err){
            res.send("There was a problem adding information to database!");
        }
        else{
            console.log('POST creating new incident: '+incident);
            res.format({
                html: function(){
                    res.location("incidents");
                    res.redirect("/incidents");

                },

                json: function(){
                    res.json(incident);
                }
            });
            
        }
        
    })
};
// router.post('/deletelist/:id', ctrlMain.post_updateincident);
module.exports.get_deleteincident = function(req,res){
    console.log(req.params.id);
    var __id  = req.params.id;
    mongoose.model('Incident').findById(__id, function (err, incident) {
        if (err) {
            return console.error(err);
        } else {
            //remove it from Mongo
            console.log("test");
            incident.remove(function (err, incident) {
                if (err) {
                    return console.error(err);
                } else {
                    //Returning success messages saying it was deleted
                    console.log('DELETE removing ID: ' + incident._id);
                    res.format({
                        //HTML returns us back to the main page, or you can create a success page
                          html: function(){
                               res.redirect("/incidents");
                         },
                         //JSON returns the item with the message that is has been deleted
                        json: function(){
                               res.json({message : 'deleted',
                                   item : incident
                               });
                         }
                      });
                }
            });
        }
    })
};