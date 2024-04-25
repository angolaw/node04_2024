import "dotenv/config"
import {z} from "zod"

const envSchema = z.object({
    DATABASE_URL: z.string(),
    PORT: z.number(),
    NODE_ENV: z.enum(["development", "testing", "production"]).default("production"),


})

 const _env = envSchema.safeParse(process.env)

 if(_env.success === false){
    console.error("Invalid environment configuration at: ", _env.error.format())
    throw new Error(
        "Invalid environment configuration"
    )
 }

 export const env = _env.data

