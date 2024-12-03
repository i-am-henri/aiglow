"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { create } from 'zustand'
import { pages } from "./pages"

type State = {
    page: string | undefined
}

type Actions = {
    setPage: (page: State["page"]) => void
}

export const useSettingsSidebarPageStore = create<State & Actions>((set) => ({
    page: undefined,
    setPage: (page: State["page"]) => set(() => {
        const { open, setOpen } = useSettingsSidebarOpenStore.getState()
        console.log(open)
        if (!open) setOpen(true)
        return ({ page })
    }),
}))

type OpenState = {
    open: boolean
}

type OpenActions = {
    setOpen: (open: OpenState["open"]) => void
}

export const useSettingsSidebarOpenStore = create<OpenState & OpenActions>((set) => ({
    open: false,
    setOpen: (open: OpenState["open"]) => set(() => {
        return ({ open })
    }),
}))


export function SettingsDialog() {
    const { page, setPage } = useSettingsSidebarPageStore()
    const { open, setOpen } = useSettingsSidebarOpenStore()
    console.log(page)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" className="w-min">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
                <DialogTitle className="sr-only">Settings</DialogTitle>
                <DialogDescription className="sr-only">
                    Customize your settings here.
                </DialogDescription>
                <SidebarProvider className="items-start">
                    <Sidebar collapsible="none" className="hidden md:flex">
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {pages.map((item) => (
                                            <SidebarMenuItem key={item.page}>
                                                <SidebarMenuButton
                                                    asChild
                                                    isActive={item.page === "Messages & media"}
                                                >
                                                    <a href={item.page}>
                                                        {item.logo}
                                                        <span>{item.page}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                    <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
                        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4">
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem className="hidden md:block">
                                            <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator className="hidden md:block" />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>Messages & media</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                        </header>
                        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                    key={i.toString()}
                                    className="aspect-video max-w-3xl rounded-xl bg-muted/50"
                                />
                            ))}
                        </div>
                    </main>
                </SidebarProvider>
            </DialogContent>
        </Dialog>
    )
}
