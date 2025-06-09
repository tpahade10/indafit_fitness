// app/api/register/route.ts

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const body = await req.json();
  const { email, password, userType, address, number } = body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        userType,
        address,
        number,
      },
    });

    const response = NextResponse.json({ success: true, userType: newUser.userType });

    // Set userType cookie
    response.headers.set(
      'Set-Cookie',
      `user=${newUser}; Path=/; HttpOnly`
    );

    return response;
  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
