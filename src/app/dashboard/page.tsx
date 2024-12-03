import Header from "@/components/header"
import { PlusIcon } from "lucide-react"

export default function Page() {
  return (
    <>
      <Header breadcrumbs={[{ link: "Home", href: "/dashboard" }]} />
      <div className="flex flex-col gap-4 p-4 pt-0">
        <h2 className="text-lg font-medium">
          Welcome back! - we missed you!
        </h2>
        <div className="flex gap-4 overflow-x-auto">
          <div className="flex items-center justify-center rounded-md border cursor-pointer hover:scale-[0.96] transition-all  border-border bg-muted/40 p-4 w-3xl aspect-video">
            <PlusIcon className="size-4 text-muted-foreground" />
          </div>
          <div className="flex items-center justify-center rounded-md border cursor-pointer hover:scale-[0.96] transition-all  border-border bg-muted/40 p-4 w-3xl aspect-video">
            Geschichte
          </div>
        </div>
      </div>
    </>
  )
}
