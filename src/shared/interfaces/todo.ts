import { z } from 'zod';

export const schemaTodo = z.object({
  completed: z.boolean(),
  id: z.number(),
  title: z.string(),
});

export type TodoModel = z.infer<typeof schemaTodo>;
