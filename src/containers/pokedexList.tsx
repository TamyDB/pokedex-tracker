import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";
import colors from "~/styles/themes"

export default async function List() {
  const lists = await db.query.lists.findMany()

  return (
    <>
      <div className="flex flex-row items-center justify-center py-10">
        <div className="w-2/4">
          <p className="text-3xl font-bold">Pokedex list</p>
          <p className="text-lg">
            Choose the pokedex region you want to check
          </p>
        </div>

      </div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
        {lists.map(async (list) => (
          <li key={list.id}>
            <h2 className="font-semibold text-lg py-4">Last pokemons added</h2>
            <Link href={`/list/${list.id}`}>
              <div className="rounded-lg hover:bg-gray-300 transition p-4" style={{ background: colors.gastly.white }}>
                <div className="flex items-center gap-4">
                  <Image
                    src={await getImage(list.lastPokeonId) ?? ""}
                    alt="last pokemon"
                    width={64}
                    height={64}
                  />
                  <div className="w-full">
                    <p className="font-bold">{list.name}</p>
                    <div className="flex justify-between">
                      <span>{list.game}</span>
                      <span className="text-sm">last update: {list.updatedAt?.toLocaleDateString() ?? list.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

async function getImage(index: number | null) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index ?? 1}`)

  if (!res.ok || res.status !== 200) {
    throw new Error('Network response was not ok')
  }

  const data = await res.json() as { sprites: { front_default: string } }

  if (!data) {
    return null
  }

  return data.sprites.front_default
}