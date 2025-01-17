//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf-8'));

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    header: {
        'Accept': 'application/json'
    }
}

/* GET Travel View */
const travel = async function(req, res, next) {
    await fetch(tripsEndpoint, options)
    .then(res => res.json())
    .then(json => {
        let message = null;
        if(!(json instanceof Array)) {
            message = 'API lookup error';
            json = [];
        } else {
            if(!json.length){
                message = 'No trips exist in our database!';
            }
        }
        res.render('travel', {title: 'Travlr Getaways', trips: json, message});
    }).catch(err => res.status(500).send(e.message));
};

module.exports = {
    travel
};