import { test, expect } from '@playwright/test';

test('GET API Test', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.name).toBe('Leanne Graham');

});