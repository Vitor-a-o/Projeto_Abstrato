import type { IUserRepository } from "src/infrastructure/IUserRepository";
export declare class GetUserUseCase {
    private readonly repo;
    constructor(repo: IUserRepository);
    execute(id: string): Promise<import("../../entities/User").User>;
}
