import { AppSidebar } from "@/components/app-sidebar"
import Header from "@/components/header"
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header breadcrumbs={[{ link: "Home", href: "/dashboard" }]} />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h2 className="text-lg font-medium">
            Welcome back! - we missed you!
          </h2>
        </div>
      </SidebarInset>
    </SidebarProvider >
  )
}
