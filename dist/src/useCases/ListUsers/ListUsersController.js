"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersController = void 0;
const common_1 = require("@nestjs/common");
const ListUsersUseCase_1 = require("./ListUsersUseCase");
const PaginationQueryDTO_1 = require("./PaginationQueryDTO");
let ListUsersController = class ListUsersController {
    listUsersUseCase;
    constructor(listUsersUseCase) {
        this.listUsersUseCase = listUsersUseCase;
    }
    list(query) {
        return this.listUsersUseCase.execute(query.page, query.limit);
    }
};
exports.ListUsersController = ListUsersController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PaginationQueryDTO_1.PaginationQueryDTO]),
    __metadata("design:returntype", void 0)
], ListUsersController.prototype, "list", null);
exports.ListUsersController = ListUsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [ListUsersUseCase_1.ListUsersUseCase])
], ListUsersController);
//# sourceMappingURL=ListUsersController.js.map