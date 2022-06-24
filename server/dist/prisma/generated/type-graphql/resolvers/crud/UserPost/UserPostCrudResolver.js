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
exports.UserPostCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUserPostArgs_1 = require("./args/AggregateUserPostArgs");
const CreateManyUserPostArgs_1 = require("./args/CreateManyUserPostArgs");
const CreateUserPostArgs_1 = require("./args/CreateUserPostArgs");
const DeleteManyUserPostArgs_1 = require("./args/DeleteManyUserPostArgs");
const DeleteUserPostArgs_1 = require("./args/DeleteUserPostArgs");
const FindFirstUserPostArgs_1 = require("./args/FindFirstUserPostArgs");
const FindManyUserPostArgs_1 = require("./args/FindManyUserPostArgs");
const FindUniqueUserPostArgs_1 = require("./args/FindUniqueUserPostArgs");
const GroupByUserPostArgs_1 = require("./args/GroupByUserPostArgs");
const UpdateManyUserPostArgs_1 = require("./args/UpdateManyUserPostArgs");
const UpdateUserPostArgs_1 = require("./args/UpdateUserPostArgs");
const UpsertUserPostArgs_1 = require("./args/UpsertUserPostArgs");
const helpers_1 = require("../../../helpers");
const UserPost_1 = require("../../../models/UserPost");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserPost_1 = require("../../outputs/AggregateUserPost");
const UserPostGroupBy_1 = require("../../outputs/UserPostGroupBy");
let UserPostCrudResolver = class UserPostCrudResolver {
    async userPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUserPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async userPosts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createUserPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManyUserPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteUserPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateUserPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyUserPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManyUserPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertUserPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateUserPost(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupByUserPost(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userPost.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => UserPost_1.UserPost, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserPostArgs_1.FindUniqueUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "userPost", null);
__decorate([
    TypeGraphQL.Query(_returns => UserPost_1.UserPost, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserPostArgs_1.FindFirstUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "findFirstUserPost", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserPost_1.UserPost], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUserPostArgs_1.FindManyUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "userPosts", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserPost_1.UserPost, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUserPostArgs_1.CreateUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "createUserPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUserPostArgs_1.CreateManyUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "createManyUserPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserPost_1.UserPost, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUserPostArgs_1.DeleteUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "deleteUserPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserPost_1.UserPost, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUserPostArgs_1.UpdateUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "updateUserPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUserPostArgs_1.DeleteManyUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "deleteManyUserPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUserPostArgs_1.UpdateManyUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "updateManyUserPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserPost_1.UserPost, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUserPostArgs_1.UpsertUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "upsertUserPost", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUserPost_1.AggregateUserPost, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserPostArgs_1.AggregateUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "aggregateUserPost", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserPostGroupBy_1.UserPostGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUserPostArgs_1.GroupByUserPostArgs]),
    __metadata("design:returntype", Promise)
], UserPostCrudResolver.prototype, "groupByUserPost", null);
UserPostCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserPost_1.UserPost)
], UserPostCrudResolver);
exports.UserPostCrudResolver = UserPostCrudResolver;
//# sourceMappingURL=UserPostCrudResolver.js.map