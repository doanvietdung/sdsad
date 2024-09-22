import { DataSource } from 'typeorm';
import { DATABASE_CONFIG } from './constant.config';

export default new DataSource({
  type: 'mysql',
  host: DATABASE_CONFIG.host,
  port: DATABASE_CONFIG.port,
  username: 'root',
  database: 'family',
  entities: [__dirname + '/../api/model/slave/*.ts'],
  migrations: [__dirname + '/../../migrations/slave/*.ts'],
  synchronize: false,
  logging: DATABASE_CONFIG.logging,
});
