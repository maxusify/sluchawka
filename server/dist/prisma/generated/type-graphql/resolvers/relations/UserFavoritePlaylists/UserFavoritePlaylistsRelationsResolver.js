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
exports.UserFavoritePlaylistsRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Playlist_1 = require("../../../models/Playlist");
const UserFavoritePlaylists_1 = require("../../../models/UserFavoritePlaylists");
const UserProfile_1 = require("../../../models/UserProfile");
const UserFavoritePlaylistsPlaylistsArgs_1 = require("./args/UserFavoritePlaylistsPlaylistsArgs");
const helpers_1 = require("../../../helpers");
let UserFavoritePlaylistsRelationsResolver = class UserFavoritePlaylistsRelationsResolver {
    async userProfile(userFavoritePlaylists, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.findUnique({
            where: {
                id: userFavoritePlaylists.id,
            },
        }).userProfile({});
    }
    async playlists(userFavoritePlaylists, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.findUnique({
            where: {
                id: userFavoritePlaylists.id,
            },
        }).playlists(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => UserProfile_1.UserProfile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserFavoritePlaylists_1.UserFavoritePlaylists, Object]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsRelationsResolver.prototype, "userProfile", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Playlist_1.Playlist], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserFavoritePlaylists_1.UserFavoritePlaylists, Object, UserFavoritePlaylistsPlaylistsArgs_1.UserFavoritePlaylistsPlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsRelationsResolver.prototype, "playlists", null);
UserFavoritePlaylistsRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserFavoritePlaylists_1.UserFavoritePlaylists)
], UserFavoritePlaylistsRelationsResolver);
exports.UserFavoritePlaylistsRelationsResolver = UserFavoritePlaylistsRelationsResolver;
//# sourceMappingURL=UserFavoritePlaylistsRelationsResolver.js.map