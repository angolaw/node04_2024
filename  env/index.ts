import "dotenv/config"
import {z} from "zod"

const envSchema = z.object({
    DATABASE_URL: z.string(),
    PORT: z.number(),
    NODE_ENV = z.enum("development", "testing", "production").default("production"),


})

export const env = envSchema.parse(process.env)

