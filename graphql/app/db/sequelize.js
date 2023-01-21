import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'

const env = dotenv.config({path: process.cwd()+'/env/.env'});
const sequelize = new Sequelize(
    env.parsed.RDB_DB_DATABASE,
    env.parsed.RDB_DB_USER,
    env.parsed.RDB_DB_PASS,
    {
        // 接続先ホストを指定
        host: env.parsed.RDB_DB_ENDPOINT,
        port: env.parsed.RDB_DB_PORT,

        // logging: console.log,
        maxConcurrentQueries: 100,

        // 使用する DB 製品を指定
        dialect: 'postgres',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
            acquire: 20000
        }
    }
);

export default sequelize;