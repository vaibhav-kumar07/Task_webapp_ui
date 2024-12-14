import { ITask } from "@/types/task";
import React from "react";
import EditTaskDialog from "./EditTaskDialog";
import DeleteTaskWidget from "./DeleteTaskWidget";

export default function ActionWidget({
    rowData,
}: {
    rowData: ITask;
    value: string;
}) {
    return (
        <section>
            <EditTaskDialog task={rowData} />
            <DeleteTaskWidget id={rowData._id as string} />
        </section>
    );
}
