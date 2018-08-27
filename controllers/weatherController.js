const rp = require('request-promise');
const { darkskyApiKey } = require('../config/env');

function forecast(req, res, next) {
  const qs = req.query;
  rp({
    method: 'GET',
    url: `https://api.darksky.net/forecast/${darkskyApiKey}/${qs.lat},${qs.lon}`,
    json: true
  })
    .then(response => res.json(response.currently))
    .catch(next);
}

module.exports = { forecast };
