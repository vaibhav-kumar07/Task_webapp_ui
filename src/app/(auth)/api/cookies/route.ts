import { NextRequest, NextResponse } from "next/server";
import {
    getCookieValue,
    setCookie,
    deleteCookie,
} from "@/lib/common/cookie-utils";

export async function GET(request: NextRequest) {
    try {
        const key = request.nextUrl.searchParams.get("key");
        if (!key) {
            return NextResponse.json(
                { error: "Cookie key is required" },
                { status: 400 },
            );
        }

        const value = getCookieValue(key);
        if (!value) {
            return NextResponse.json(
                { value: null, message: "Cookie not found" },
                { status: 404 },
            );
        }

        return NextResponse.json({ value }, { status: 200 });
    } catch (error) {
        console.error("Error in GET /api/cookies:", error);
        return NextResponse.json({ error }, { status: 500 });
    }
}

// POST: Login (Set Cookies)
export async function POST(request: NextRequest) {
    try {
        const key = request.nextUrl.searchParams.get("key");
        const value = request.nextUrl.searchParams.get("value");
        if (!key && !value) {
            return NextResponse.json(
                { error: "Cookie key and value  is required" },
                { status: 400 },
            );
        }
        const response = NextResponse.json(
            { message: "Login successful" },
            { status: 200 },
        );
        setCookie(key as string, value as string);
        return response;
    } catch (error) {
        console.error("Error in POST /api/cookies:", error);
        return NextResponse.json({ error }, { status: 500 });
    }
}

// DELETE: Logout (Clear Cookies)
export async function DELETE(request: NextRequest) {
    try {
        const key = request.nextUrl.searchParams.get("key");
        if (!key) {
            return NextResponse.json(
                { error: "Cookie key is required" },
                { status: 400 },
            );
        }
        deleteCookie(key);
        return NextResponse.json(
            { message: "cookie deleted succesfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
