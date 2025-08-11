import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "src/entities/User";
import type { IUserRepository } from "src/infrastructure/IUserRepository";
import { Inject } from "@nestjs/common";
import { IUSER_REPOSITORY } from "src/infrastructure/IUserRepository";

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject(IUSER_REPOSITORY)
        private readonly repo: IUserRepository
    ) {}

    async execute(name: string, email: string){
        const normalizedEmail = email?.trim().toLowerCase();
        if (!normalizedEmail) {
            throw new BadRequestException("Email is required.");
        }
        if (await this.repo.findByEmail(normalizedEmail)) {
            throw new BadRequestException("User with this email already exists.");
        }

        const user = new User({ name: name.trim(), email: normalizedEmail });
        await this.repo.create(user);
        return user;
    }
}