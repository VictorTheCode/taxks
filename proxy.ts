import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export default async function proxy(req: NextRequest) {
  // read the token from the cookie
  const token = req.cookies.get("token")?.value;

  // auth page
  const isAuth =
    req.nextUrl.pathname === "/sign-in" || req.nextUrl.pathname === "/sign-up";

  if (token && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && !isAuth) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (token) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    try {
      const { payload } = await jwtVerify(token, secret);

      const requestHeaders = new Headers(req.headers);
      requestHeaders.set("x-user-id", payload.sub as string);
      return NextResponse.next({ request: { headers: requestHeaders } });
    } catch (error) {
      const response = NextResponse.redirect(new URL("/sign-in", req.url));
      response.cookies.delete("token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/tasks/:path*",
    "/api/projects/:path*",
    "/sign-in",
    "/sign-up",
  ],
};
