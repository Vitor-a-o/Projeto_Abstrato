import { Controller, Get, Query } from "@nestjs/common";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { PaginationQueryDTO } from "./PaginationQueryDTO";

@Controller('users')
export class ListUsersController {
    constructor(private readonly listUsersUseCase: ListUsersUseCase) {}

    @Get()
    list(@Query() query: PaginationQueryDTO) {
        return this.listUsersUseCase.execute(query.page, query.limit);
    }
}