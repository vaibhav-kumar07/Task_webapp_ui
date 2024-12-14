import React from "react";
import { Label } from "../common/Label";
import { cn } from "@/lib/utils";

export default function InfoCard({
    label,
    value,
    className,
    labelClass,
    valueClass,
}: {
    label: string;
    value: string;
    className?: string;
    labelClass?: string;
    valueClass?: string;
}) {
    return (
        <section
            className={cn(
                "max-w-fit flex flex-col items-center bg-white  rounded-lg p-6  transition-transform hover:scale-105 hover:shadow-xl",
                className,
            )}
        >
            <Label
                size={"xl"}
                variant={"semibold"}
                className={cn(
                    "text-blue-600 text-2xl font-bold mb-2",
                    valueClass,
                )}
            >
                {value}
            </Label>
            <Label
                size={"lg"}
                className={cn(
                    "text-gray-600 text-sm font-medium uppercase tracking-wider",
                    labelClass,
                )}
            >
                {label}
            </Label>
        </section>
    );
}
