"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPostUpdateManyWithoutUserProfileInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserPostCreateManyUserProfileInputEnvelope_1 = require("../inputs/UserPostCreateManyUserProfileInputEnvelope");
const UserPostCreateOrConnectWithoutUserProfileInput_1 = require("../inputs/UserPostCreateOrConnectWithoutUserProfileInput");
const UserPostCreateWithoutUserProfileInput_1 = require("../inputs/UserPostCreateWithoutUserProfileInput");
const UserPostScalarWhereInput_1 = require("../inputs/UserPostScalarWhereInput");
const UserPostUpdateManyWithWhereWithoutUserProfileInput_1 = require("../inputs/UserPostUpdateManyWithWhereWithoutUserProfileInput");
const UserPostUpdateWithWhereUniqueWithoutUserProfileInput_1 = require("../inputs/UserPostUpdateWithWhereUniqueWithoutUserProfileInput");
const UserPostUpsertWithWhereUniqueWithoutUserProfileInput_1 = require("../inputs/UserPostUpsertWithWhereUniqueWithoutUserProfileInput");
const UserPostWhereUniqueInput_1 = require("../inputs/UserPostWhereUniqueInput");
let UserPostUpdateManyWithoutUserProfileInput = class UserPostUpdateManyWithoutUserProfileInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserPostCreateWithoutUserProfileInput_1.UserPostCreateWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostCreateOrConnectWithoutUserProfileInput_1.UserPostCreateOrConnectWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostUpsertWithWhereUniqueWithoutUserProfileInput_1.UserPostUpsertWithWhereUniqueWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostCreateManyUserProfileInputEnvelope_1.UserPostCreateManyUserProfileInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostWhereUniqueInput_1.UserPostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostWhereUniqueInput_1.UserPostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostWhereUniqueInput_1.UserPostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostWhereUniqueInput_1.UserPostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostUpdateWithWhereUniqueWithoutUserProfileInput_1.UserPostUpdateWithWhereUniqueWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostUpdateManyWithWhereWithoutUserProfileInput_1.UserPostUpdateManyWithWhereWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostScalarWhereInput_1.UserPostScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutUserProfileInput.prototype, "deleteMany", void 0);
UserPostUpdateManyWithoutUserProfileInput = __decorate([
    TypeGraphQL.InputType("UserPostUpdateManyWithoutUserProfileInput", {
        isAbstract: true
    })
], UserPostUpdateManyWithoutUserProfileInput);
exports.UserPostUpdateManyWithoutUserProfileInput = UserPostUpdateManyWithoutUserProfileInput;
//# sourceMappingURL=UserPostUpdateManyWithoutUserProfileInput.js.map