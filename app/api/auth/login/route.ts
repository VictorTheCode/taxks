import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // validate fields
  if (!email || !password) {
    return NextResponse.json(
      { success: false, error: "Email and Password are required!" },
      { status: 400 },
    );
  }

  try {
    // find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid credentials",
        },
        { status: 401 },
      );
    }

    // compare password
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    // check if password is valid
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // sign the jwt
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new SignJWT({
      sub: user.id,
      name: user.name,
      email: user.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    const response = NextResponse.json({
      success: true,
      data: { id: user.id, name: user.name, email: user.email },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", //protect against CSRF
      maxAge: 60 * 60 * 24 * 7, // 7 days in secconds
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred. Please try again" },
      { status: 500 },
    );
  }
}
