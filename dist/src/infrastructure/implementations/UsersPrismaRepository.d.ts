import type { IUserRepository } from "../IUserRepository";
import { User as DomainUser } from "src/entities/User";
import { PrismaService } from "../PrismaService";
export declare class UsersPrismaRepository implements IUserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<DomainUser | null>;
    create(user: DomainUser): Promise<DomainUser>;
    findById(id: string): Promise<DomainUser | null>;
    list(params: {
        skip: number;
        take: number;
    }): Promise<DomainUser[]>;
    count(): Promise<number>;
}
