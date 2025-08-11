import { Inject, Injectable } from "@nestjs/common";
import { IUSER_REPOSITORY } from "src/infrastructure/IUserRepository";
import type { IUserRepository } from "src/infrastructure/IUserRepository";

@Injectable()
export class ListUsersUseCase {
    constructor(@Inject(IUSER_REPOSITORY) private readonly repo: IUserRepository) {}

    async execute(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const take = Math.min(Math.max(limit, 1), 100);

        const [data, total] = await Promise.all([
            this.repo.list({ skip, take }),
            this.repo.count()
        ]);

        return { data, total };
    }
}