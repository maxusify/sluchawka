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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const constants_1 = require("./constants");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./resolvers/User");
const type_graphql_2 = require("../prisma/generated/type-graphql");
const redis = __importStar(require("redis"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const prisma = new client_1.PrismaClient();
const main = async () => {
    const app = (0, express_1.default)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const redisClient = redis.createClient({ legacyMode: true });
    redisClient.on("error", (err) => {
        console.error("Redis Client Error", err);
    });
    await redisClient.connect();
    app.use((0, express_session_1.default)({
        name: "qid",
        store: new RedisStore({ client: redisClient, disableTouch: true }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
            secure: !constants_1.__prod__,
            sameSite: "lax",
        },
        secret: constants_1.__session_secret__,
        resave: false,
        saveUninitialized: false,
    }));
    const appolo = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [User_1.UserResolver, type_graphql_2.FindUniqueUserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            prisma,
            req,
            res,
        }),
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
            (0, apollo_server_core_1.ApolloServerPluginLandingPageDisabled)(),
        ],
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