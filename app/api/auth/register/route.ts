import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json(); // send name, email, password in request body

  // check if all fields are provided
  if (!name || !email || !password) {
    return NextResponse.json(
      {
        success: false,
        error: "Name, email and password are required!!",
      },
      { status: 400 },
    );
  }

  try {
    // check if email exists
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return NextResponse.json(
        { success: false, error: "Email already exists" },
        { status: 409 },
      );
    }

    // hash password
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword: hash,
      },
    });

    const { hashedPassword, ...publicUser } = user;

    return NextResponse.json(
      { success: true, data: publicUser },
      { status: 201 }, // user created successfully
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { success: false, error: "Error registering users" },
      { status: 500 },
    );
  }
}
