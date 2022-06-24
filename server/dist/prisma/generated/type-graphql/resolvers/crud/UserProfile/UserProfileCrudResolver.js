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
exports.UserProfileCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUserProfileArgs_1 = require("./args/AggregateUserProfileArgs");
const CreateManyUserProfileArgs_1 = require("./args/CreateManyUserProfileArgs");
const CreateUserProfileArgs_1 = require("./args/CreateUserProfileArgs");
const DeleteManyUserProfileArgs_1 = require("./args/DeleteManyUserProfileArgs");
const DeleteUserProfileArgs_1 = require("./args/DeleteUserProfileArgs");
const FindFirstUserProfileArgs_1 = require("./args/FindFirstUserProfileArgs");
const FindManyUserProfileArgs_1 = require("./args/FindManyUserProfileArgs");
const FindUniqueUserProfileArgs_1 = require("./args/FindUniqueUserProfileArgs");
const GroupByUserProfileArgs_1 = require("./args/GroupByUserProfileArgs");
const UpdateManyUserProfileArgs_1 = require("./args/UpdateManyUserProfileArgs");
const UpdateUserProfileArgs_1 = require("./args/UpdateUserProfileArgs");
const UpsertUserProfileArgs_1 = require("./args/UpsertUserProfileArgs");
const helpers_1 = require("../../../helpers");
const UserProfile_1 = require("../../../models/UserProfile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserProfile_1 = require("../../outputs/AggregateUserProfile");
const UserProfileGroupBy_1 = require("../../outputs/UserProfileGroupBy");
let UserProfileCrudResolver = class UserProfileCrudResolver {
    async userProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstUserProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async userProfiles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createUserProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManyUserProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteUserProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateUserProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyUserProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManyUserProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertUserProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateUserProfile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupByUserProfile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userProfile.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => UserProfile_1.UserProfile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserProfileArgs_1.FindUniqueUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "userProfile", null);
__decorate([
    TypeGraphQL.Query(_returns => UserProfile_1.UserProfile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserProfileArgs_1.FindFirstUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "findFirstUserProfile", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserProfile_1.UserProfile], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUserProfileArgs_1.FindManyUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "userProfiles", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserProfile_1.UserProfile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUserProfileArgs_1.CreateUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "createUserProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUserProfileArgs_1.CreateManyUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "createManyUserProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserProfile_1.UserProfile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUserProfileArgs_1.DeleteUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "deleteUserProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserProfile_1.UserProfile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUserProfileArgs_1.UpdateUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "updateUserProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUserProfileArgs_1.DeleteManyUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "deleteManyUserProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUserProfileArgs_1.UpdateManyUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "updateManyUserProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserProfile_1.UserProfile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUserProfileArgs_1.UpsertUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "upsertUserProfile", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUserProfile_1.AggregateUserProfile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserProfileArgs_1.AggregateUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "aggregateUserProfile", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserProfileGroupBy_1.UserProfileGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUserProfileArgs_1.GroupByUserProfileArgs]),
    __metadata("design:returntype", Promise)
], UserProfileCrudResolver.prototype, "groupByUserProfile", null);
UserProfileCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserProfile_1.UserProfile)
], UserProfileCrudResolver);
exports.UserProfileCrudResolver = UserProfileCrudResolver;
//# sourceMappingURL=UserProfileCrudResolver.js.map