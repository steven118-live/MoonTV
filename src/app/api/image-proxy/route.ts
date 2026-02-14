import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // enable it when host on Vercel
//export const runtime = 'edge'; //enable it when host on Cloudflare

// OrionTV image proxy handler
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl || !imageUrl.startsWith('https://')) {
    return NextResponse.json({ error: 'Missing image URL' }, { status: 400 });
  }

  const headers = {
    Referer: 'https://movie.douban.com/',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    Accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
  };

  let imageResponse: Response | null = null;

  // Retry up to 3 times if fetch fails
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      imageResponse = await fetch(imageUrl, { headers });
      if (imageResponse.ok) break;
    } catch (_) {
      // Silent retry
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  if (!imageResponse || !imageResponse.ok) {
    return NextResponse.json(
      { error: imageResponse?.statusText || 'Fetch failed' },
      { status: imageResponse?.status || 500 }
    );
  }

  const contentType = imageResponse.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) {
    return NextResponse.json(
      { error: `Invalid content-type: ${contentType}` },
      { status: 415 }
    );
  }

  const buffer = await imageResponse.arrayBuffer();

  const responseHeaders = new Headers();
  responseHeaders.set('Content-Type', contentType);
  responseHeaders.set('Access-Control-Allow-Origin', '*');
  responseHeaders.set('Cache-Control', 'public, max-age=15720000, s-maxage=15720000');
  responseHeaders.set('CDN-Cache-Control', 'public, s-maxage=15720000');
  responseHeaders.set('Vercel-CDN-Cache-Control', 'public, s-maxage=15720000');

  return new Response(buffer, {
    status: 200,
    headers: responseHeaders,
  });
}
