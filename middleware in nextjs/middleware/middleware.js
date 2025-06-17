import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.json({message:"welcome to the page"})
  return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: '/about/:path*',
}