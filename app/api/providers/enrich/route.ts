import { NextResponse } from 'next/server';
import { searchPhotographyCompanies } from '@/lib/google-places';

export async function GET(request: Request) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing GOOGLE_PLACES_API_KEY in environment.' }, { status: 400 });
  }

  const { searchParams } = new URL(request.url);
  const city = (searchParams.get('city') ?? 'Kochi').trim();

  if (!city) {
    return NextResponse.json({ error: 'city query is required' }, { status: 400 });
  }

  try {
    const results = await searchPhotographyCompanies(city, apiKey);
    return NextResponse.json({ city, count: results.length, results });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Could not fetch enrichment results' },
      { status: 500 }
    );
  }
}
