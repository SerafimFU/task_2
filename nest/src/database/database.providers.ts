import { DataSource } from 'typeorm'
import { Users } from './users/users.entity'

/* Установка соединения с базой данных */

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'host.docker.internal',
        port: 33306,
        username: 'user',
        password: 'secret',
        database: 'test',
        entities: [Users],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];