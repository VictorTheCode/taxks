import getSession from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      { success: false, error: "Session not found" },
      { status: 401 },
    );
  }

  try {
    const projects = await prisma.project.findMany({
      where: { userId: session.sub },
    });
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "Error fetching projects" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      { success: false, error: "Session not found" },
      { status: 401 },
    );
  }

  try {
    const { name, color } = await req.json();

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Project name is required!" },
        { status: 400 },
      );
    }

    const project = await prisma.project.create({
      data: {
        name,
        color,
        userId: session.sub,
      },
    });

    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, error: "Error creating project" },
      { status: 500 },
    );
  }
}
