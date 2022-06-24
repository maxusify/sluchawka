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
exports.UserUpdateWithoutCreatedPlaylistsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumUserRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumUserRoleFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SongUpdateManyWithoutAuthorInput_1 = require("../inputs/SongUpdateManyWithoutAuthorInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserPostUpdateManyWithoutAuthorInput_1 = require("../inputs/UserPostUpdateManyWithoutAuthorInput");
const UserProfileCommentsUpdateManyWithoutAuthorInput_1 = require("../inputs/UserProfileCommentsUpdateManyWithoutAuthorInput");
const UserProfileUpdateOneWithoutUserInput_1 = require("../inputs/UserProfileUpdateOneWithoutUserInput");
let UserUpdateWithoutCreatedPlaylistsInput = class UserUpdateWithoutCreatedPlaylistsInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileUpdateOneWithoutUserInput_1.UserProfileUpdateOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "profile", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostUpdateManyWithoutAuthorInput_1.UserPostUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "createdPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCommentsUpdateManyWithoutAuthorInput_1.UserProfileCommentsUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "createdComments", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongUpdateManyWithoutAuthorInput_1.SongUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutCreatedPlaylistsInput.prototype, "createdSongs", void 0);
UserUpdateWithoutCreatedPlaylistsInput = __decorate([
    TypeGraphQL.InputType("UserUpdateWithoutCreatedPlaylistsInput", {
        isAbstract: true
    })
], UserUpdateWithoutCreatedPlaylistsInput);
exports.UserUpdateWithoutCreatedPlaylistsInput = UserUpdateWithoutCreatedPlaylistsInput;
//# sourceMappingURL=UserUpdateWithoutCreatedPlaylistsInput.js.map