import { NextResponse } from 'next/server';
import contentData from '@/data/content.json';

export async function GET() {
  return NextResponse.json(contentData);
}