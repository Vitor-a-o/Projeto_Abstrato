import { Controller, Get, Param } from '@nestjs/common';
import { GetUserUseCase } from './GetUserUseCase';

@Controller('users')
export class GetUserController {
    constructor(private readonly getUserUseCase: GetUserUseCase) {}

    @Get(':id')
    get(@Param('id') id: string) {
        return this.getUserUseCase.execute(id);
    }
}