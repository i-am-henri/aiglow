export async function generateMetadata({ params }: { params: { id: string } }) {
    return {
        title: `Document ${params.id}`
    }
}
export default async function Document() {
    return (
        <div className="flex flex-col gap-4 p-4 pt-0">
            <h2 className="text-lg font-medium">
                Welcome back! - we missed you!
            </h2>
        </div>
    )
}