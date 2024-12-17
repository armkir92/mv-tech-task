import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens'),
  info: z
    .string()
    .min(10, 'Additional information must be at least 10 characters')
    .max(500, 'Additional information must be less than 500 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>
