import { groq } from 'next-sanity';
import client from '@/sanity/config.client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'product']{
        "title": product,
        'image': mainImage.asset->url
      }
    `
    );

    return new Response(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
}
