"use client";
import { DeleteTaskHandler } from "@/actions/task";
import CommonButton from "@/components/common/Button";
import { Trash } from "lucide-react";
import React from "react";

export default function DeleteTaskWidget({ id }: { id: string }) {
    async function handlOnclick() {
        await DeleteTaskHandler(id);
    }
    return (
        <CommonButton
            onClick={handlOnclick}
            variant="outline"
            className="border-none p-0 shadow-none"
        >
            <Trash size={20} />
        </CommonButton>
    );
}
