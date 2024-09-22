import { DataSource } from 'typeorm';
import { DATABASE_CONFIG } from './constant.config';
import { join } from 'path';
export default new DataSource({
  type: 'mysql',
  name: 'master',
  host: DATABASE_CONFIG.host,
  port: DATABASE_CONFIG.port,
  username: DATABASE_CONFIG.username,
  password: DATABASE_CONFIG.password,
  database: DATABASE_CONFIG.database,
  entities: [join(__dirname, '/../api/**', '*.entity.{ts,js}')],
  migrations: [__dirname + '/../../migrations/*.ts'],
  synchronize: false,
  logging: DATABASE_CONFIG.logging,
});
