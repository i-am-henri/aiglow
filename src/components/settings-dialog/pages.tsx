"use client"

import { GalleryHorizontalEnd } from "lucide-react"
import type React from "react"

type Page = {
    page: string,
    component: React.ReactNode,
    logo: JSX.Element,
}

export const pages: Page[] = [
    {
        page: "index",
        component: <div>Index</div>,
        logo: <GalleryHorizontalEnd className="size-4" />
    },
    {
        page: "notifications",
        component: <div>Notifications</div>,
        logo: <GalleryHorizontalEnd className="size-4" />
    },
    {
        page: "appearance",
        component: <div>Appearance</div>,
        logo: <GalleryHorizontalEnd className="size-4" />
    },
    {
        page: "privacy",
        component: <div>Privacy</div>,
        logo: <GalleryHorizontalEnd className="size-4" />
    }
]