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
exports.UserProfileCommentsCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUserProfileCommentsArgs_1 = require("./args/AggregateUserProfileCommentsArgs");
const CreateManyUserProfileCommentsArgs_1 = require("./args/CreateManyUserProfileCommentsArgs");
const CreateUserProfileCommentsArgs_1 = require("./args/CreateUserProfileCommentsArgs");
const DeleteManyUserProfileCommentsArgs_1 = require("./args/DeleteManyUserProfileCommentsArgs");
const DeleteUserProfileCommentsArgs_1 = require("./args/DeleteUserProfileCommentsArgs");
const FindFirstUserProfileCommentsArgs_1 = require("./args/FindFirstUserProfileCommentsArgs");
const FindManyUserProfileCommentsArgs_1 = require("./args/FindManyUserProfileCommentsArgs");
const FindUniqueUserProfileCommentsArgs_1 = require("./args/FindUniqueUserProfileCommentsArgs");
const GroupByUserProfileCommentsArgs_1 = require("./args/GroupByUserProfileCommentsArgs");
const UpdateManyUserProfileCommentsArgs_1 = require("./args/UpdateManyUserProfileCommentsArgs");
const UpdateUserProfileCommentsArgs_1 = require("./args/UpdateUserProfileCommentsArgs");
const UpsertUserProfileCommentsArgs_1 = require("./args/UpsertUserProfileCommentsArgs");
const helpers_1 = require("../../../helpers");
const UserProfileComments_1 = require("../../../models/UserProfileComments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserProfileComments_1 = require("../../outputs/AggregateUserProfileComments");
const UserProfileCommentsGroupBy_1 = require("../../outputs/UserProfileCommentsGroupBy");
let UserProfileCommentsCrudResolver = class UserProfileCommentsCrudResolver {
    async findUniqueUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findManyUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManyUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManyUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertUserProfileComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateUserProfileComments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupByUserProfileComments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfileComments.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => UserProfileComments_1.UserProfileComments, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserProfileCommentsArgs_1.FindUniqueUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "findUniqueUserProfileComments", null);
__decorate([
    TypeGraphQL.Query(_returns => UserProfileComments_1.UserProfileComments, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserProfileCommentsArgs_1.FindFirstUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "findFirstUserProfileComments", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserProfileComments_1.UserProfileComments], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUserProfileCommentsArgs_1.FindManyUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "findManyUserProfileComments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserProfileComments_1.UserProfileComments, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUserProfileCommentsArgs_1.CreateUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "createUserProfileComments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUserProfileCommentsArgs_1.CreateManyUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "createManyUserProfileComments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserProfileComments_1.UserProfileComments, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUserProfileCommentsArgs_1.DeleteUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "deleteUserProfileComments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserProfileComments_1.UserProfileComments, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUserProfileCommentsArgs_1.UpdateUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "updateUserProfileComments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUserProfileCommentsArgs_1.DeleteManyUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "deleteManyUserProfileComments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUserProfileCommentsArgs_1.UpdateManyUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "updateManyUserProfileComments", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserProfileComments_1.UserProfileComments, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUserProfileCommentsArgs_1.UpsertUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "upsertUserProfileComments", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUserProfileComments_1.AggregateUserProfileComments, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserProfileCommentsArgs_1.AggregateUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "aggregateUserProfileComments", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserProfileCommentsGroupBy_1.UserProfileCommentsGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUserProfileCommentsArgs_1.GroupByUserProfileCommentsArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCommentsCrudResolver.prototype, "groupByUserProfileComments", null);
UserProfileCommentsCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserProfileComments_1.UserProfileComments)
], UserProfileCommentsCrudResolver);
exports.UserProfileCommentsCrudResolver = UserProfileCommentsCrudResolver;
//# sourceMappingURL=UserProfileCommentsCrudResolver.js.map