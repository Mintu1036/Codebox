import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

/**
 * Create or fetch the authenticated user's database record.
 *
 * @param req - The incoming POST request
 * @returns The user's database record as JSON; if no record existed, a new record is created with name, email, and points and returned
 */
export async function POST(req: NextRequest) {

    const user = await currentUser();

    //If user already exist?
    const users = await db.select().from(usersTable)
        //@ts-ignore
        .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress))

    //If Not The Create New user Record
    if (users?.length <= 0) {
        const newUser = {
            name: user?.fullName??'',
            email: user?.primaryEmailAddress?.emailAddress??'',
            points: 0
        }

        const result = await db.insert(usersTable)
            .values(newUser).returning()

            return NextResponse.json(result[0])
    }

    return NextResponse.json(users[0])
    //Return User Info

}