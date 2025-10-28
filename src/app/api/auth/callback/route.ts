import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  // Здесь получаем access token
  // Сохраняем в cookies или session

  return NextResponse.redirect('/');
}