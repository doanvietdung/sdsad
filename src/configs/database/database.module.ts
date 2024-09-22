import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';;
import { DATABASE_CONFIG } from '../constant.config';
import { databaseProviders } from './database.providers';
import { join } from 'path';
import { PermissionEntity } from '../../api/permission/permission.entity';
import { RoleEntity } from '../../api/role/role.entity';
import { UserEntity } from '../../api/user/user.entity';
import { OrganizationEntity } from '../../api/organization/organization.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'master',
      useFactory: () => ({
        type: 'mysql',
        host: DATABASE_CONFIG.host,
        port: DATABASE_CONFIG.port,
        username: DATABASE_CONFIG.username,
        password: DATABASE_CONFIG.password,
        database: DATABASE_CONFIG.database,
        entities: [join(__dirname, '/../../api/**', '*.entity.{ts,js}')],
        migrations: [__dirname + '/../../migrations/*.ts'],
        autoLoadEntities: true,
        synchronize: false,
        logging: DATABASE_CONFIG.logging,
      }),
    }),
    TypeOrmModule.forRootAsync({
      name: 'slave',
      useFactory: () => ({
        type: 'mysql',
        host: DATABASE_CONFIG.host,
        port: DATABASE_CONFIG.port,
        username: DATABASE_CONFIG.username,
        database: 'family',
        entities: [join(__dirname, '/../../model/**', '*.entity.{ts,js}')],
        migrations: [__dirname + '/../../migrations/slave/*.ts'],
        autoLoadEntities: true,
        synchronize: false,
        logging: DATABASE_CONFIG.logging,
      }),
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
