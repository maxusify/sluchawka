import session from "express-session";

import { __PORT__, __prod__, COOKIE_NAME, SESSION_SECRET } from "../constants";
import { createRedisClient, RedisStore } from "./createRedisClient";

export default session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: createRedisClient(),
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // ~month
        httpOnly: true,
        secure: !__prod__,
        sameSite: "lax", // CSRF
      },
      secret: SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
});
