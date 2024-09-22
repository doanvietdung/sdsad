import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { RoleEntity } from '../role/role.entity';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity], 'master')],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}