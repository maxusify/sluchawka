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
exports.SongCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateSongArgs_1 = require("./args/AggregateSongArgs");
const CreateManySongArgs_1 = require("./args/CreateManySongArgs");
const CreateSongArgs_1 = require("./args/CreateSongArgs");
const DeleteManySongArgs_1 = require("./args/DeleteManySongArgs");
const DeleteSongArgs_1 = require("./args/DeleteSongArgs");
const FindFirstSongArgs_1 = require("./args/FindFirstSongArgs");
const FindManySongArgs_1 = require("./args/FindManySongArgs");
const FindUniqueSongArgs_1 = require("./args/FindUniqueSongArgs");
const GroupBySongArgs_1 = require("./args/GroupBySongArgs");
const UpdateManySongArgs_1 = require("./args/UpdateManySongArgs");
const UpdateSongArgs_1 = require("./args/UpdateSongArgs");
const UpsertSongArgs_1 = require("./args/UpsertSongArgs");
const helpers_1 = require("../../../helpers");
const Song_1 = require("../../../models/Song");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSong_1 = require("../../outputs/AggregateSong");
const SongGroupBy_1 = require("../../outputs/SongGroupBy");
let SongCrudResolver = class SongCrudResolver {
    async song(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async songs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManySong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManySong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManySong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateSong(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).song.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupBySong(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).song.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSongArgs_1.FindUniqueSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "song", null);
__decorate([
    TypeGraphQL.Query(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSongArgs_1.FindFirstSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "findFirstSong", null);
__decorate([
    TypeGraphQL.Query(_returns => [Song_1.Song], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySongArgs_1.FindManySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "songs", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Song_1.Song, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateSongArgs_1.CreateSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "createSong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManySongArgs_1.CreateManySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "createManySong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteSongArgs_1.DeleteSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "deleteSong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateSongArgs_1.UpdateSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "updateSong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySongArgs_1.DeleteManySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "deleteManySong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySongArgs_1.UpdateManySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "updateManySong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Song_1.Song, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertSongArgs_1.UpsertSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "upsertSong", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSong_1.AggregateSong, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSongArgs_1.AggregateSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "aggregateSong", null);
__decorate([
    TypeGraphQL.Query(_returns => [SongGroupBy_1.SongGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySongArgs_1.GroupBySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "groupBySong", null);
SongCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Song_1.Song)
], SongCrudResolver);
exports.SongCrudResolver = SongCrudResolver;
//# sourceMappingURL=SongCrudResolver.js.map