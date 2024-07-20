import { z } from 'zod'

export const signupBodySchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email('Email address is invalid'),
    password: z.string({
        required_error: 'Password is required ',
    }),
    // is_admin: z.boolean({
    //     required_error: 'is_admin should be  boolean type',
    // }),
})

export const signupSchema = z.object({
    body: signupBodySchema,
})

export const loginBodySchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email('Email address is invalid'),
    password: z.string({
        required_error: 'Password is required',
    }),
    // is_admin: z.boolean({
    //     required_error: 'is_admin should be boolean type',
    // }),
})

export const loginSchema = z.object({
    body: loginBodySchema,
})
