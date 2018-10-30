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

router.route('/')
    //GET all incidents
    .get(function(req,res,next){
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
    })

    .post(function(req,res){
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

    });

    router.get('/addData', function(req,res){
        res.render('incidents/adddata',{title: 'Add new incidents'});
    });

    // route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //console.log('validating ' + id + ' exists');
    //find the ID in the Database
    mongoose.model('Incident').findById(id, function (err, incident) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                 },
                json: function(){
                       res.json({message : err.status  + ' ' + err});
                 }
            });
        //if it is found we continue on
        } else {
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next(); 
        } 
    });
});

router.route('/:id')
  .get(function(req, res) {
    mongoose.model('Incident').findById(req.id, function (err, incident) {
      if (err) {
        console.log('GET Error: There was a problem retrieving: ' + err);
      } else {
        console.log('GET Retrieving ID: ' + incident._id);
        res.format({
          html: function(){
              res.render('incidents/show', {
                "incident" : incident
              });
          },
          json: function(){
              res.json(incident);
          }
        });
      }
    });
  });

//DELETE a incident by ID
router.delete('/:id/edit', function (req, res){
    //find incident by ID
    mongoose.model('Incident').findById(req.id, function (err, incident) {
        if (err) {
            return console.error(err);
        } else {
            //remove it from Mongo
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
    });
});

module.exports = router;
