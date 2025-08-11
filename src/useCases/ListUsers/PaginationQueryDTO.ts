import { Type } from "class-transformer";
import { IsInt, Max, Min } from "class-validator";

export class PaginationQueryDTO {

    @Type(() => Number)
    @Max(100)
    @Min(1)
    @IsInt()
    page = 1;

    @Type(() => Number)
    @Max(100)
    @Min(1)
    @IsInt()
    limit = 10;
}