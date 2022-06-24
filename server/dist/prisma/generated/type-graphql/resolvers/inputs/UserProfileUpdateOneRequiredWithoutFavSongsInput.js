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
exports.UserProfileUpdateOneRequiredWithoutFavSongsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserProfileCreateOrConnectWithoutFavSongsInput_1 = require("../inputs/UserProfileCreateOrConnectWithoutFavSongsInput");
const UserProfileCreateWithoutFavSongsInput_1 = require("../inputs/UserProfileCreateWithoutFavSongsInput");
const UserProfileUpdateWithoutFavSongsInput_1 = require("../inputs/UserProfileUpdateWithoutFavSongsInput");
const UserProfileUpsertWithoutFavSongsInput_1 = require("../inputs/UserProfileUpsertWithoutFavSongsInput");
const UserProfileWhereUniqueInput_1 = require("../inputs/UserProfileWhereUniqueInput");
let UserProfileUpdateOneRequiredWithoutFavSongsInput = class UserProfileUpdateOneRequiredWithoutFavSongsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserProfileCreateWithoutFavSongsInput_1.UserProfileCreateWithoutFavSongsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavSongsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutFavSongsInput_1.UserProfileCreateOrConnectWithoutFavSongsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavSongsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileUpsertWithoutFavSongsInput_1.UserProfileUpsertWithoutFavSongsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavSongsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileWhereUniqueInput_1.UserProfileWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavSongsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileUpdateWithoutFavSongsInput_1.UserProfileUpdateWithoutFavSongsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileUpdateOneRequiredWithoutFavSongsInput.prototype, "update", void 0);
UserProfileUpdateOneRequiredWithoutFavSongsInput = __decorate([
    TypeGraphQL.InputType("UserProfileUpdateOneRequiredWithoutFavSongsInput", {
        isAbstract: true
    })
], UserProfileUpdateOneRequiredWithoutFavSongsInput);
exports.UserProfileUpdateOneRequiredWithoutFavSongsInput = UserProfileUpdateOneRequiredWithoutFavSongsInput;
//# sourceMappingURL=UserProfileUpdateOneRequiredWithoutFavSongsInput.js.map