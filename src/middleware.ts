import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authorize } from "./lib/auth";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get("token")?.value;

    try {

        if (token) {
            await authorize();
            if (pathname === "/login" || pathname === "/register") {
                return NextResponse.redirect(new URL("/", request.url));
            }
            return NextResponse.next();
        }
    } catch (error) {
        console.error("Authorization error:", error);

        // If no token or token is invalid, redirect appropriately
        if (!token && pathname !== "/register") {
            return NextResponse.redirect(new URL("/register", request.url));
        }
        if (token && pathname !== "/login") {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/register",
        "/login",
    ],
};
