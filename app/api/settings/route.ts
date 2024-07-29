import { groq } from 'next-sanity';
import client from '@/sanity/config.client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'setting']{
        comp_email,
        comp_location,
        comp_name,
        comp_phone,
        facebook,
        instagram,
        twitter,
        youtube
      }
    `
    );

    return new Response(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
}
