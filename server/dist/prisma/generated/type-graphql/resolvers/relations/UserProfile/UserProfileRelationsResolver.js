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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_1 = require("../../../models/User");
const UserFavoritePlaylists_1 = require("../../../models/UserFavoritePlaylists");
const UserFavoriteSongs_1 = require("../../../models/UserFavoriteSongs");
const UserPost_1 = require("../../../models/UserPost");
const UserProfile_1 = require("../../../models/UserProfile");
const UserProfileComments_1 = require("../../../models/UserProfileComments");
const UserProfileCommentsArgs_1 = require("./args/UserProfileCommentsArgs");
const UserProfilePostsArgs_1 = require("./args/UserProfilePostsArgs");
const helpers_1 = require("../../../helpers");
let UserProfileRelationsResolver = class UserProfileRelationsResolver {
    async user(userProfile, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.findUnique({
            where: {
                id: userProfile.id,
            },
        }).user({});
    }
    async favSongs(userProfile, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.findUnique({
            where: {
                id: userProfile.id,
            },
        }).favSongs({});
    }
    async favPlaylists(userProfile, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.findUnique({
            where: {
                id: userProfile.id,
            },
        }).favPlaylists({});
    }
    async posts(userProfile, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.findUnique({
            where: {
                id: userProfile.id,
            },
        }).posts(args);
    }
    async comments(userProfile, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.findUnique({
            where: {
                id: userProfile.id,
            },
        }).comments(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserProfile_1.UserProfile, Object]),
    __metadata("design:returntype", Promise)
], UserProfileRelationsResolver.prototype, "user", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => UserFavoriteSongs_1.UserFavoriteSongs, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserProfile_1.UserProfile, Object]),
    __metadata("design:returntype", Promise)
], UserProfileRelationsResolver.prototype, "favSongs", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => UserFavoritePlaylists_1.UserFavoritePlaylists, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserProfile_1.UserProfile, Object]),
    __metadata("design:returntype", Promise)
], UserProfileRelationsResolver.prototype, "favPlaylists", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [UserPost_1.UserPost], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserProfile_1.UserProfile, Object, UserProfilePostsArgs_1.UserProfilePostsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileRelationsResolver.prototype, "posts", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [UserProfileComments_1.UserProfileComments], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserProfile_1.UserProfile, Object, UserProfileCommentsArgs_1.UserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileRelationsResolver.prototype, "comments", null);
UserProfileRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserProfile_1.UserProfile)
], UserProfileRelationsResolver);
exports.UserProfileRelationsResolver = UserProfileRelationsResolver;
//# sourceMappingURL=UserProfileRelationsResolver.js.map