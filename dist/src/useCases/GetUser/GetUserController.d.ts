import { GetUserUseCase } from './GetUserUseCase';
export declare class GetUserController {
    private readonly getUserUseCase;
    constructor(getUserUseCase: GetUserUseCase);
    get(id: string): Promise<import("../../entities/User").User>;
}
