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
exports.PlaylistUpdateManyWithoutUserFavoritePlaylistsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PlaylistCreateManyUserFavoritePlaylistsInputEnvelope_1 = require("../inputs/PlaylistCreateManyUserFavoritePlaylistsInputEnvelope");
const PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput_1 = require("../inputs/PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput");
const PlaylistCreateWithoutUserFavoritePlaylistsInput_1 = require("../inputs/PlaylistCreateWithoutUserFavoritePlaylistsInput");
const PlaylistScalarWhereInput_1 = require("../inputs/PlaylistScalarWhereInput");
const PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput_1 = require("../inputs/PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput");
const PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput_1 = require("../inputs/PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput");
const PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput_1 = require("../inputs/PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput");
const PlaylistWhereUniqueInput_1 = require("../inputs/PlaylistWhereUniqueInput");
let PlaylistUpdateManyWithoutUserFavoritePlaylistsInput = class PlaylistUpdateManyWithoutUserFavoritePlaylistsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PlaylistCreateWithoutUserFavoritePlaylistsInput_1.PlaylistCreateWithoutUserFavoritePlaylistsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput_1.PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput_1.PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PlaylistCreateManyUserFavoritePlaylistsInputEnvelope_1.PlaylistCreateManyUserFavoritePlaylistsInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput_1.PlaylistWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput_1.PlaylistWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput_1.PlaylistWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput_1.PlaylistWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput_1.PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput_1.PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistScalarWhereInput_1.PlaylistScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.prototype, "deleteMany", void 0);
PlaylistUpdateManyWithoutUserFavoritePlaylistsInput = __decorate([
    TypeGraphQL.InputType("PlaylistUpdateManyWithoutUserFavoritePlaylistsInput", {
        isAbstract: true
    })
], PlaylistUpdateManyWithoutUserFavoritePlaylistsInput);
exports.PlaylistUpdateManyWithoutUserFavoritePlaylistsInput = PlaylistUpdateManyWithoutUserFavoritePlaylistsInput;
//# sourceMappingURL=PlaylistUpdateManyWithoutUserFavoritePlaylistsInput.js.map