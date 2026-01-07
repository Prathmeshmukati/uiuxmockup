import { db } from "@/config/db";
import { users } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const user = await currentUser();
  console.log(user);
  const userss = await db
    .select()
    .from(users)
    .where(eq(users.email, user?.primaryEmailAddress?.emailAddress as string));

  console.log(userss);
  if (userss?.length == 0) {
    const data = {
      name: user?.fullName ?? " ",
      email: user?.primaryEmailAddress?.emailAddress as string,
    };
    const result = await db
      .insert(users)
      .values({
        ...data,
      })
      .returning();

    return NextResponse.json(result);
  }

  return NextResponse.json(userss[0] ?? {});
}
