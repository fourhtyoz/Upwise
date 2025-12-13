export enum Role {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER',
    GUEST = 'GUEST'
}

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: Role;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
