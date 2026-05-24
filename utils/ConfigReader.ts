import dotenv from 'dotenv';

dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.APP_USERNAME || '',
  password: process.env.APP_PASSWORD || ''
};