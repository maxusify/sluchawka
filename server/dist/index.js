"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const constants_1 = require("./constants");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./resolvers/User");
const type_graphql_2 = require("../prisma/generated/type-graphql");
const prisma = new client_1.PrismaClient();
const main = async () => {
    const app = (0, express_1.default)();
    const appolo = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [User_1.UserResolver, type_graphql_2.FindUniqueUserResolver],
            validate: false,
        }),
        context: () => ({
            prisma,
        }),
    });
    await appolo.start();
    appolo.applyMiddleware({ app });
    app.listen(constants_1.__PORT__, () => {
        console.log(`Server started on http://localhost:${constants_1.__PORT__}`);
    });
};
main()
    .catch((err) => {
    console.log(err);
    throw err;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=index.js.map