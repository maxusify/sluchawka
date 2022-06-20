import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Playlist } from "./entities";

export default {
  dbName: "spotify-playlists",
  type: "postgresql",
  debug: !__prod__,
  entities: [Playlist],
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}",
  },
} as Parameters<typeof MikroORM.init>[0];
