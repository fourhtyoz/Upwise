import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyPassword, generateToken } from '@/lib/auth';
import { z } from 'zod';

const loginSchema = z.object({
    email: z.email('Invalid email format').trim().toLowerCase(),
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

        const validation = loginSchema.safeParse(body);
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

        const { email, password } = validation.data;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json(
                { error: 'Incorrect credentials' },
                { status: 401 }
            );
        }

        const isValidPassword = await verifyPassword(password, user.password);
        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Incorrect credentials' },
                { status: 401 }
            );
        }

        const token = generateToken(user.id);
        const response = NextResponse.json({
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7 // days
        });
        return response;
    } catch (e) {
        console.error('Login failed:', e);
        return NextResponse.json(
            { error: 'Internal server error. Something went wrong' },
            { status: 500 }
        );
    }
}
