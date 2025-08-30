export default function Title({ title }: { title: string }) {
    return <h1 className={`text-4xl font-semibold font-mono uppercase`}>
        {title}<span className="text-blue-400">.</span>
    </h1>
}