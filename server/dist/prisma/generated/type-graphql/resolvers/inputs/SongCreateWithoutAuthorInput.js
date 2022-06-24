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
exports.SongCreateWithoutAuthorInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserFavoriteSongsCreateNestedOneWithoutSongsInput_1 = require("../inputs/UserFavoriteSongsCreateNestedOneWithoutSongsInput");
let SongCreateWithoutAuthorInput = class SongCreateWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongCreateWithoutAuthorInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SongCreateWithoutAuthorInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongCreateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFavoriteSongsCreateNestedOneWithoutSongsInput_1.UserFavoriteSongsCreateNestedOneWithoutSongsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], SongCreateWithoutAuthorInput.prototype, "UserFavoriteSongs", void 0);
SongCreateWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("SongCreateWithoutAuthorInput", {
        isAbstract: true
    })
], SongCreateWithoutAuthorInput);
exports.SongCreateWithoutAuthorInput = SongCreateWithoutAuthorInput;
//# sourceMappingURL=SongCreateWithoutAuthorInput.js.map