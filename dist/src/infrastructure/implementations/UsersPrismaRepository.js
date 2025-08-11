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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const User_1 = require("../../entities/User");
const PrismaService_1 = require("../PrismaService");
let UsersPrismaRepository = class UsersPrismaRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByEmail(email) {
        const u = await this.prisma.user.findUnique({ where: { email } });
        return u ? new User_1.User({ id: u.id, name: u.name, email: u.email, createdAt: u.createdAt, updatedAt: u.updatedAt }) : null;
    }
    async create(user) {
        const created = await this.prisma.user.create({
            data: { name: user.name, email: user.email, id: user.id }
        });
        return new User_1.User({ id: created.id, name: created.name, email: created.email, createdAt: created.createdAt, updatedAt: created.updatedAt });
    }
    async findById(id) {
        const u = await this.prisma.user.findUnique({ where: { id } });
        return u ? new User_1.User({ id: u.id, name: u.name, email: u.email, createdAt: u.createdAt, updatedAt: u.updatedAt }) : null;
    }
    async list(params) {
        const users = await this.prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            skip: params.skip,
            take: params.take
        });
        return users.map(u => new User_1.User({ id: u.id, name: u.name, email: u.email, createdAt: u.createdAt, updatedAt: u.updatedAt }));
    }
    async count() {
        return this.prisma.user.count();
    }
};
exports.UsersPrismaRepository = UsersPrismaRepository;
exports.UsersPrismaRepository = UsersPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], UsersPrismaRepository);
//# sourceMappingURL=UsersPrismaRepository.js.map