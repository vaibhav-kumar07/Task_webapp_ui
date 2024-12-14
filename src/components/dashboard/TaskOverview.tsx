import React from "react";
import InfoCard from "./InfoCard";
import { Label } from "../common/Label";

interface TaskOverviewProps {
    totalTasks: number;
    completedPercentage: number;
    pendingPercentage: number;
    averageCompletionTime: number;
}

const TaskOverview: React.FC<TaskOverviewProps> = ({
    totalTasks,
    completedPercentage,
    pendingPercentage,
    averageCompletionTime,
}) => {
    return (
        <section className="flex flex-col gap-4 border p-4 shadow rounded-lg">
            <Label size={"lg"} variant={"semibold"}>
                Summary
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <InfoCard label="Total Tasks" value={`${totalTasks}`} />
                <InfoCard
                    label="Total Completed"
                    value={`${completedPercentage.toFixed(2)}%`} // Ensure 2 decimal places
                />
                <InfoCard
                    label="Total Pending"
                    value={`${pendingPercentage.toFixed(2)}%`} // Ensure 2 decimal places
                />
                <InfoCard
                    label="Average Task Completion Time "
                    value={`${averageCompletionTime.toFixed(2)} hours`} // Ensure 2 decimal places
                />
            </div>
        </section>
    );
};

export default TaskOverview;
