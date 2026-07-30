import { z } from 'zod';

export const AuthTokenSchema = z.object({
  token: z.string(),
});
