import { z } from 'zod';

/**
 * Zod Schemas for Fake Store API response validation
 */

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

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }).optional(),
});

export const ProductArraySchema = z.array(ProductSchema);

export const AuthTokenSchema = z.object({
  token: z.string(),
});

export const CartSchema = z.object({
  id: z.number(),
  userId: z.number(),
  date: z.string(),
  products: z.array(
    z.object({
      productId: z.number(),
      quantity: z.number(),
    })
  ),
});

export const CartArraySchema = z.array(CartSchema);
