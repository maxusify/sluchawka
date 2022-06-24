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
exports.PlaylistUpdateManyWithoutAuthorInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PlaylistCreateManyAuthorInputEnvelope_1 = require("../inputs/PlaylistCreateManyAuthorInputEnvelope");
const PlaylistCreateOrConnectWithoutAuthorInput_1 = require("../inputs/PlaylistCreateOrConnectWithoutAuthorInput");
const PlaylistCreateWithoutAuthorInput_1 = require("../inputs/PlaylistCreateWithoutAuthorInput");
const PlaylistScalarWhereInput_1 = require("../inputs/PlaylistScalarWhereInput");
const PlaylistUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/PlaylistUpdateManyWithWhereWithoutAuthorInput");
const PlaylistUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PlaylistUpdateWithWhereUniqueWithoutAuthorInput");
const PlaylistUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PlaylistUpsertWithWhereUniqueWithoutAuthorInput");
const PlaylistWhereUniqueInput_1 = require("../inputs/PlaylistWhereUniqueInput");
let PlaylistUpdateManyWithoutAuthorInput = class PlaylistUpdateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PlaylistCreateWithoutAuthorInput_1.PlaylistCreateWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutAuthorInput_1.PlaylistCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistUpsertWithWhereUniqueWithoutAuthorInput_1.PlaylistUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PlaylistCreateManyAuthorInputEnvelope_1.PlaylistCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput_1.PlaylistWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput_1.PlaylistWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput_1.PlaylistWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput_1.PlaylistWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistUpdateWithWhereUniqueWithoutAuthorInput_1.PlaylistUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistUpdateManyWithWhereWithoutAuthorInput_1.PlaylistUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PlaylistScalarWhereInput_1.PlaylistScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], PlaylistUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
PlaylistUpdateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("PlaylistUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], PlaylistUpdateManyWithoutAuthorInput);
exports.PlaylistUpdateManyWithoutAuthorInput = PlaylistUpdateManyWithoutAuthorInput;
//# sourceMappingURL=PlaylistUpdateManyWithoutAuthorInput.js.map