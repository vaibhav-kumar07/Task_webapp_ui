import React from "react";
import AddTaskDialog from "./AddTaskDialog";
import PageHeader from "../common/PageHeader";
import { cn } from "@/lib/utils";

export default function TaskPageHeader({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "w-full h-full flex  items-center  md:px-4 py-3  justify-between ",
                className,
            )}
        >
            <PageHeader label="Tasks" />
            <AddTaskDialog />
        </div>
    );
}
