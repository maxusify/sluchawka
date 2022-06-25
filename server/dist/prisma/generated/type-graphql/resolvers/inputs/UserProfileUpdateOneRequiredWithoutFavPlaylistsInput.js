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
exports.UserProfileUpdateOneRequiredWithoutFavPlaylistsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserProfileCreateOrConnectWithoutFavPlaylistsInput_1 = require("../inputs/UserProfileCreateOrConnectWithoutFavPlaylistsInput");
const UserProfileCreateWithoutFavPlaylistsInput_1 = require("../inputs/UserProfileCreateWithoutFavPlaylistsInput");
const UserProfileUpdateWithoutFavPlaylistsInput_1 = require("../inputs/UserProfileUpdateWithoutFavPlaylistsInput");
const UserProfileUpsertWithoutFavPlaylistsInput_1 = require("../inputs/UserProfileUpsertWithoutFavPlaylistsInput");
const UserProfileWhereUniqueInput_1 = require("../inputs/UserProfileWhereUniqueInput");
let UserProfileUpdateOneRequiredWithoutFavPlaylistsInput = class UserProfileUpdateOneRequiredWithoutFavPlaylistsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserProfileCreateWithoutFavPlaylistsInput_1.UserProfileCreateWithoutFavPlaylistsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavPlaylistsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutFavPlaylistsInput_1.UserProfileCreateOrConnectWithoutFavPlaylistsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavPlaylistsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileUpsertWithoutFavPlaylistsInput_1.UserProfileUpsertWithoutFavPlaylistsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavPlaylistsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileWhereUniqueInput_1.UserProfileWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavPlaylistsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileUpdateWithoutFavPlaylistsInput_1.UserProfileUpdateWithoutFavPlaylistsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavPlaylistsInput.prototype, "update", void 0);
UserProfileUpdateOneRequiredWithoutFavPlaylistsInput = __decorate([
    TypeGraphQL.InputType("UserProfileUpdateOneRequiredWithoutFavPlaylistsInput", {
        isAbstract: true
    })
], UserProfileUpdateOneRequiredWithoutFavPlaylistsInput);
exports.UserProfileUpdateOneRequiredWithoutFavPlaylistsInput = UserProfileUpdateOneRequiredWithoutFavPlaylistsInput;
//# sourceMappingURL=UserProfileUpdateOneRequiredWithoutFavPlaylistsInput.js.map