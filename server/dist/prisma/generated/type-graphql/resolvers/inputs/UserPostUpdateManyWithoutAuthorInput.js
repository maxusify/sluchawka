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
exports.UserPostUpdateManyWithoutAuthorInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserPostCreateManyAuthorInputEnvelope_1 = require("../inputs/UserPostCreateManyAuthorInputEnvelope");
const UserPostCreateOrConnectWithoutAuthorInput_1 = require("../inputs/UserPostCreateOrConnectWithoutAuthorInput");
const UserPostCreateWithoutAuthorInput_1 = require("../inputs/UserPostCreateWithoutAuthorInput");
const UserPostScalarWhereInput_1 = require("../inputs/UserPostScalarWhereInput");
const UserPostUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/UserPostUpdateManyWithWhereWithoutAuthorInput");
const UserPostUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/UserPostUpdateWithWhereUniqueWithoutAuthorInput");
const UserPostUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/UserPostUpsertWithWhereUniqueWithoutAuthorInput");
const UserPostWhereUniqueInput_1 = require("../inputs/UserPostWhereUniqueInput");
let UserPostUpdateManyWithoutAuthorInput = class UserPostUpdateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserPostCreateWithoutAuthorInput_1.UserPostCreateWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostCreateOrConnectWithoutAuthorInput_1.UserPostCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostUpsertWithWhereUniqueWithoutAuthorInput_1.UserPostUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostCreateManyAuthorInputEnvelope_1.UserPostCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostWhereUniqueInput_1.UserPostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostWhereUniqueInput_1.UserPostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostWhereUniqueInput_1.UserPostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostWhereUniqueInput_1.UserPostWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostUpdateWithWhereUniqueWithoutAuthorInput_1.UserPostUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostUpdateManyWithWhereWithoutAuthorInput_1.UserPostUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserPostScalarWhereInput_1.UserPostScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
UserPostUpdateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("UserPostUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], UserPostUpdateManyWithoutAuthorInput);
exports.UserPostUpdateManyWithoutAuthorInput = UserPostUpdateManyWithoutAuthorInput;
//# sourceMappingURL=UserPostUpdateManyWithoutAuthorInput.js.map