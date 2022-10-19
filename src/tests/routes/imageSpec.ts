import supertest from 'supertest';
import app from '../..';

const request = supertest(app);
describe('Image Route Test suite', () => {
  it('check the api/image endpoint work', async () => {
    const response = await request.get('/api/image/get');
    expect(response.status).toBe(200);
  });
});
