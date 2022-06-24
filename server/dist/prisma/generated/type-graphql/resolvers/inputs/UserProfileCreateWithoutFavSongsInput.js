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
exports.UserProfileCreateWithoutFavSongsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateNestedOneWithoutProfileInput_1 = require("../inputs/UserCreateNestedOneWithoutProfileInput");
const UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput_1 = require("../inputs/UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput");
const UserPostCreateNestedManyWithoutUserProfileInput_1 = require("../inputs/UserPostCreateNestedManyWithoutUserProfileInput");
const UserProfileCommentsCreateNestedManyWithoutUserProfileInput_1 = require("../inputs/UserProfileCommentsCreateNestedManyWithoutUserProfileInput");
let UserProfileCreateWithoutFavSongsInput = class UserProfileCreateWithoutFavSongsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserProfileCreateWithoutFavSongsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput_1.UserCreateNestedOneWithoutProfileInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutProfileInput_1.UserCreateNestedOneWithoutProfileInput)
], UserProfileCreateWithoutFavSongsInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput_1.UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCreateWithoutFavSongsInput.prototype, "favPlaylists", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostCreateNestedManyWithoutUserProfileInput_1.UserPostCreateNestedManyWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCreateWithoutFavSongsInput.prototype, "posts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCommentsCreateNestedManyWithoutUserProfileInput_1.UserProfileCommentsCreateNestedManyWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileCreateWithoutFavSongsInput.prototype, "comments", void 0);
UserProfileCreateWithoutFavSongsInput = __decorate([
    TypeGraphQL.InputType("UserProfileCreateWithoutFavSongsInput", {
        isAbstract: true
    })
], UserProfileCreateWithoutFavSongsInput);
exports.UserProfileCreateWithoutFavSongsInput = UserProfileCreateWithoutFavSongsInput;
//# sourceMappingURL=UserProfileCreateWithoutFavSongsInput.js.map