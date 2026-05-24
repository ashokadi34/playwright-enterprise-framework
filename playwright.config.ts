import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  expect: {
    timeout: 15000
  },

  fullyParallel: true,

  retries: 1,

  reporter: [
    ['html']
  ],

  use: {

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ]
});