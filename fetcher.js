const request = require('request');
const fs = require('fs');
const url = process.argv[2]; //command line 1st argument
const path = process.argv[3]; //command line 2nd argument


request(url, (error, response, body) => {
  if (!error) {
    fs.writeFile(path, body, (err) => {
      if (err) {
        console.log('statusCode:', response && response.statusCode);
        console.log('Could not save file.');
      } else {
        console.log(`File saved! Downloaded ${body.length} bytes to ${path}`); //body.length shows body size from url
      }
    });
  } else {
    console.log(`Failed to Download. ${error}`);
  }
});