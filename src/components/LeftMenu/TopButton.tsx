import { ReactNode } from 'react'

type Props = {
    icon:  ReactNode,
    text: string
}

export default function TopButton({ text, icon }: Props) {
    return (
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            {icon}
            {text}
        </a>
    )
}