import { Injectable } from "@nestjs/common";
import type { IUserRepository } from "../IUserRepository";
import { User as DomainUser } from "src/entities/User";
import { PrismaService } from "../PrismaService";


@Injectable()
export class UsersPrismaRepository implements IUserRepository{
    constructor(private readonly prisma: PrismaService) {}

    async findByEmail(email: string) {
        const u = await this.prisma.user.findUnique({where: {email}})
        return u ? new DomainUser({ id: u.id, name: u.name, email: u.email, createdAt: u.createdAt, updatedAt: u.updatedAt }) : null;
    }

    async create(user: DomainUser): Promise<DomainUser> {
        const created = await this.prisma.user.create({
            data: { name: user.name, email: user.email, id: user.id }
        });

        return new DomainUser({ id: created.id, name: created.name, email: created.email, createdAt: created.createdAt, updatedAt: created.updatedAt });
    }

    async findById(id: string): Promise<DomainUser | null> {
        const u = await this.prisma.user.findUnique({ where: { id } });
        return u ? new DomainUser({ id: u.id, name: u.name, email: u.email, createdAt: u.createdAt, updatedAt: u.updatedAt }) : null;
    }

    async list(params: { skip: number; take: number }): Promise<DomainUser[]> {
        const users = await this.prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            skip: params.skip,
            take: params.take
        });

        return users.map(u => new DomainUser({ id: u.id, name: u.name, email: u.email, createdAt: u.createdAt, updatedAt: u.updatedAt }));
    }

    async count(): Promise<number> {
        return this.prisma.user.count();
    }
}