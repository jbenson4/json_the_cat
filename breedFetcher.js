const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
  request(apiUrl, (error, response, body) => {
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