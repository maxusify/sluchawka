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
exports.SongCreateNestedManyWithoutUserFavoriteSongsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SongCreateManyUserFavoriteSongsInputEnvelope_1 = require("../inputs/SongCreateManyUserFavoriteSongsInputEnvelope");
const SongCreateOrConnectWithoutUserFavoriteSongsInput_1 = require("../inputs/SongCreateOrConnectWithoutUserFavoriteSongsInput");
const SongCreateWithoutUserFavoriteSongsInput_1 = require("../inputs/SongCreateWithoutUserFavoriteSongsInput");
const SongWhereUniqueInput_1 = require("../inputs/SongWhereUniqueInput");
let SongCreateNestedManyWithoutUserFavoriteSongsInput = class SongCreateNestedManyWithoutUserFavoriteSongsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SongCreateWithoutUserFavoriteSongsInput_1.SongCreateWithoutUserFavoriteSongsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongCreateNestedManyWithoutUserFavoriteSongsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutUserFavoriteSongsInput_1.SongCreateOrConnectWithoutUserFavoriteSongsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongCreateNestedManyWithoutUserFavoriteSongsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCreateManyUserFavoriteSongsInputEnvelope_1.SongCreateManyUserFavoriteSongsInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongCreateNestedManyWithoutUserFavoriteSongsInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongWhereUniqueInput_1.SongWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongCreateNestedManyWithoutUserFavoriteSongsInput.prototype, "connect", void 0);
SongCreateNestedManyWithoutUserFavoriteSongsInput = __decorate([
    TypeGraphQL.InputType("SongCreateNestedManyWithoutUserFavoriteSongsInput", {
        isAbstract: true
    })
], SongCreateNestedManyWithoutUserFavoriteSongsInput);
exports.SongCreateNestedManyWithoutUserFavoriteSongsInput = SongCreateNestedManyWithoutUserFavoriteSongsInput;
//# sourceMappingURL=SongCreateNestedManyWithoutUserFavoriteSongsInput.js.map