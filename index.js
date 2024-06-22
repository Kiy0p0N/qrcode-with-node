import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'

inquirer
  .prompt([{
    message: 'Write your URL: ',
    name: 'URL'
}])
  .then((answers) => {
    const url = answers.URL
    var qr_image = qr.image(url);
    qr_image.pipe(fs.createWriteStream('qr_image.png'));
    // Use user feedback for... whatever!!

    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});