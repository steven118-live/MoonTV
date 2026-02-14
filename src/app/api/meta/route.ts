export const runtime = 'edge';

export async function GET(request: Request) {
  const html = '<meta name="moon">';
  const headers = new Headers();

  headers.set('Content-Type', 'text/html; charset=utf-8');
  headers.set('Content-Length', Buffer.from(html).length.toString());
  headers.set('Date', new Date().toUTCString());
  headers.set('Connection', 'keep-alive');
  headers.set('Server', 'MoonTV-Edge');
  headers.set('Alt-Svc', 'h3=":443"; ma=86400');
  headers.set('CF-Cache-Status', 'DYNAMIC');
  headers.set('CF-Ray', crypto.randomUUID().slice(0, 16) + '-IAD');
  headers.set('Strict-Transport-Security', 'max-age=31536000');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  headers.set('CDN-Cache-Control', 'public, s-maxage=15720000');
  headers.set('Vercel-CDN-Cache-Control', 'public, s-maxage=15720000');
  headers.set('Expires', '0');
  headers.set('Speculation-Rules', '/cdn-cgi/speculation');
  headers.set('NEL', JSON.stringify({
    report_to: 'cf-nel',
    max_age: 604800,
    success_fraction: 0.0,
  }));
  headers.set('Report-To', JSON.stringify({
    group: 'cf-nel',
    max_age: 604800,
    endpoints: [{
      url: 'https://a.nel.cloudflare.com/report/v4?s=' + crypto.randomUUID(),
    }],
  }));

  return new Response(html, {
    status: 200,
    headers,
  });
}