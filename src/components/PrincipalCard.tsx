import Image from 'next/image'

type Props = {
    width: number,
    height: number,
    src: string,
    alt: string,
    text: string
}

export default function PrincipalCard({ width, height, src, alt, text }: Props) {
    return (
        <a href="#" className="bg-white/10 flex items-center gap-4 rounded-md hover:bg-white/20 transition-colors">
            <Image className="rounded-l-md" width={width} height={height} src={src} alt={alt} />
            <strong>{text}</strong>
        </a>
    )
}