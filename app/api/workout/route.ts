// app/api/workouts/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const workouts = await prisma.workout.findMany();
  return NextResponse.json(workouts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.workout.create({
    data: {
      name: body.name,
      gifUrl: body.gifUrl,
      workoutType: body.workoutType,
    },
  });
  return NextResponse.json(created);
}
