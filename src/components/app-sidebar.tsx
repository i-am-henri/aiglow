"use client"

import type React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamLogo } from "@/components/team-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Frame, PieChart, SquareTerminal } from "lucide-react"


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamLogo team={{
          name: "Henri",
          logo: "HE"
        }} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={[
          {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
              {
                title: "History",
                url: "#",
              },
              {
                title: "Starred",
                url: "#",
              },
              {
                title: "Settings",
                url: "#",
              },
            ],
          }
        ]} />
        <NavProjects projects={[
          {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
          },
          {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
          },
        ]} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{
          name: "shadcn",
          email: "m@example.com",
          avatar: "/avatars/shadcn.jpg",
        }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
