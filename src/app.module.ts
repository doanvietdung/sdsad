import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './api/user/user.module';
import { DatabaseModule } from './configs/database/database.module';
import { PermissionModule } from './api/permission/permission.module';
import { AuthModule } from './api/auth/auth.module';
import { RoleModule } from './api/role/role.module';
import { OrganizationModule } from './api/organization/organization.module';
import { LoggerMiddleware } from './share/middlewares/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    PermissionModule,
    RoleModule,
    UserModule,
    AuthModule,
    OrganizationModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
