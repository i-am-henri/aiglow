"use client"
import { useSidebar } from "./ui/sidebar";

export function TeamLogo({
  team
}: {
  team: {
    name: string
    logo: string
  }
}) {
  const { open } = useSidebar()
  return (
    <div
      className="gap-2 p-2 flex items-center "
    >
      <div className="flex size-6 items-center justify-center rounded-sm border">
        <div className="p-1 text-sm shrink-0 rounded-md bg-blue-500">
          {team.logo}
        </div>
      </div>
      {open ? <div className="text-sm">{team.name}</div> : null}
    </div>
  )
}
