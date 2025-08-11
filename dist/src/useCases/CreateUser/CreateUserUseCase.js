"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const User_1 = require("../../entities/User");
const common_2 = require("@nestjs/common");
const IUserRepository_1 = require("../../infrastructure/IUserRepository");
let CreateUserUseCase = class CreateUserUseCase {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(name, email) {
        const normalizedEmail = email?.trim().toLowerCase();
        if (!normalizedEmail) {
            throw new common_1.BadRequestException("Email is required.");
        }
        if (await this.repo.findByEmail(normalizedEmail)) {
            throw new common_1.BadRequestException("User with this email already exists.");
        }
        const user = new User_1.User({ name: name.trim(), email: normalizedEmail });
        await this.repo.create(user);
        return user;
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_2.Inject)(IUserRepository_1.IUSER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CreateUserUseCase);
//# sourceMappingURL=CreateUserUseCase.js.map