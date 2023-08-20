

type Props = {
    text: string
}

export default function PlayListItem({ text }: Props) {
    return (
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
            {text}
        </a>
    )
}
