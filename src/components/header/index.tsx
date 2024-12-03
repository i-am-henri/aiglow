"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Separator } from "../ui/separator"
import { SidebarTrigger } from "../ui/sidebar"

type BreadcrumbType = {
    link: string,
    href: string,
}

export default function Header({
    breadcrumbs,
}: {
    breadcrumbs: BreadcrumbType[]
}) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumbs.map((item, index) => (
                            <>
                                <BreadcrumbItem key={item.link} className="hidden md:block">
                                    <BreadcrumbLink href={item.href}>
                                        {item.link}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {index !== breadcrumbs.length - 1 && (
                                    <BreadcrumbSeparator key={`${index.toString()}-separator`} className="hidden md:block" />
                                )}
                            </>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    )
}