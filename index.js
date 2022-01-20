const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);
const request = require('request');
const breedName = args[0];
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;

fetchBreedDescription(apiUrl, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});