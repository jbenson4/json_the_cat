const request = require('request');

const fetchBreedDescription = function(breedNameUrl, callback) {
  request(breedNameUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];

    if (!breed) {
      callback('Breed not found.', null);
      return;
    }
    
    callback(null, breed.description);
  });
};

module.exports = { fetchBreedDescription };