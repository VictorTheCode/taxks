import getSession from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // get sessison
  const session = await getSession();
  console.log("SESSION SUB:", session?.sub);
  const { id } = await params;

  if (!session) {
    return NextResponse.json(
      { success: false, error: "Session not found" },
      { status: 401 },
    );
  }

  try {
    const { title, description, dueDate, status, priority } = await req.json();

    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 },
      );
    }

    if (task.userId !== session.sub) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 },
      );
    }

    console.log("MATCH:", task.userId === session?.sub);

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        dueDate,
        status,
        priority,
      },
    });
    console.log("TASK USERID:", task.userId);
    return NextResponse.json({ success: true, data: updatedTask });
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { success: false, error: "Error updating task" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      { success: false, error: "Session not found" },
      { status: 401 },
    );
  }
  const { id } = await params;

  // find and verify task ownership
  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 },
      );
    }

    if (task.userId !== session.sub) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 },
      );
    }

    await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Task deleted" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { success: false, error: "Error deleting task" },
      { status: 500 },
    );
  }
}
