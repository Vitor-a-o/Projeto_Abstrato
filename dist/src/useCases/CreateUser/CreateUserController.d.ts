import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserDTO } from "./CreateUserDTO";
export declare class CreateUserController {
    private readonly createUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase);
    create(dto: CreateUserDTO): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
}
