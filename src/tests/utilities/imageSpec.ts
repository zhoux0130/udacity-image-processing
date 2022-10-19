import imageHandler from '../../utilities/images';

describe('image handle unit testing suite', () => {
  it('check origin file not exist', async () => {
    const thumbPath = await imageHandler('APP3', '100', '100');
    expect(thumbPath).toEqual('');
  });

  it('check using caching', async () => {
    const thumbPath = await imageHandler('APP2', '100', '100');
    expect(thumbPath).toEqual('./assets/thumb/APP2_100@100.png');
  });
});
