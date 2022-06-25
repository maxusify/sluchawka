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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PlaylistOrderByRelationAggregateInput_1 = require("../inputs/PlaylistOrderByRelationAggregateInput");
const SongOrderByRelationAggregateInput_1 = require("../inputs/SongOrderByRelationAggregateInput");
const UserPostOrderByRelationAggregateInput_1 = require("../inputs/UserPostOrderByRelationAggregateInput");
const UserProfileCommentsOrderByRelationAggregateInput_1 = require("../inputs/UserProfileCommentsOrderByRelationAggregateInput");
const UserProfileOrderByWithRelationInput_1 = require("../inputs/UserProfileOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "picture", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileOrderByWithRelationInput_1.UserProfileOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "profile", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostOrderByRelationAggregateInput_1.UserPostOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCommentsOrderByRelationAggregateInput_1.UserProfileCommentsOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdComments", void 0);
__decorate([
    TypeGraphQL.Field(_type => PlaylistOrderByRelationAggregateInput_1.PlaylistOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdPlaylists", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongOrderByRelationAggregateInput_1.SongOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdSongs", void 0);
UserOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
//# sourceMappingURL=UserOrderByWithRelationInput.js.map