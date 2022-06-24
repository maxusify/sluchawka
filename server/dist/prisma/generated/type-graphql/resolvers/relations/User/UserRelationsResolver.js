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
exports.UserRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Playlist_1 = require("../../../models/Playlist");
const Song_1 = require("../../../models/Song");
const User_1 = require("../../../models/User");
const UserPost_1 = require("../../../models/UserPost");
const UserProfile_1 = require("../../../models/UserProfile");
const UserProfileComments_1 = require("../../../models/UserProfileComments");
const UserCreatedCommentsArgs_1 = require("./args/UserCreatedCommentsArgs");
const UserCreatedPlaylistsArgs_1 = require("./args/UserCreatedPlaylistsArgs");
const UserCreatedPostsArgs_1 = require("./args/UserCreatedPostsArgs");
const UserCreatedSongsArgs_1 = require("./args/UserCreatedSongsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async profile(user, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).profile({});
    }
    async createdPosts(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).createdPosts(args);
    }
    async createdComments(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).createdComments(args);
    }
    async createdPlaylists(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).createdPlaylists(args);
    }
    async createdSongs(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).createdSongs(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => UserProfile_1.UserProfile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "profile", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [UserPost_1.UserPost], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserCreatedPostsArgs_1.UserCreatedPostsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "createdPosts", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [UserProfileComments_1.UserProfileComments], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserCreatedCommentsArgs_1.UserCreatedCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "createdComments", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Playlist_1.Playlist], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserCreatedPlaylistsArgs_1.UserCreatedPlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "createdPlaylists", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Song_1.Song], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserCreatedSongsArgs_1.UserCreatedSongsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "createdSongs", null);
UserRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
//# sourceMappingURL=UserRelationsResolver.js.map