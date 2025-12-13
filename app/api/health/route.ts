import { checkDatabaseConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    const isConnectedToDB = await checkDatabaseConnection();
    if (!isConnectedToDB)
        return NextResponse.json(
            { error: 'Not connected to DB' },
            { status: 500 }
        );
    return NextResponse.json({ message: 'Connected to DB' }, { status: 200 });
}
