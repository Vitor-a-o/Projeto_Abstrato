import { ListUsersUseCase } from "./ListUsersUseCase";
import { PaginationQueryDTO } from "./PaginationQueryDTO";
export declare class ListUsersController {
    private readonly listUsersUseCase;
    constructor(listUsersUseCase: ListUsersUseCase);
    list(query: PaginationQueryDTO): Promise<{
        data: import("../../entities/User").User[];
        total: number;
    }>;
}
