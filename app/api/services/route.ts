import { groq } from 'next-sanity';
import client from '@/sanity/config.client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'service']{
        _id,
        title,
        "excerpt": array::join(string::split((pt::text(body)), "")[0..100], "") + "...",
      }
    `
    );

    return new Response(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
}
