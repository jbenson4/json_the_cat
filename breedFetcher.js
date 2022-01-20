const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
const breed = args[0];
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;
const workingUrl = 'https://api.thecatapi.com/v1/breeds/search?name=sphynx';

const content = request(apiUrl, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
  
})