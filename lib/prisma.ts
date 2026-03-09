import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL || "";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prismaClient = () => {
  return new PrismaClient({
    adapter,
  });
};

type PrismaClientType = ReturnType<typeof prismaClient>;

const globalForPrisma = global as unknown as {
  prisma: PrismaClientType | null;
};

const prisma = globalForPrisma.prisma ?? prismaClient();
export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
