export async function GET(req: Request, res: Response) {
    console.log('GET REQUEST');
    return new Response(JSON.stringify({ name: 'Josh' }), {
        status: 401,
    });
}

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    console.log('POST REQUEST', body);
    return new Response('OK');
}
