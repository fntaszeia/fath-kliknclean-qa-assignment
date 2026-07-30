import { z } from 'zod';

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
