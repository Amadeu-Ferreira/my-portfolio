export default function SectionTitle({
    title
}: {
    title: string;
}) {
    return <h1 className="text-4xl font-semibold font-mono mb-4 uppercase">{title}<span className="text-blue-400">.</span></h1>
}