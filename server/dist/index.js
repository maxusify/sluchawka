"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const main = async () => {
    const app = (0, express_1.default)();
    app.listen(4000, () => {
        console.log(`Server started on http://localhost:4000`);
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