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
exports.UserCreateWithoutCreatedPlaylistsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SongCreateNestedManyWithoutAuthorInput_1 = require("../inputs/SongCreateNestedManyWithoutAuthorInput");
const UserPostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/UserPostCreateNestedManyWithoutAuthorInput");
const UserProfileCommentsCreateNestedManyWithoutAuthorInput_1 = require("../inputs/UserProfileCommentsCreateNestedManyWithoutAuthorInput");
const UserProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/UserProfileCreateNestedOneWithoutUserInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateWithoutCreatedPlaylistsInput = class UserCreateWithoutCreatedPlaylistsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRole_1.UserRole, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "picture", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutUserInput_1.UserProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "profile", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostCreateNestedManyWithoutAuthorInput_1.UserPostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "createdPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCommentsCreateNestedManyWithoutAuthorInput_1.UserProfileCommentsCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "createdComments", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCreateNestedManyWithoutAuthorInput_1.SongCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutCreatedPlaylistsInput.prototype, "createdSongs", void 0);
UserCreateWithoutCreatedPlaylistsInput = __decorate([
    TypeGraphQL.InputType("UserCreateWithoutCreatedPlaylistsInput", {
        isAbstract: true
    })
], UserCreateWithoutCreatedPlaylistsInput);
exports.UserCreateWithoutCreatedPlaylistsInput = UserCreateWithoutCreatedPlaylistsInput;
//# sourceMappingURL=UserCreateWithoutCreatedPlaylistsInput.js.map