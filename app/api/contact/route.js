// app/api/contact/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const contact = await prisma.contact.create({
      data: {
        email: body.email,
        message: body.message,
        createdAt: new Date(), 
      },
    });

    return NextResponse.json({ success: true, contact });
  } catch (err) {
    console.error("Error creating contact:", err);
    return NextResponse.json({ error: "Failed to create contact" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}
