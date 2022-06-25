"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__session_secret__ = exports.__PORT__ = exports.__prod__ = void 0;
exports.__prod__ = process.env.NODE_ENV !== "production";
exports.__PORT__ = process.env.PORT;
exports.__session_secret__ = process.env.SESSION_SECRET;
//# sourceMappingURL=constants.js.map