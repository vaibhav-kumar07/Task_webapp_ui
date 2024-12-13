import React from "react";
import "@/app/(dashboard)/globals.css";
import { Toaster } from "@/components/ui/toaster";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
            <Toaster />
        </html>
    );
};

export default AuthLayout;
