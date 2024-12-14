import { Label } from "@/components/common/Label";
import { ITask, ITaskStatus } from "@/types/task";
import { BadgeCheck, BadgeAlert } from "lucide-react"; // Importing new icons
import React from "react";

export default function TaskStatusWidget({
    value,
}: {
    rowData: ITask;
    value: string;
}) {
    const status = value as ITaskStatus;

    return (
        <div className="flex items-center  md:justify-center gap-3">
            {status === ITaskStatus.PENDING ? (
                <Label
                    size="sm"
                    className="flex items-center gap-2  px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md"
                >
                    {" "}
                    <BadgeAlert className="w-5 h-5 text-yellow-500" />
                    Pending
                </Label>
            ) : (
                <Label
                    size="sm"
                    className="flex items-center gap-2  px-2 py-1 bg-green-100 text-green-600 rounded-md  focus:ring-2 focus:ring-green-300"
                >
                    <BadgeCheck className="w-5 h-5 text-green-500" />
                    Completed
                </Label>
            )}
        </div>
    );
}
