import { AppSidebar } from "@/components/app-sidebar"
import { SettingsDialog } from "@/components/settings-dialog"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SettingsDialog />
                {children}
            </SidebarInset>
        </SidebarProvider>

    )
}
