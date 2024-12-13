"use client";
import React, { useState } from "react";
import { Label } from "../common/Label";
import { cn } from "@/lib/utils";
import { ForgotPinHandler } from "@/actions/user";
import CommonToast from "../common/Toast";

const ForgotPin = ({ className }: { className?: string }) => {
    const { successToast, failureToast } = CommonToast();
    const [error, setError] = useState<string | null>(null);

    const handleForgotPin = async () => {
        try {
            const response = await ForgotPinHandler();

            if (response.isError) {
                failureToast(response.message);
            } else {
                successToast(
                    "Your Pin Change Request has been sent to admin. Please contact admin for further assistance.",
                );
            }
        } catch (err) {
            setError("Failed to send request.");
            console.error(err);
        }
    };

    return (
        <div className={cn("p-0", className)}>
            <Label
                size="xs"
                onClick={handleForgotPin}
                variant="link"
                className="cursor-pointer text-blue-500 hover:underline "
            >
                Forgot Your PIN?
            </Label>

            {error && (
                <Label size="sm" className="text-red-500">
                    {error}
                </Label>
            )}
        </div>
    );
};

export default ForgotPin;
