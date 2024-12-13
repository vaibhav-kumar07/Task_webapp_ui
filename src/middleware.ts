import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get("token")?.value;

    // If token is found, redirect to login page
    if (token && pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // If no token is found, redirect to register page
    if (!token && pathname !== "/register") {
        return NextResponse.redirect(new URL("/register", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/register",
        "/login",
        "/dashboard",
    ],
};
