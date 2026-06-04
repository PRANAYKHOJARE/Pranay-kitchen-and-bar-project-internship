import { z } from "zod";

export async function getGreeting(data) {
  const schema = z.object({
    name: z.string().min(1),
  });

  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid input");
  }

  return {
    greeting: `Hello, ${parsed.data.name}!`,
    mode: "frontend",
  };
}
