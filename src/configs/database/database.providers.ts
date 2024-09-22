import typeormConfig from '../typeorm.config';
import slaveConfig from '../slave.config';

export const databaseProviders = [
  {
    provide: 'MASTER',
    useFactory: async () => typeormConfig.initialize(),
  },
  {
    provide: 'SLAVE',
    useFactory: async () => slaveConfig.initialize(),
  },
];
