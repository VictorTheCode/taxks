import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { SessionUser } from "@/types";

export default async function getSession() {
  const cookieStore = await cookies();
  try {
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return null;
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload as SessionUser;
  } catch (error) {
    console.log(error);
    return null;
  }
}
