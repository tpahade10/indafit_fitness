// app/api/reviews/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name,  message } = await req.json();

    if (!name || !message ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newReview = await prisma.review.create({
      data: {
        name,
        message,
        rating,
      },
    });

    return NextResponse.json(newReview);
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
  }
}
