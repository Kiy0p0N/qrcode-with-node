import express from 'express';
import bodyParser from 'body-parser';

import qr from 'qr-image';
import fs from 'fs';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Defining __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', {
    text_qr_code: null,
    img_src: null
  });
});

app.post('/post', (req, res) => {
  const text_qr_code = 'Your qr code is:';

  const url = req.body.url;
  // Path to save the image within 'public/images'
  const qrImagePath = path.join(__dirname, 'public', 'images', 'qr-code.png');

  var qr_image = qr.image(url);

  // Save the image in the 'public/images' folder
  qr_image.pipe(fs.createWriteStream(qrImagePath));

  // Image path to be used in HTML
  const img_src = '/images/qr-code.png';

  res.render('index', {
    text_qr_code,
    img_src
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});