// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `pokedex-tracker_${name}`);

export const gameEnum = pgEnum("game", [
  "red",
  "blue",
  "yellow",
  "gold",
  "silver",
  "crystal",
  "ruby",
  "sapphire",
  "emerald",
  "firered",
  "leafgreen",
  "diamond",
  "pearl",
  "platinum",
  "heartgold",
  "soulsilver",
  "black",
  "white",
  "black2",
  "white2",
  "x",
  "y",
  "omegaRuby",
  "alphaSapphire",
  "sun",
  "moon",
  "ultraSun",
  "ultraMoon",
  "sword",
  "shield",
])

export const trainer = createTable(
  "trainer",
  {
    id: varchar("id").primaryKey(),
    userId: varchar("user_id"),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (trainer) => ({
    nameIndex: index("trainer_name_idx").on(trainer.name),
  })
);

export const lists = createTable(
  "lists",
  {
    id: varchar("id").primaryKey(),
    trainerId: varchar("trainer_id").references(() => trainer.id),
    name: varchar("name", { length: 256 }),
    game: gameEnum("game"),
    lastPokeonId: integer("last_pokemon_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  }
);

export const caughtPokemon = createTable(
  "caught_pokemon",
  {
    id: varchar("id").primaryKey(),
    listId: varchar("list_id").references(() => lists.id),
    pokemonId: integer("pokemon_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  }
);

export const listsTrainers = createTable(
  "lists_trainers",
  {
    listId: varchar("list_id").references(() => lists.id),
    trainerId: varchar("trainer_id").references(() => trainer.id),
  },
  (listsTrainers) => ({
    listIdIndex: index("lists_trainers_list_id_idx").on(listsTrainers.listId),
    trainerIdIndex: index("lists_trainers_trainer_id_idx").on(
      listsTrainers.trainerId
    ),
  })
);