import {
    Home as HomeIcon,
    Search,
    Library,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import TopButton from '@/components/LeftMenu/TopButton'
import PlayListItem from "@/components/LeftMenu/PlayListItem";
import PrincipalCard from '@/components/PrincipalCard';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
        <div className="flex flex-1">
            <aside className="w-72 bg-zinc-950 p-6">
                <nav className="space-y-4">
                    <TopButton icon={<HomeIcon />} text="Home" />
                    <TopButton icon={<Search />} text="Search" />
                    <TopButton icon={<Library />} text="Your Library" />
                </nav>
                <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
                    <PlayListItem text="Aleatorio" />
                    <PlayListItem text="Anime" />
                    <PlayListItem text="Xbox Receba" />
                </nav>
            </aside>
            <main className="flex-1 p-6">
                <div className="flex items-center gap-4">
                    <div className="rounded-full bg-black/40 p1">
                        <ChevronLeft />
                    </div>
                    <div className="rounded-full bg-black/40 p1">
                        <ChevronRight />
                    </div>
                </div>
                <h1 className="font-semibold text-3xl mt-10 pb-6">I Love Jujutsu</h1>
                <div className="grid grid-cols-3 gap-6">
                <PrincipalCard width={120} height={120} alt='test' src='/Gorillaz-Plastic-Beach.jpg' text='Fake Natty' />
                <PrincipalCard width={120} height={120} alt='test' src='/Gorillaz-Plastic-Beach.jpg' text='Fake Natty' />
                <PrincipalCard width={120} height={120} alt='test' src='/Gorillaz-Plastic-Beach.jpg' text='Fake Natty' />
                <PrincipalCard width={120} height={120} alt='test' src='/Gorillaz-Plastic-Beach.jpg' text='Fake Natty' />
                <PrincipalCard width={120} height={120} alt='test' src='/Gorillaz-Plastic-Beach.jpg' text='Fake Natty' />
                <PrincipalCard width={120} height={120} alt='test' src='/Gorillaz-Plastic-Beach.jpg' text='Fake Natty' />
                </div>
            </main>
        </div>
        <footer className="bg-zinc-800 border-zinc-700 p-6">
            footer
        </footer>
    </div>
  )
}
