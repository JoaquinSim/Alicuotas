import {DataSource} from 'typeorm';
import {
    UserEntity,
} from '@auth/entities';
import {ConfigEnum, AuthRepositoryEnum} from '@shared/enums';
import { TransactionalCodeEntity } from '../entities/transicinal';

export const authProviders = [
    {
        provide: AuthRepositoryEnum.USER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
        inject: [DataSource],
    },
    {
        provide: AuthRepositoryEnum.TRANSACTIONAL_CODE_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TransactionalCodeEntity),
        inject: [DataSource],
    },
];