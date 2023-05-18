const fs = require('fs');
const request = require('request');

const url = 'http://www.example.edu/';
const filePath = './index.html';

const fetcher = function(url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    } else if (response.statusCode !== 200) {
      console.log('Error:', response.statusCode);
    } else {
      fs.writeFile(filePath, body, (error) => {
        if (error) {
          console.log('Error:', error);
        } else {
          const fileSize = fs.statSync(filePath).size;
          console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
        }
      });
    }
  });
};

fetcher(url, filePath);
