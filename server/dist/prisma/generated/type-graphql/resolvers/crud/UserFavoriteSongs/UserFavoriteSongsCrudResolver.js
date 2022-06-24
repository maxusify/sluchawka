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
exports.UserFavoriteSongsCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUserFavoriteSongsArgs_1 = require("./args/AggregateUserFavoriteSongsArgs");
const CreateManyUserFavoriteSongsArgs_1 = require("./args/CreateManyUserFavoriteSongsArgs");
const CreateUserFavoriteSongsArgs_1 = require("./args/CreateUserFavoriteSongsArgs");
const DeleteManyUserFavoriteSongsArgs_1 = require("./args/DeleteManyUserFavoriteSongsArgs");
const DeleteUserFavoriteSongsArgs_1 = require("./args/DeleteUserFavoriteSongsArgs");
const FindFirstUserFavoriteSongsArgs_1 = require("./args/FindFirstUserFavoriteSongsArgs");
const FindManyUserFavoriteSongsArgs_1 = require("./args/FindManyUserFavoriteSongsArgs");
const FindUniqueUserFavoriteSongsArgs_1 = require("./args/FindUniqueUserFavoriteSongsArgs");
const GroupByUserFavoriteSongsArgs_1 = require("./args/GroupByUserFavoriteSongsArgs");
const UpdateManyUserFavoriteSongsArgs_1 = require("./args/UpdateManyUserFavoriteSongsArgs");
const UpdateUserFavoriteSongsArgs_1 = require("./args/UpdateUserFavoriteSongsArgs");
const UpsertUserFavoriteSongsArgs_1 = require("./args/UpsertUserFavoriteSongsArgs");
const helpers_1 = require("../../../helpers");
const UserFavoriteSongs_1 = require("../../../models/UserFavoriteSongs");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserFavoriteSongs_1 = require("../../outputs/AggregateUserFavoriteSongs");
const UserFavoriteSongsGroupBy_1 = require("../../outputs/UserFavoriteSongsGroupBy");
let UserFavoriteSongsCrudResolver = class UserFavoriteSongsCrudResolver {
    async findUniqueUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findManyUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManyUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManyUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertUserFavoriteSongs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateUserFavoriteSongs(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupByUserFavoriteSongs(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userFavoriteSongs.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => UserFavoriteSongs_1.UserFavoriteSongs, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserFavoriteSongsArgs_1.FindUniqueUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "findUniqueUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Query(_returns => UserFavoriteSongs_1.UserFavoriteSongs, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserFavoriteSongsArgs_1.FindFirstUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "findFirstUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserFavoriteSongs_1.UserFavoriteSongs], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUserFavoriteSongsArgs_1.FindManyUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "findManyUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserFavoriteSongs_1.UserFavoriteSongs, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUserFavoriteSongsArgs_1.CreateUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "createUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUserFavoriteSongsArgs_1.CreateManyUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "createManyUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserFavoriteSongs_1.UserFavoriteSongs, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUserFavoriteSongsArgs_1.DeleteUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "deleteUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserFavoriteSongs_1.UserFavoriteSongs, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUserFavoriteSongsArgs_1.UpdateUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "updateUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUserFavoriteSongsArgs_1.DeleteManyUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "deleteManyUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUserFavoriteSongsArgs_1.UpdateManyUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "updateManyUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserFavoriteSongs_1.UserFavoriteSongs, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUserFavoriteSongsArgs_1.UpsertUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "upsertUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUserFavoriteSongs_1.AggregateUserFavoriteSongs, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserFavoriteSongsArgs_1.AggregateUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "aggregateUserFavoriteSongs", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserFavoriteSongsGroupBy_1.UserFavoriteSongsGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUserFavoriteSongsArgs_1.GroupByUserFavoriteSongsArgs]),
    __metadata("design:returntype", Promise)
], UserFavoriteSongsCrudResolver.prototype, "groupByUserFavoriteSongs", null);
UserFavoriteSongsCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserFavoriteSongs_1.UserFavoriteSongs)
], UserFavoriteSongsCrudResolver);
exports.UserFavoriteSongsCrudResolver = UserFavoriteSongsCrudResolver;
//# sourceMappingURL=UserFavoriteSongsCrudResolver.js.map