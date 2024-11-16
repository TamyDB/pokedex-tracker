import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { House } from 'lucide-react'
import Link from 'next/link'
import colors from "~/styles/themes"


export default function Aside() {
    return (
        <aside className="flex w-20 flex-col items-center gap-4 bg-gray-800 py-4 text-white" style={{ background: colors.gastly.secondary }}>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <Link href="/">
                <House />
            </Link>
        </aside>
    )
}