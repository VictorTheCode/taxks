import getSession from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await getSession();

  // if session is not found, return 401
  if (!session) {
    return NextResponse.json(
      { success: false, error: "Session not found" },
      { status: 401 },
    );
  }

  try {
    const tasks = await prisma.task.findMany({
      where: { userId: session.sub },
    });

    return NextResponse.json({ success: true, data: tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { success: false, error: "Error fetching tasks" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await getSession();

  // if session is not found, return 401
  if (!session) {
    return NextResponse.json(
      { success: false, error: "Session not found" },
      { status: 401 },
    );
  }

  // parse and validate the request body
  try {
    const { title, description, status, priority, projectId } =
      await req.json();

    if (!title || !projectId) {
      return NextResponse.json(
        { success: false, error: "Title and Project ID are required!" },
        { status: 400 },
      );
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        projectId,
        userId: session.sub,
      },
    });
    return NextResponse.json({ success: true, data: task }, { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json(
      { success: false, error: "Error creating task" },
      { status: 500 },
    );
  }
}
