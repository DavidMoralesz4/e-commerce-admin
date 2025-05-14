import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: process.env.PORT,
  hostPg: process.env.PGHOST,
  portPg: process.env.PGPORT,
  userPg: process.env.PGUSER,
  passwordPg: process.env.PGPASSWORD,
  databasePg: process.env.PGDATABASE,
  databaseUrl: process.env.DATABASE_URL,

  // passwordDb: process.env.PASSWORD_DB,
  jwtSecret: process.env.JWT_SECRET,
  secrect_key: process.env.SECRET_KEY
};
