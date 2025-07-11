

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'; 

inquirer
  .prompt([
    {
     message: 'Type in the URL',
      name: "URL"
    }
  ])
  .then((answers) => {
    console.log(answers.URL);
    const u = answers.URL;

    var qr_svg = qr.image(u);
    qr_svg.pipe(fs.createWriteStream('qr.png'));

fs.writeFile('url.txt', u, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});



        
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  