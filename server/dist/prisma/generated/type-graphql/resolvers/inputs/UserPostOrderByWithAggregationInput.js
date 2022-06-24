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
exports.UserPostOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserPostAvgOrderByAggregateInput_1 = require("../inputs/UserPostAvgOrderByAggregateInput");
const UserPostCountOrderByAggregateInput_1 = require("../inputs/UserPostCountOrderByAggregateInput");
const UserPostMaxOrderByAggregateInput_1 = require("../inputs/UserPostMaxOrderByAggregateInput");
const UserPostMinOrderByAggregateInput_1 = require("../inputs/UserPostMinOrderByAggregateInput");
const UserPostSumOrderByAggregateInput_1 = require("../inputs/UserPostSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserPostOrderByWithAggregationInput = class UserPostOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "userProfileId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostCountOrderByAggregateInput_1.UserPostCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostAvgOrderByAggregateInput_1.UserPostAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostMaxOrderByAggregateInput_1.UserPostMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostMinOrderByAggregateInput_1.UserPostMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserPostSumOrderByAggregateInput_1.UserPostSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserPostOrderByWithAggregationInput.prototype, "_sum", void 0);
UserPostOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("UserPostOrderByWithAggregationInput", {
        isAbstract: true
    })
], UserPostOrderByWithAggregationInput);
exports.UserPostOrderByWithAggregationInput = UserPostOrderByWithAggregationInput;
//# sourceMappingURL=UserPostOrderByWithAggregationInput.js.map