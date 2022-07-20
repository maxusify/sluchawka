// Production env
export const __prod__ = process.env.NODE_ENV !== "production";
// Network port env
export const __PORT__ = process.env.PORT;
// Session secret env
export const SESSION_SECRET = process.env.SESSION_SECRET;

// Session cookie name 
export const COOKIE_NAME = "qid";
// Prefix for forget-password resolver
export const FORGET_PASSWORD_PREFIX = "forget-password";
