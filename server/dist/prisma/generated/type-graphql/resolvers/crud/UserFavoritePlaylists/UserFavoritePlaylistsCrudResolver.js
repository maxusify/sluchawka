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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFavoritePlaylistsCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUserFavoritePlaylistsArgs_1 = require("./args/AggregateUserFavoritePlaylistsArgs");
const CreateManyUserFavoritePlaylistsArgs_1 = require("./args/CreateManyUserFavoritePlaylistsArgs");
const CreateUserFavoritePlaylistsArgs_1 = require("./args/CreateUserFavoritePlaylistsArgs");
const DeleteManyUserFavoritePlaylistsArgs_1 = require("./args/DeleteManyUserFavoritePlaylistsArgs");
const DeleteUserFavoritePlaylistsArgs_1 = require("./args/DeleteUserFavoritePlaylistsArgs");
const FindFirstUserFavoritePlaylistsArgs_1 = require("./args/FindFirstUserFavoritePlaylistsArgs");
const FindManyUserFavoritePlaylistsArgs_1 = require("./args/FindManyUserFavoritePlaylistsArgs");
const FindUniqueUserFavoritePlaylistsArgs_1 = require("./args/FindUniqueUserFavoritePlaylistsArgs");
const GroupByUserFavoritePlaylistsArgs_1 = require("./args/GroupByUserFavoritePlaylistsArgs");
const UpdateManyUserFavoritePlaylistsArgs_1 = require("./args/UpdateManyUserFavoritePlaylistsArgs");
const UpdateUserFavoritePlaylistsArgs_1 = require("./args/UpdateUserFavoritePlaylistsArgs");
const UpsertUserFavoritePlaylistsArgs_1 = require("./args/UpsertUserFavoritePlaylistsArgs");
const helpers_1 = require("../../../helpers");
const UserFavoritePlaylists_1 = require("../../../models/UserFavoritePlaylists");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserFavoritePlaylists_1 = require("../../outputs/AggregateUserFavoritePlaylists");
const UserFavoritePlaylistsGroupBy_1 = require("../../outputs/UserFavoritePlaylistsGroupBy");
let UserFavoritePlaylistsCrudResolver = class UserFavoritePlaylistsCrudResolver {
    async findUniqueUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findManyUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManyUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManyUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertUserFavoritePlaylists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateUserFavoritePlaylists(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupByUserFavoritePlaylists(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoritePlaylists.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => UserFavoritePlaylists_1.UserFavoritePlaylists, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserFavoritePlaylistsArgs_1.FindUniqueUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "findUniqueUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Query(_returns => UserFavoritePlaylists_1.UserFavoritePlaylists, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserFavoritePlaylistsArgs_1.FindFirstUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "findFirstUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserFavoritePlaylists_1.UserFavoritePlaylists], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUserFavoritePlaylistsArgs_1.FindManyUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "findManyUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserFavoritePlaylists_1.UserFavoritePlaylists, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUserFavoritePlaylistsArgs_1.CreateUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "createUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUserFavoritePlaylistsArgs_1.CreateManyUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "createManyUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserFavoritePlaylists_1.UserFavoritePlaylists, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUserFavoritePlaylistsArgs_1.DeleteUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "deleteUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserFavoritePlaylists_1.UserFavoritePlaylists, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUserFavoritePlaylistsArgs_1.UpdateUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "updateUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUserFavoritePlaylistsArgs_1.DeleteManyUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "deleteManyUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUserFavoritePlaylistsArgs_1.UpdateManyUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "updateManyUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserFavoritePlaylists_1.UserFavoritePlaylists, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUserFavoritePlaylistsArgs_1.UpsertUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "upsertUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUserFavoritePlaylists_1.AggregateUserFavoritePlaylists, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserFavoritePlaylistsArgs_1.AggregateUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "aggregateUserFavoritePlaylists", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserFavoritePlaylistsGroupBy_1.UserFavoritePlaylistsGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUserFavoritePlaylistsArgs_1.GroupByUserFavoritePlaylistsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoritePlaylistsCrudResolver.prototype, "groupByUserFavoritePlaylists", null);
UserFavoritePlaylistsCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserFavoritePlaylists_1.UserFavoritePlaylists)
], UserFavoritePlaylistsCrudResolver);
exports.UserFavoritePlaylistsCrudResolver = UserFavoritePlaylistsCrudResolver;
//# sourceMappingURL=UserFavoritePlaylistsCrudResolver.js.map