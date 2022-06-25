"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const argon2_1 = require("argon2");
const type_graphql_1 = require("../../prisma/generated/type-graphql");
const type_graphql_2 = require("type-graphql");
const UserAuthArgs_1 = require("./types/UserAuthArgs");
const UserResponse_1 = require("./types/UserResponse");
let UserResolver = class UserResolver {
    async me({ prisma, req }) {
        if (!req.session.userId)
            return null;
        const user = await prisma.user.findUnique({
            where: { id: req.session.userId },
        });
        return user;
    }
    async register({ prisma, req }, args) {
        const isUserExist = await prisma.user.findUnique({
            where: {
                email: args.data.email,
            },
        });
        if (isUserExist !== null) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "Provided email address is already in use.",
                    },
                ],
            };
        }
        if (args.data.email.length <= 2) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "Length must be greater than 2.",
                    },
                ],
            };
        }
        if (args.data.password.length <= 7) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "Password length must contain at least 8 characters.",
                    },
                ],
            };
        }
        const hashedPassword = await (0, argon2_1.hash)(args.data.password);
        try {
            const user = await prisma.user.create({
                data: { email: args.data.email, password: hashedPassword },
            });
            req.session.userId = user.id;
            return { user };
        }
        catch (error) {
            console.error(error);
            return {
                errors: [
                    {
                        field: "null",
                        message: "Internal server error.",
                    },
                ],
            };
        }
    }
    async login({ prisma, req }, args) {
        const user = await prisma.user.findUnique({
            where: {
                email: args.data.email,
            },
        });
        if (!user) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "Provided email address does not match with any existing user.",
                    },
                ],
            };
        }
        const valid = await (0, argon2_1.verify)(user.password, args.data.password);
        if (!valid) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "Provided password is incorrect.",
                    },
                ],
            };
        }
        req.session.userId = user.id;
        return { user };
    }
};
__decorate([
    (0, type_graphql_2.Query)(() => type_graphql_1.User, { nullable: true }),
    __param(0, (0, type_graphql_2.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_2.Mutation)(() => UserResponse_1.UserResponse, {
        nullable: false,
    }),
    __param(0, (0, type_graphql_2.Ctx)()),
    __param(1, (0, type_graphql_2.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UserAuthArgs_1.UserAuthArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_2.Mutation)(() => UserResponse_1.UserResponse, {
        nullable: false,
    }),
    __param(0, (0, type_graphql_2.Ctx)()),
    __param(1, (0, type_graphql_2.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UserAuthArgs_1.UserAuthArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    (0, type_graphql_2.Resolver)(() => type_graphql_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=User.js.map