export default function Title({
    title,
    color
}: {
    title: string;
    color: string;
}) {
    return <h1 className="text-4xl font-semibold font-mono uppercase">
        {title}<span className={color}>.</span>
    </h1>
}