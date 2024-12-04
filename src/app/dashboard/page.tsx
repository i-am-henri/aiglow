import Header from "@/components/header"
import { PlusIcon } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { getDocuments } from "./action"

export default async function Page() {
  return (
    <>
      <Header breadcrumbs={[{ link: "Home", href: "/dashboard" }]} />
      <div className="flex flex-col gap-4 p-4 pt-0">
        <h2 className="text-lg font-medium">
          Welcome back! - we missed you!
        </h2>
        <div className="flex gap-4 overflow-x-auto">
          <Link href="/dashboard/new" className="flex items-center justify-center rounded-md border cursor-pointer hover:scale-[0.96] transition-all  border-border bg-muted/40 p-4 w-3xl aspect-video">
            <PlusIcon className="size-4 text-muted-foreground" />
          </Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Documents />
          </Suspense>
        </div>
      </div>
    </>
  )
}

async function Documents() {
  const documents = await getDocuments()
  return (
    <>
      {
        documents.map((document) => (
          <Link href={`/dashboard/${document.id}`} key={document.id} className="flex items-center justify-center rounded-md border cursor-pointer hover:scale-[0.96] transition-all  border-border bg-muted/40 p-4 w-3xl aspect-video">
            {document.name}
          </Link>
        ))
      }
    </>
  )
}