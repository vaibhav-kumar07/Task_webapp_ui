import React from "react";
import UrlBasedDropdown from "../common/UrlBasedDropDown";
import { TaskPriorityOptions, TaskStatusOptions } from "@/types/task";
import ClearFilters from "../common/ClearFilter";

export default function TaskFilters() {
    return (
        <div className="flex items-center gap-2 py-1 px-1">
            <UrlBasedDropdown
                options={TaskPriorityOptions}
                paramKey="priority"
                placeholder="Select Priority"
                className="md:py-1 shadow-none md:px-2 md:min-w-full md:text-sm rounded-md"
            />
            <UrlBasedDropdown
                options={TaskStatusOptions}
                paramKey="status"
                placeholder="Select Status"
                className="md:py-1 shadow-none  md:px-2 md:min-w-fit md:text-sm rounded-md"
            />
            <ClearFilters />
        </div>
    );
}
