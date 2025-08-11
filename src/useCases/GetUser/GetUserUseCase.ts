import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IUSER_REPOSITORY } from "src/infrastructure/IUserRepository";
import type { IUserRepository } from "src/infrastructure/IUserRepository";

@Injectable()
export class GetUserUseCase {
    constructor(@Inject(IUSER_REPOSITORY) private readonly repo: IUserRepository) {}

    async execute(id: string) {
        const user = await this.repo.findById(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }
        return user;
    }
}