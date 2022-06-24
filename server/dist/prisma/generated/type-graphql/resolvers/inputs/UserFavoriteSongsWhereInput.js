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
var UserFavoriteSongsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFavoriteSongsWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SongListRelationFilter_1 = require("../inputs/SongListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserProfileRelationFilter_1 = require("../inputs/UserProfileRelationFilter");
let UserFavoriteSongsWhereInput = UserFavoriteSongsWhereInput_1 = class UserFavoriteSongsWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserFavoriteSongsWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserFavoriteSongsWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserFavoriteSongsWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileRelationFilter_1.UserProfileRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsWhereInput.prototype, "userProfile", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsWhereInput.prototype, "userProfileId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongListRelationFilter_1.SongListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsWhereInput.prototype, "songs", void 0);
UserFavoriteSongsWhereInput = UserFavoriteSongsWhereInput_1 = __decorate([
    TypeGraphQL.InputType("UserFavoriteSongsWhereInput", {
        isAbstract: true
    })
], UserFavoriteSongsWhereInput);
exports.UserFavoriteSongsWhereInput = UserFavoriteSongsWhereInput;
//# sourceMappingURL=UserFavoriteSongsWhereInput.js.map