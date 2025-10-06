import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, project, rating, text } = body || {};
    if (!name || !email || !text) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const parsedRating = Number.isFinite(Number(rating)) ? Number(rating) : 5;

    const review = await prisma.review.create({
      data: {
        name,
        email,
        project: project || null,
        rating: Math.max(1, Math.min(5, parsedRating)),
        text,
      },
    });

    return NextResponse.json({ success: true, review });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
      take: 30,
    });
    return NextResponse.json({ success: true, reviews });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: 'Failed to load reviews' },
      { status: 500 }
    );
  }
}
