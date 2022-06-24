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
exports.UserProfileCommentsUpdateManyWithoutUserProfileInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserProfileCommentsCreateManyUserProfileInputEnvelope_1 = require("../inputs/UserProfileCommentsCreateManyUserProfileInputEnvelope");
const UserProfileCommentsCreateOrConnectWithoutUserProfileInput_1 = require("../inputs/UserProfileCommentsCreateOrConnectWithoutUserProfileInput");
const UserProfileCommentsCreateWithoutUserProfileInput_1 = require("../inputs/UserProfileCommentsCreateWithoutUserProfileInput");
const UserProfileCommentsScalarWhereInput_1 = require("../inputs/UserProfileCommentsScalarWhereInput");
const UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput_1 = require("../inputs/UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput");
const UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput_1 = require("../inputs/UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput");
const UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput_1 = require("../inputs/UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput");
const UserProfileCommentsWhereUniqueInput_1 = require("../inputs/UserProfileCommentsWhereUniqueInput");
let UserProfileCommentsUpdateManyWithoutUserProfileInput = class UserProfileCommentsUpdateManyWithoutUserProfileInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsCreateWithoutUserProfileInput_1.UserProfileCommentsCreateWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsCreateOrConnectWithoutUserProfileInput_1.UserProfileCommentsCreateOrConnectWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput_1.UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCommentsCreateManyUserProfileInputEnvelope_1.UserProfileCommentsCreateManyUserProfileInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput_1.UserProfileCommentsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput_1.UserProfileCommentsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput_1.UserProfileCommentsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput_1.UserProfileCommentsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput_1.UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput_1.UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserProfileCommentsScalarWhereInput_1.UserProfileCommentsScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCommentsUpdateManyWithoutUserProfileInput.prototype, "deleteMany", void 0);
UserProfileCommentsUpdateManyWithoutUserProfileInput = __decorate([
    TypeGraphQL.InputType("UserProfileCommentsUpdateManyWithoutUserProfileInput", {
        isAbstract: true
    })
], UserProfileCommentsUpdateManyWithoutUserProfileInput);
exports.UserProfileCommentsUpdateManyWithoutUserProfileInput = UserProfileCommentsUpdateManyWithoutUserProfileInput;
//# sourceMappingURL=UserProfileCommentsUpdateManyWithoutUserProfileInput.js.map