import { join } from 'path'
require('dotenv').config();

const connectionOptions = {
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["dist/**/**.entity{.ts,.js}"],
    synchronize: true, //Setting synchronize: true shouldn't be used in production - and I`m not using migrations
    dropSchema: false,
    dropTable: false,
    migrationsRun: false, // Run migrations automatically, you can disable this if you prefer running migration manually.
    logging: ['warn', 'error'],
    migrations: [
        join(__dirname, 'migrations/*{.ts,.js}')
    ],
    cli: {
        migrationsDir: 'src/migrations'
    }
}
export default connectionOptions;