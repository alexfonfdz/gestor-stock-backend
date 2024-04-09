import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const MONGO_URL = process.env.MONGO_URL;

export const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

export const SECRET = process.env.SECRET;