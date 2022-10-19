import { existsSync } from 'fs';
import sharp from 'sharp';
const assetsOriginPath = './assets/origin/';
const assetsThumbPath = './assets/thumb/';

const imageHandler = async (
  filename: string,
  width: string,
  height: string
): Promise<string> => {
  const fullFilename = assetsOriginPath + filename + '.png';
  const thumbFile =
    assetsThumbPath + filename + '_' + width + '@' + height + '.png';

  // check if the origin image exist
  if (!existsSync(fullFilename)) {
    return '';
  }

  //add cache
  //If the same size image already existed, we use the existing image.
  //Or I will use sharp lib to resizing image and save it to local
  if (existsSync(thumbFile)) {
    return thumbFile;
  }

  //use sharp lib, resize image and save it to thumb folder
  await sharp(fullFilename)
    .resize({
      width: parseInt(width),
      height: parseInt(height),
    })
    .toFile(thumbFile);

  return thumbFile;
};

export default imageHandler;
