import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/product", "/users", "/"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
        const isLoggedIn = true; // JWT or auth check
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next();
}


export const config = {
    matcher: ["/", "/blog/:path*", "/users/:path*"], // runs for /blog and all subroutes
};