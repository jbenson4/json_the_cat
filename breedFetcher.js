const args = process.argv.slice(2);
const request = require('request');
const breed = args[0];
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;

const content = request(apiUrl, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    return;
  }
  const data = JSON.parse(body);
  if (data.message) {
    console.log(data.message);
    return;
  }
  if (data[0] === undefined) {
    console.log('Breed not found. Please ensure proper spelling and try again.');
    return;
  }
  console.log(data[0].description);
});