import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import { inter } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import { getCookieValue } from "@/lib/common/cookie-utils";

export const metadata: Metadata = {
    title: "Task App",
    description: "Record Your Task with us ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const token = getCookieValue("token");
    return (
        <html lang="en" className={`${inter.className}`}>
            <body
                className={cn(`w-full h-full flex flex-col `, inter.className)}
            >
                <div className="hidden md:block ">
                    <NextTopLoader color="#5195A6" />
                </div>
                <Navbar token={token} />
                {token && (
                    <main className="w-full h-full flex my-2 md:my-0  bg-background ">
                        {children}
                    </main>
                )}
                <Toaster />
            </body>
        </html>
    );
}
