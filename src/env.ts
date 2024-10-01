import z from "zod";

const envSchema = z.object({
  VITE_GITHUB_TOKEN: z.string(),
});

const env = envSchema.parse(import.meta.env);
export default env;
