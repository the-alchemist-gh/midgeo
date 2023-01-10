// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// import type { NextRequest } from "next/server";
// // import countries from '../../../lib/countries.json';


// export default function myapi(req: NextRequest) {
//    return new Response(`Hello, from ${req.url} I'm now on edge API Route`)
// }

// export const config = {
//   runtime: 'experimental-edge', // this is a pre-requisite
// };



import { NextResponse } from 'next/server';
import countries from '../../lib/countries.json'
export const config = {
  runtime: 'experimental-edge', // this is a pre-requisite
};

// const JSON_URL =
//   'https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json';

export default function headers(req) {
  const country = req.headers.get('x-vercel-ip-country') || 'GH';
  // console.log({ country });
  const object = countries.find((obj) => obj.cca2 === country);
  console.log(object.cca2)
  return NextResponse.json({ name: Object.keys(object.cca2)[0] });
}
