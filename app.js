var request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=3402DC%20aldrinhof%205%20ijsselstein',
    json: true
}, (error, response, body) => {
    console.log(body);
});
