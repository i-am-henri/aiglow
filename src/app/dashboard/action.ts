"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { headers } from "next/headers"

export async function getDocuments() {

    const user = await auth.api.getSession({
        headers: await headers()
    })

    if (!user) {
        throw new Error("No session")
    }

    const documents = await db.document.findMany({
        where: {
            userId: user.user.id
        }
    })

    return documents
}