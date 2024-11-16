import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

export default async function List() {
  const lists = await db.query.lists.findMany()

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
      {lists.map(async (list) => (
        <li key={list.id}>
          <Link href={`/list/${list.id}`}>
            <div className="rounded-lg bg-gray-200 hover:bg-gray-300 transition p-4">
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