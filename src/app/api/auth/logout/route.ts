import { NextResponse } from 'next/server';
import { deleteSession } from '@/lib/session';

export async function POST() {
  try {
    await deleteSession();
    return NextResponse.json({ message: 'Logged out' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error logging out' }, { status: 500 });
  }
}
