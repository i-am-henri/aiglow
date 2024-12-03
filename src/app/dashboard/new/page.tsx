import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createDocument } from "./action";

export default function NewDocument() {
    return (
        <>
            <Header breadcrumbs={[{ link: "Home", href: "/dashboard" }, { link: "New", href: "/dashboard/new" }]} />
            <div className="flex items-center justify-center h-full">
                <form action={createDocument} className="mx-10 gap-4 flex flex-col items-start sm:mx-0 sm:w-[60%] md:w-[40%]">
                    <h2 className="text-lg font-medium">
                        Create a new document
                    </h2>
                    <Input name="name" placeholder="Name" />
                    <Input name="description" placeholder="Description" />
                    <div className="flex items-center justify-between flex-col md:flex-row gap-2">
                        <Button variant={"secondary"} type="submit" className="w-full">Create</Button>
                    </div>
                </form>
            </div>
        </>
    )
}