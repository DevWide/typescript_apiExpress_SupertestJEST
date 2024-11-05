import request, { Test } from 'supertest';
import app from './app';

function makeRequest(
  method: 'get' | 'post',
  endpoint: string,
  requestData?: object
): Test {
  if (method === 'get') {
    return request(app).get(endpoint);
  } else if (method === 'post') {
    return request(app).post(endpoint).send(requestData);
  } else {
    throw new Error(`HTTP method not supported: ${method}`);
  }
}

describe('API Tests', () => {
  it('GET /api/users - should return status 200 and a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it.each([
    [
      'POST /api/users - should return status 201 when creating a new user',
      '/api/users',
      'post',
      { name: 'João', email: 'joao@example.com' },
      201,
      { name: 'João', email: 'joao@example.com' }
    ],
    [
      'POST /api/users - should return status 400 if data is incomplete',
      '/api/users',
      'post',
      {}, 
      400,
      { error: 'Incomplete data' }
    ],
    [
      'GET /api/users/:id - should return status 404 for a non-existent user',
      '/api/users/999',
      'get',
      undefined, 
      404,
      { error: 'User not found' }
    ]
  ])('%#', async (_, endpoint, method, requestData, expectedStatus, expectedBody) => {
    const response = await makeRequest(method as 'get' | 'post', endpoint, requestData);

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toMatchObject(expectedBody);
  });
});

