

export default function ContactTitle({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="pt-0 lg:pt-10 pb-20 flex items-center justify-center">
            {children}
        </div>
    );
}
