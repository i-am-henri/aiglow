import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { createId } from '@paralleldrive/cuid2';
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createDocument(e: FormData) {
    "use server"
    const name = e.get("name") as string
    const description = e.get("description") as string | undefined

    const parse = await z.object({
        name: z.string(),
        description: z.string().optional(),
    }).safeParseAsync({
        name,
        description,
    })

    if (!parse.success) {
        throw new Error("Invalid data")
    }

    const user = await auth.api.getSession({
        headers: await headers()
    })

    if (!user) {
        throw new Error("No session")
    }

    const document = await db.document.create({
        data: {
            name: parse.data.name,
            id: createId(),
            userId: user?.user.id,
        },
    })

    redirect(`/dashboard/${document.id}`)
}