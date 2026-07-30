import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  name: z.object({
    firstname: z.string(),
    lastname: z.string(),
  }),
  address: z.object({
    city: z.string(),
    street: z.string(),
    number: z.number(),
    zipcode: z.string(),
    geolocation: z.object({
      lat: z.string(),
      long: z.string(),
    }),
  }),
  phone: z.string(),
});

export const UserArraySchema = z.array(UserSchema);
