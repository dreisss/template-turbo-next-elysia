import { Elysia } from 'elysia';
import { db } from '@/db/connection';
import { schema } from '@/db/schema';

export const getRooms = new Elysia().get('/', async () => {
  const results = await db
    .select({
      id: schema.rooms.id,
      name: schema.rooms.name,
    })
    .from(schema.rooms)
    .orderBy(schema.rooms.createdAt);

  return { results };
});
