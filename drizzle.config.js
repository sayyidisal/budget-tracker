import { cwd } from 'node:process';
import {loadEnvConfig} from '@next/env'

loadEnvConfig(cwd())

export default {
  schema: "./utils/schema.jsx",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  }
};