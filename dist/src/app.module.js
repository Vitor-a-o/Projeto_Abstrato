"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const CreateUserController_1 = require("./useCases/CreateUser/CreateUserController");
const CreateUserUseCase_1 = require("./useCases/CreateUser/CreateUserUseCase");
const IUserRepository_1 = require("./infrastructure/IUserRepository");
const PrismaService_1 = require("./infrastructure/PrismaService");
const UsersPrismaRepository_1 = require("./infrastructure/implementations/UsersPrismaRepository");
const ListUsersController_1 = require("./useCases/ListUsers/ListUsersController");
const GetUserController_1 = require("./useCases/GetUser/GetUserController");
const GetUserUseCase_1 = require("./useCases/GetUser/GetUserUseCase");
const ListUsersUseCase_1 = require("./useCases/ListUsers/ListUsersUseCase");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [CreateUserController_1.CreateUserController, ListUsersController_1.ListUsersController, GetUserController_1.GetUserController],
        providers: [
            PrismaService_1.PrismaService,
            {
                provide: IUserRepository_1.IUSER_REPOSITORY,
                useClass: UsersPrismaRepository_1.UsersPrismaRepository,
            },
            CreateUserUseCase_1.CreateUserUseCase,
            ListUsersUseCase_1.ListUsersUseCase,
            GetUserUseCase_1.GetUserUseCase,
        ],
        exports: [CreateUserUseCase_1.CreateUserUseCase],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map