import express from 'express';
import imageHandler from '../../utilities/images';
import fs from 'fs';

const imageRouter = express.Router();

export interface GetImageQuery {
  filename: string;
  width: string;
  height: string;
}

imageRouter.get('/get', async (req, res) => {
  const { filename, width, height } = req.query as unknown as GetImageQuery;
  if (!filename) {
    res.send(
      'The following error occured processing image, 【Error】Input file is missing'
    );
    return;
  }

  const path = await imageHandler(filename, width, height);
  if (path === '') {
    res.send('Please check the filename is corrected...');
    return;
  }

  fs.readFile(path, function (err, data) {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data); // Send the file data to the browser.
  });
});

export default imageRouter;
