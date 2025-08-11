import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserDTO } from "./CreateUserDTO";

@Controller("users")
export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    @Post()
    async create(@Body() dto: CreateUserDTO): Promise<{ id: string; name: string; email: string }> {
        console.log('[DTO recebido]', dto.email, dto.name);
        const user = await this.createUserUseCase.execute(dto.name, dto.email);
        return {id: user.id, name: user.name, email: user.email};
    }
}