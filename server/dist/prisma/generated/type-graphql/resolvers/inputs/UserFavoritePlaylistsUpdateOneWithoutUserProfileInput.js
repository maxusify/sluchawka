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
exports.UserFavoritePlaylistsUpdateOneWithoutUserProfileInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput_1 = require("../inputs/UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput");
const UserFavoritePlaylistsCreateWithoutUserProfileInput_1 = require("../inputs/UserFavoritePlaylistsCreateWithoutUserProfileInput");
const UserFavoritePlaylistsUpdateWithoutUserProfileInput_1 = require("../inputs/UserFavoritePlaylistsUpdateWithoutUserProfileInput");
const UserFavoritePlaylistsUpsertWithoutUserProfileInput_1 = require("../inputs/UserFavoritePlaylistsUpsertWithoutUserProfileInput");
const UserFavoritePlaylistsWhereUniqueInput_1 = require("../inputs/UserFavoritePlaylistsWhereUniqueInput");
let UserFavoritePlaylistsUpdateOneWithoutUserProfileInput = class UserFavoritePlaylistsUpdateOneWithoutUserProfileInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutUserProfileInput_1.UserFavoritePlaylistsCreateWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsUpdateOneWithoutUserProfileInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput_1.UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsUpdateOneWithoutUserProfileInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsUpsertWithoutUserProfileInput_1.UserFavoritePlaylistsUpsertWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsUpdateOneWithoutUserProfileInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsUpdateOneWithoutUserProfileInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsUpdateOneWithoutUserProfileInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput_1.UserFavoritePlaylistsWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsUpdateOneWithoutUserProfileInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateWithoutUserProfileInput_1.UserFavoritePlaylistsUpdateWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsUpdateOneWithoutUserProfileInput.prototype, "update", void 0);
UserFavoritePlaylistsUpdateOneWithoutUserProfileInput = __decorate([
    TypeGraphQL.InputType("UserFavoritePlaylistsUpdateOneWithoutUserProfileInput", {
        isAbstract: true
    })
], UserFavoritePlaylistsUpdateOneWithoutUserProfileInput);
exports.UserFavoritePlaylistsUpdateOneWithoutUserProfileInput = UserFavoritePlaylistsUpdateOneWithoutUserProfileInput;
//# sourceMappingURL=UserFavoritePlaylistsUpdateOneWithoutUserProfileInput.js.map