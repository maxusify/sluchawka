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
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumUserRoleFilter_1 = require("../inputs/EnumUserRoleFilter");
const PlaylistListRelationFilter_1 = require("../inputs/PlaylistListRelationFilter");
const SongListRelationFilter_1 = require("../inputs/SongListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserPostListRelationFilter_1 = require("../inputs/UserPostListRelationFilter");
const UserProfileCommentsListRelationFilter_1 = require("../inputs/UserProfileCommentsListRelationFilter");
const UserProfileRelationFilter_1 = require("../inputs/UserProfileRelationFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumUserRoleFilter_1.EnumUserRoleFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "picture", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileRelationFilter_1.UserProfileRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "profile", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostListRelationFilter_1.UserPostListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "createdPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCommentsListRelationFilter_1.UserProfileCommentsListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "createdComments", void 0);
__decorate([
    TypeGraphQL.Field(_type => PlaylistListRelationFilter_1.PlaylistListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "createdPlaylists", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongListRelationFilter_1.SongListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "createdSongs", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    TypeGraphQL.InputType("UserWhereInput", {
        isAbstract: true
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
//# sourceMappingURL=UserWhereInput.js.map