const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let IncidentSchema = new Schema({
    date: {type: Date, required: true},
    state: {type: String, required: true},
    citycounty: {type: String, required: false},
    address: {type: String, require: false},
    n_killed:  {type: String, require: false},
    n_injured: {type: String, require: false},
    incident_url: {type: String, require: false},
    source_url: {type: String, require: false},
    congressional_district: {type: String, require: false},
    gun_type: {type: String, require: false},
    incident_characteristics: {type: String, require: false},
    latitude: {type: String, require: false},
    location_description: {type: String, require: false},
    longitude: {type: String, require: false},
    n_guns_involved: {type: String, require: false},
    notes: {type: String, require: false},
    participant_age: {type: String, require: false}
});

mongoose.model('Incident', IncidentSchema);