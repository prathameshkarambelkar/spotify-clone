import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export { default } from "next-auth/middleware";
export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}
export const config = {
  matcher: "/",
};
