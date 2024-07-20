import User from '../models/users.models'
import bcrypt, { hash } from 'bcryptjs'
import { signupBodySchema } from '../validators/auth.validator'
import { z } from 'zod'
import Boom from '@hapi/boom'
import {
    createAccessToken,
    createRefreshToken,
    verifyRefreshToken,
} from '../utils/token.util'

export const signup = async (user: z.infer<typeof signupBodySchema>) => {
    const { email, password } = user
    try {
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ where: { email: email } })

        if (existingUser) {
            throw Boom.conflict('User with this email already exists')
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        return await User.create({
            email,
            password: hashedPassword,
        })
    } catch (e: any) {
        if (e.code === 11000 && e.keyPattern?.email) {
            throw Boom.conflict('User with this email already exists')
        } else {
            throw e
        }
    }
}

export async function login(email: string, password: string) {
    const user = await User.findOne({ email })

    if (!user) {
        throw Boom.badRequest('Username or password is incorrect.')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        throw Boom.badRequest('Username or password is incorrect.')
    }

    const accessToken = createAccessToken(user._id)

    const refreshToken = createRefreshToken(user._id)

    return { accessToken, refreshToken }
}

export async function refresh(refreshToken: string) {
    try {
        const decodedToken: any = verifyRefreshToken(refreshToken)
        return createAccessToken(decodedToken.userId)
    } catch (error) {
        throw Boom.unauthorized('User is not logged in')
    }
}
