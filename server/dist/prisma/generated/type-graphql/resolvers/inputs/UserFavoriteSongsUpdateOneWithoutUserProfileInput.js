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
exports.UserFavoriteSongsUpdateOneWithoutUserProfileInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserFavoriteSongsCreateOrConnectWithoutUserProfileInput_1 = require("../inputs/UserFavoriteSongsCreateOrConnectWithoutUserProfileInput");
const UserFavoriteSongsCreateWithoutUserProfileInput_1 = require("../inputs/UserFavoriteSongsCreateWithoutUserProfileInput");
const UserFavoriteSongsUpdateWithoutUserProfileInput_1 = require("../inputs/UserFavoriteSongsUpdateWithoutUserProfileInput");
const UserFavoriteSongsUpsertWithoutUserProfileInput_1 = require("../inputs/UserFavoriteSongsUpsertWithoutUserProfileInput");
const UserFavoriteSongsWhereUniqueInput_1 = require("../inputs/UserFavoriteSongsWhereUniqueInput");
let UserFavoriteSongsUpdateOneWithoutUserProfileInput = class UserFavoriteSongsUpdateOneWithoutUserProfileInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutUserProfileInput_1.UserFavoriteSongsCreateWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsUpdateOneWithoutUserProfileInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoriteSongsCreateOrConnectWithoutUserProfileInput_1.UserFavoriteSongsCreateOrConnectWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsUpdateOneWithoutUserProfileInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoriteSongsUpsertWithoutUserProfileInput_1.UserFavoriteSongsUpsertWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsUpdateOneWithoutUserProfileInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsUpdateOneWithoutUserProfileInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsUpdateOneWithoutUserProfileInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput_1.UserFavoriteSongsWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsUpdateOneWithoutUserProfileInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoriteSongsUpdateWithoutUserProfileInput_1.UserFavoriteSongsUpdateWithoutUserProfileInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserFavoriteSongsUpdateOneWithoutUserProfileInput.prototype, "update", void 0);
UserFavoriteSongsUpdateOneWithoutUserProfileInput = __decorate([
    TypeGraphQL.InputType("UserFavoriteSongsUpdateOneWithoutUserProfileInput", {
        isAbstract: true
    })
], UserFavoriteSongsUpdateOneWithoutUserProfileInput);
exports.UserFavoriteSongsUpdateOneWithoutUserProfileInput = UserFavoriteSongsUpdateOneWithoutUserProfileInput;
//# sourceMappingURL=UserFavoriteSongsUpdateOneWithoutUserProfileInput.js.map