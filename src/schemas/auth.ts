import z from 'zod';
export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export const signupSchema = z.object({
  fullName: z.string().min(5, 'Name is required'),
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});