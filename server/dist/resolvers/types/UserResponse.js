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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
const type_graphql_1 = require("../../../prisma/generated/type-graphql");
const type_graphql_2 = require("type-graphql");
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_2.Field)((_) => type_graphql_1.User, { nullable: true }),
    __metadata("design:type", typeof (_a = typeof type_graphql_1.User !== "undefined" && type_graphql_1.User) === "function" ? _a : Object)
], UserResponse.prototype, "user", void 0);
__decorate([
    (0, type_graphql_2.Field)((_) => FieldError, { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
UserResponse = __decorate([
    (0, type_graphql_2.ObjectType)()
], UserResponse);
exports.UserResponse = UserResponse;
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_2.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_2.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_2.ObjectType)()
], FieldError);
//# sourceMappingURL=UserResponse.js.map