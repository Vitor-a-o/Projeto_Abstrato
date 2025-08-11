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
exports.GetUserController = void 0;
const common_1 = require("@nestjs/common");
const GetUserUseCase_1 = require("./GetUserUseCase");
let GetUserController = class GetUserController {
    getUserUseCase;
    constructor(getUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }
    get(id) {
        return this.getUserUseCase.execute(id);
    }
};
exports.GetUserController = GetUserController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GetUserController.prototype, "get", null);
exports.GetUserController = GetUserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [GetUserUseCase_1.GetUserUseCase])
], GetUserController);
//# sourceMappingURL=GetUserController.js.map