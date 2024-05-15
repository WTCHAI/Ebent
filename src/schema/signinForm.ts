import { z } from 'zod';

function isValidEmail(email: string): boolean {
    // Regular expression for validating an email
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
export const SigninFormScema = z.object({
    email: z.string()
        .email()
        .refine((value) => isValidEmail(value), {
            message: 'Invalid email format',
        }),
    password: z.string()
        .min(6, { message: 'Password should be at least 6 characters long' })
        .max(15, { message: 'Password should be at most 15 characters long' })
        .refine((value) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(value), {
            message: 'Password should contain at least one special character',
        }),
});

export type SigninFormType = z.infer<typeof SigninFormScema>;


  