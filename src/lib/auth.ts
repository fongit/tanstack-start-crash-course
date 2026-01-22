import { prisma } from '@/db'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { tanstackStartCookies } from "better-auth/tanstack-start";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql', // or "mysql", "postgresql","sqlite" ...etc
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // set to true in production
  },
  plugins: [tanstackStartCookies()] // make sure this is the last plugin in the array
})