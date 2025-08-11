import { User } from "src/entities/User";
import type { IUserRepository } from "src/infrastructure/IUserRepository";
export declare class CreateUserUseCase {
    private readonly repo;
    constructor(repo: IUserRepository);
    execute(name: string, email: string): Promise<User>;
}
