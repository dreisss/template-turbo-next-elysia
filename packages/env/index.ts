/** biome-ignore-all lint/style/useNamingConvention: Global Variables */

import { Type } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

const envSchema = Type.Object({
  DATABASE_URL: Type.String({ minLength: 1 }),
  SERVER_PORT: Type.Number({ default: '3000' }),
  WEB_PORT: Type.Number({ default: '3001' }),
})

export const env = Value.Parse(envSchema, process.env)
