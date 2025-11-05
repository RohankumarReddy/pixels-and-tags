import { PrismaClient } from "./generated/prisma/client";

export const db = globalThis.Prisma || new PrismaClient();
if(process.env.NODE_ENV!= 'production'){
    globalThis.prisma = db
}
