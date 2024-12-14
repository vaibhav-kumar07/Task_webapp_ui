"use client";
import { logoutUserHandler } from "@/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = ({ token }: { token: string }) => {
    const router = useRouter();
    function handleLogout() {
        logoutUserHandler();
        router.push("/login");
    }
    return (
        <nav className="bg-white shadow-md border-b border-gray-200">
            <div className="px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"} className="flex items-center space-x-3">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo.png" // Replace with your logo path
                            alt="Logo"
                            className="h-8 w-8 rounded "
                        />
                        <span className="text-lg font-semibold text-gray-800">
                            Task Manager
                        </span>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex space-x-4">
                    <Link
                        href={"/tasks"}
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-white hover:bg-gray-800 rounded-md"
                    >
                        Tasks
                    </Link>
                </div>

                {/* Auth Buttons */}
                <div className="flex space-x-4">
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => router.push("/register")}
                                className="px-4 py-2 border border-gray-300 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-100"
                            >
                                Register
                            </button>
                            <button
                                onClick={() => router.push("/login")}
                                className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600"
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
