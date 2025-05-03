import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  passwordDb: process.env.PASSWORD_DB,
  secrect_key: process.env.SECRET_KEY
};
