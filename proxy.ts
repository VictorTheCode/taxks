import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export default async function proxy(req: NextRequest) {
  // read the token from the cookie
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/tasks/:path*", "/api/projects/:path*"],
};
