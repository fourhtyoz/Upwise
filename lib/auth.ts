import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { prisma } from './db';
import { User, Role } from '@/types';

const JWT_SECRET = process.env.JWT_SECRET!;

export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, 12);
};

export const verifyPassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: number): string => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string): { userId: number } => {
    return jwt.verify(token, JWT_SECRET) as { userId: number };
};

export const getCurrentUser = async (): Promise<User | null> => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;
        if (!token) return null;

        const decode = verifyToken(token);
        const dbUser = await prisma.user.findUnique({
            where: { id: decode.userId }
        });
        if (!dbUser) return null;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...user } = dbUser;
        return user as User;
    } catch (e) {
        console.error('Error:', e);
        return null;
    }
};

export const checkUserPermission = (
    user: User,
    requiredRole: Role
): boolean => {
    const roleHierachy = {
        [Role.GUEST]: 0,
        [Role.USER]: 1,
        [Role.MANAGER]: 2,
        [Role.ADMIN]: 3
    };
    return roleHierachy[user.role] >= roleHierachy[requiredRole];
};
