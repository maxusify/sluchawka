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
exports.SongUpdateManyWithoutAuthorInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SongCreateManyAuthorInputEnvelope_1 = require("../inputs/SongCreateManyAuthorInputEnvelope");
const SongCreateOrConnectWithoutAuthorInput_1 = require("../inputs/SongCreateOrConnectWithoutAuthorInput");
const SongCreateWithoutAuthorInput_1 = require("../inputs/SongCreateWithoutAuthorInput");
const SongScalarWhereInput_1 = require("../inputs/SongScalarWhereInput");
const SongUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/SongUpdateManyWithWhereWithoutAuthorInput");
const SongUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/SongUpdateWithWhereUniqueWithoutAuthorInput");
const SongUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/SongUpsertWithWhereUniqueWithoutAuthorInput");
const SongWhereUniqueInput_1 = require("../inputs/SongWhereUniqueInput");
let SongUpdateManyWithoutAuthorInput = class SongUpdateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SongCreateWithoutAuthorInput_1.SongCreateWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutAuthorInput_1.SongCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutAuthorInput_1.SongUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCreateManyAuthorInputEnvelope_1.SongCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongWhereUniqueInput_1.SongWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongWhereUniqueInput_1.SongWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongWhereUniqueInput_1.SongWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongWhereUniqueInput_1.SongWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutAuthorInput_1.SongUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutAuthorInput_1.SongUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongScalarWhereInput_1.SongScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
SongUpdateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("SongUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], SongUpdateManyWithoutAuthorInput);
exports.SongUpdateManyWithoutAuthorInput = SongUpdateManyWithoutAuthorInput;
//# sourceMappingURL=SongUpdateManyWithoutAuthorInput.js.map