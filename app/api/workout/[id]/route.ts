// app/api/workouts/[id]/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

export async function PATCH(req: Request, { params }: Params) {
  const body = await req.json();
  const updated = await prisma.workout.update({
    where: { id: params.id },
    data: {
      name: body.name,
      gifUrl: body.gifUrl,
      workoutType: body.workoutType,
    },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: Params) {
  const deleted = await prisma.workout.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(deleted);
}
