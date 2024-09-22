import { IRole } from '../../role/role.interface';

export interface JwtPayload {
  sub: string;
  email: string;
  fullName: string;
  isSuperAdmin?: boolean;
  iat?: string;
  roles?: IRole[];
}

export interface JwtRefreshTokenPayload {
  userId: string;
}
