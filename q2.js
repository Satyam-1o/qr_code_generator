import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
// var qr = require('qr-image');

inquirer
  .prompt([{
    message: "Type in your URL: ", 
    name: "URL"  
  }])
  .then((answers) => {
      const url = answers.URL;
      console.log(url);
      var qr_svg = qr.image(url );
      qr_svg.pipe(fs.createWriteStream('qr_code.png'));
      
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("QR-CODE CANT BE GENERATED")
    } else {
      // Something else went wrong
    }
  }); 