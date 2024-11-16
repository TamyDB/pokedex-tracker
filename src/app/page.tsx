import Header from '~/components/header'
import List from '~/components/list'
import ChoosePokedex from '~/components/modal'
import Aside from "~/components/aside"

export default function HomePage() {
  return (
    <div className="flex h-screen">
      <Aside />
      <main className="container mx-auto p-4">
        <Header />
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
