import { PrismaClient, User } from "@prisma/client";



const Prisma = new PrismaClient({
    log: ["error", "query"],
    errorFormat : "pretty"
})

export default Prisma