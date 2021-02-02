import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, createConnection } from 'mongoose';
import { Container } from 'typedi';

import { env } from '../../src/env';

declare type LoggerOptions = boolean | 'all' | Array<('query' | 'schema' | 'error' | 'warn' | 'info' | 'log' | 'migration')>;

const mongod = new MongoMemoryServer();

export const createDatabaseConnection = async (): Promise<Connection> => {
    const uri = await mongod.getUri();

    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
    };

    // useContainer(Container);
    const connection = await createConnection(uri, mongooseOpts);
    return connection;
};

// export const synchronizeDatabase = async (connection: Connection) => {
//     await connection.dropDatabase();
//     return connection.synchronize(true);
// };

// export const migrateDatabase = async (connection: Connection) => {
//     await connection.dropDatabase();
//     return connection.runMigrations();
// };

export const closeDatabase = async (connection: Connection) => {
    await connection.dropDatabase();
    await connection.close();
    await mongod.stop();
};
