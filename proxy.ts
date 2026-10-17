import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const proxy = createMiddleware(routing);

export default proxy;
export { proxy };

export const config = {
  // Match all request paths except for:
  // - API routes
  // - _next (static files, image optimization files)
  // - _vercel
  // - static file extensions (e.g. .webp, .svg, .png, .jpg, .ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
