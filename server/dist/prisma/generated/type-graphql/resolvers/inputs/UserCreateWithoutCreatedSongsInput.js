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
exports.UserCreateWithoutCreatedSongsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PlaylistCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PlaylistCreateNestedManyWithoutAuthorInput");
const UserPostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/UserPostCreateNestedManyWithoutAuthorInput");
const UserProfileCommentsCreateNestedManyWithoutAuthorInput_1 = require("../inputs/UserProfileCommentsCreateNestedManyWithoutAuthorInput");
const UserProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/UserProfileCreateNestedOneWithoutUserInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateWithoutCreatedSongsInput = class UserCreateWithoutCreatedSongsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutCreatedSongsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutCreatedSongsInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRole_1.UserRole, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "picture", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutUserInput_1.UserProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "profile", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostCreateNestedManyWithoutAuthorInput_1.UserPostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "createdPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCommentsCreateNestedManyWithoutAuthorInput_1.UserProfileCommentsCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "createdComments", void 0);
__decorate([
    TypeGraphQL.Field(_type => PlaylistCreateNestedManyWithoutAuthorInput_1.PlaylistCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedSongsInput.prototype, "createdPlaylists", void 0);
UserCreateWithoutCreatedSongsInput = __decorate([
    TypeGraphQL.InputType("UserCreateWithoutCreatedSongsInput", {
        isAbstract: true
    })
], UserCreateWithoutCreatedSongsInput);
exports.UserCreateWithoutCreatedSongsInput = UserCreateWithoutCreatedSongsInput;
//# sourceMappingURL=UserCreateWithoutCreatedSongsInput.js.map