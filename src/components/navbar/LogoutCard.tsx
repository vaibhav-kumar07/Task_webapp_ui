"use client";
import { logoutUserHandler } from "@/actions/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { Label } from "../common/Label";
import CommonButton from "../common/Button";
import { LogOut } from "lucide-react";

export default function LogoutCard({ role }: { role?: string }) {
    const router = useRouter();
    const name = "John Doe";

    function onLogout() {
        logoutUserHandler();
        router.push("/login");
    }
    return (
        <div className="p-2">
            <div className="flex flex-col justify-between  ">
                <Label variant={"semibold"}>{name}</Label>
                <Label size={"sm"}>{role}</Label>
            </div>
            <div className="mt-4 flex justify-end">
                <CommonButton
                    variant="outline"
                    size="sm"
                    onClick={() => onLogout()}
                    className="flex items-center"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </CommonButton>
            </div>
        </div>
    );
}
