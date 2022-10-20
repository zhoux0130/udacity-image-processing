import express from 'express';
import imageHandler from '../../utilities/images';
import fs from 'fs';

const imageRouter = express.Router();

export interface GetImageQuery {
  filename: string;
  width: string;
  height: string;
}

imageRouter.get('/get', async (req: express.Request, res: express.Response) => {
  const { filename, width, height } = req.query as unknown as GetImageQuery;
  if(!filename || !width || !height){
    res.send('Make sure you input the right params.The correct params look like filename=?&heigh=?&width=?')
    return
  }
  //handle invalid height or width
  const heightNum: number = Number(height)
  const widthNum: number = Number(width)
  if(isNaN(heightNum) || heightNum <= 0){
      res.send('The height params should be a positive int number!')
      return
  }
  if(isNaN(widthNum) || widthNum <= 0){
    res.send('The width params should be a positive int number!')
    return
    }

  const path = await imageHandler(filename, width, height);
  //handle invalid filename
  if (path === '') {
    res.send('Make sure you input the right filename. The supported filenames include APP2, APP4');
    return;
  }

  fs.readFile(path, function (err, data) {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data); // Send the file data to the browser.
  });
});

export default imageRouter;
