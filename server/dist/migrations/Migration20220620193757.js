"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220620193757 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220620193757 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "playlist" ("id" serial primary key, "name" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    }
    async down() {
        this.addSql('drop table if exists "playlist" cascade;');
    }
}
exports.Migration20220620193757 = Migration20220620193757;
//# sourceMappingURL=Migration20220620193757.js.map