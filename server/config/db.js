import { createPool } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default connection.promise();
