import type { IUserRepository } from "src/infrastructure/IUserRepository";
export declare class ListUsersUseCase {
    private readonly repo;
    constructor(repo: IUserRepository);
    execute(page?: number, limit?: number): Promise<{
        data: import("../../entities/User").User[];
        total: number;
    }>;
}
