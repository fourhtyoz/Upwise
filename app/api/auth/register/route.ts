import { generateToken, hashPassword } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const registerSchema = z.object({
    email: z.email('Invalid email format').trim().toLowerCase(),
    username: z.string().trim(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().min(6, 'Password must be at least 6 characters')
});

export async function POST(request: NextRequest) {
    try {
        let body;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { error: 'Invalid request format' },
                { status: 400 }
            );
        }

        const validation = registerSchema.safeParse(body);
        if (!validation.success) {
            const errors = validation.error.issues.map((err) => ({
                field: err.path.join('.'),
                message: err.message
            }));

            return NextResponse.json(
                { error: 'Validation failed', details: errors },
                { status: 400 }
            );
        }

        const { email, username, firstName, lastName, password } =
            validation.data;

        const emailExists = await prisma.user.findUnique({ where: { email } });
        if (emailExists) {
            return NextResponse.json(
                { error: 'User with this email already exists}' },
                { status: 409 }
            );
        }

        const usernameExists = await prisma.user.findUnique({
            where: { username }
        });
        if (usernameExists) {
            return NextResponse.json(
                { error: 'User with this username already exists}' },
                { status: 409 }
            );
        }

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                firstName,
                lastName,
                password: hashedPassword
            }
        });

        const response = NextResponse.json({
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            }
        });

        // set cookie
        const token = generateToken(user.id);
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7 // days
        });

        return response;
    } catch (e) {
        console.error('Registration failed:', e);
        return NextResponse.json(
            { error: 'Internal server error. Something went wrong' },
            { status: 500 }
        );
    }
}
