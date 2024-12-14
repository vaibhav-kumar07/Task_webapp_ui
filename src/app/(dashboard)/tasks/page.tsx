import TaskFilters from "@/components/task/TaskFilters";
import TaskPageHeader from "@/components/task/TaskPageHeader";
import TasksTable from "@/components/task/TaskTable";
import { getTasks } from "@/lib/task";
import React from "react";

export default async function Taskpage({
    searchParams = {},
}: {
    searchParams?: { [key: string]: string | undefined };
}) {
    // const rowsPerPage = searchParams?.rowsperpage || 10;
    const page = searchParams?.page || 0;
    const sortOrder = searchParams?.sortOrder || "asc";
    const sortColumn = searchParams?.sortColumn || "start_time";
    const priority = searchParams?.priority || "";
    const status = searchParams?.status || "";

    const response = await getTasks({
        page: page as number,
        priority,
        status,
        sortColumn,
        sortOrder,
    });
    return (
        <section className="w-full h-full px-6 py-6">
            <TaskPageHeader className="gap-4 mb-6" />
            <div className="border p-0 rounded-lg ">
                <TaskFilters />
                <TasksTable tasks={response.data} />
            </div>
        </section>
    );
}
