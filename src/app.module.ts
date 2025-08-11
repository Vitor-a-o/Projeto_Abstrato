import { Module } from '@nestjs/common';
import { CreateUserController } from './useCases/CreateUser/CreateUserController';
import { CreateUserUseCase } from './useCases/CreateUser/CreateUserUseCase';
import { IUSER_REPOSITORY} from './infrastructure/IUserRepository';
import { PrismaService } from './infrastructure/PrismaService';
import { UsersPrismaRepository } from './infrastructure/implementations/UsersPrismaRepository';
import { ListUsersController } from './useCases/ListUsers/ListUsersController';
import { GetUserController } from './useCases/GetUser/GetUserController';
import { GetUserUseCase } from './useCases/GetUser/GetUserUseCase';
import { ListUsersUseCase } from './useCases/ListUsers/ListUsersUseCase';


@Module({
  controllers: [CreateUserController, ListUsersController, GetUserController],
  providers: [
    PrismaService,
    {
      provide: IUSER_REPOSITORY,
      useClass: UsersPrismaRepository,
    },
    CreateUserUseCase,
    ListUsersUseCase,
    GetUserUseCase,
  ],
  exports: [CreateUserUseCase],
})
export class AppModule {}
