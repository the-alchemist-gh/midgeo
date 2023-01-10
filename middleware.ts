import { NextRequest, NextResponse } from 'next/server'

// Set pathname were middleware will be executed
export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
  // Get country
  const country = req.geo?.country
  const url = req.nextUrl.clone()

// Update pathname
  url.pathname = `/${country}`
  // req.nextUrl.pathname = 

  // Rewrite to URL
  return NextResponse.rewrite(url)
}











// // middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextFetchEvent, NextRequest } from "next/server";


// // This function can be marked `async` if using `await` inside

// const BLOCKED_COUNTRY ="GH"
// export async function middleware(request: NextRequest) {
//   const myCountry = request.geo?.country
//   console.log(myCountry)

//   if(myCountry === BLOCKED_COUNTRY){
//     return NextResponse.redirect('/login')
//   }

//   return NextResponse.redirect(new URL('/about-2', request.url))
// }
