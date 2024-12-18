export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return {
        title: `Document ${id}`
    }
}
export default async function Document({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (
        <div className="flex flex-col gap-4 p-4 pt-0">
            <h2 className="text-lg font-medium">
                Welcome back! - we missed you!
            </h2>
        </div>
    )
}