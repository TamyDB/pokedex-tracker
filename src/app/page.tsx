import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { House } from 'lucide-react'
import List from '~/components/list'
import ChoosePokedex from '~/components/ui/modal'
import Color from "~/styles/themes"

export default function HomePage() {
  return (
    <div className="flex h-screen">
      <aside className="flex w-20 flex-col items-center gap-4 bg-gray-800 py-4 text-white">
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
      <main className="container mx-auto p-4">
        <div className="flex flex-col items-center p-4">
          <div className="h-32 w-32 rounded-full bg-black p-4 text-white">
            Profile Picture
          </div>
          <h1 className="text-3xl font-bold">Teste</h1>
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-3xl font-bold">List</p>
            <p className="text-lg">
              Choose the pokedex region you want to check
            </p>
          </div>

          <ChoosePokedex />
        </div>

        <List />

        {/* <ul className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
          <li>
            <Link href="/list/1">
              <div className="cursor-pointer rounded-lg bg-gray-200 hover:bg-gray-300 transition p-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-black p-4 text-white"></div>
                  <div className="w-full">
                    <p className="font-bold">List name</p>
                    <div className="flex justify-between">
                      <span>Generation III</span>
                      <span className="text-sm">last update: 2021-09-01</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/list/1">
              <div className="cursor-pointer rounded-lg bg-gray-200 hover:bg-gray-300 transition p-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-black p-4 text-white"></div>
                  <div className="w-full">
                    <p className="font-bold">List name</p>
                    <div className="flex justify-between">
                      <span>Generation III</span>
                      <span className="text-sm">last update: 2021-09-01</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/list/1">
              <div className="cursor-pointer rounded-lg bg-gray-200 hover:bg-gray-300 transition p-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-black p-4 text-white"></div>
                  <div className="w-full">
                    <p className="font-bold">List name</p>
                    <div className="flex justify-between">
                      <span>Generation III</span>
                      <span className="text-sm">last update: 2021-09-01</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul> */}
      </main>
    </div>
  )
}
