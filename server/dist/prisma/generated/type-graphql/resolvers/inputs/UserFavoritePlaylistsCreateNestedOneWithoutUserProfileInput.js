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
exports.UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput_1 = require("../inputs/UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput");
const UserFavoritePlaylistsCreateWithoutUserProfileInput_1 = require("../inputs/UserFavoritePlaylistsCreateWithoutUserProfileInput");
const UserFavoritePlaylistsWhereUniqueInput_1 = require("../inputs/UserFavoritePlaylistsWhereUniqueInput");
let UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput = class UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutUserProfileInput_1.UserFavoritePlaylistsCreateWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput_1.UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput_1.UserFavoritePlaylistsWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput.prototype, "connect", void 0);
UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput = __decorate([
    TypeGraphQL.InputType("UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput", {
        isAbstract: true
    })
], UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput);
exports.UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput = UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput;
//# sourceMappingURL=UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput.js.map