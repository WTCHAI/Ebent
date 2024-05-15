import { z } from 'zod';

export const SigninFormScema = z.object({
    email: z.string().email(),
    password: z.string()
    .min(6,{ message : 'Password should be at least 6 characters long'})
    .max(15,{ message : 'Password should be at most 15 characters long'})
})

export type SigninFormType = z.infer<typeof SigninFormScema>;
