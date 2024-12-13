import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import { inter } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Task App",
    description: "Record Your Task with us ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.className}`}>
            <body
                className={cn(
                    `flex flex-col md:flex-row no-scrollbar`,

                    inter.className,
                )}
            >
                <div className="hidden md:block ">
                    <NextTopLoader color="#5195A6" />
                </div>
                {/* <div role="navigation">
                    <SideNavbar className="md:h-full md:flex md:flex-col hidden bg-gray-300" />
                </div>
                <div className="md:hidden sticky top-0 w-full h-full bg-background">
                    <MobileHeader />
                </div> */}
                <main className="flex my-2 md:my-0 w-full h-full bg-background md:pl-2">
                    {children}
                </main>
                <Toaster />
            </body>
        </html>
    );
}
