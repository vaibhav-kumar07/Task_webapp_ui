import React from "react";
import InfoCard from "./InfoCard";
import { Label } from "../common/Label";

interface PendingSummaryProps {
    pendingTasks: number;
    totalTimeLapsed: number; // In hours
    totalTimeEstimated: number; // In hours
}

const PendingSummary: React.FC<PendingSummaryProps> = ({
    pendingTasks,
    totalTimeLapsed,
    totalTimeEstimated,
}) => {
    return (
        <section className="flex flex-col gap-4 border p-4 rounded-lg">
            <Label size={"lg"} variant={"semibold"}>
                Pending Tasks Summary
            </Label>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
                <InfoCard label="Pending Tasks" value={`${pendingTasks}`} />
                <InfoCard
                    label="Total Time Lapsed"
                    value={`${totalTimeLapsed.toFixed(2)} hours`}
                />
                <InfoCard
                    label="Total Estimated Time"
                    value={`${totalTimeEstimated.toFixed(2)} hours`} // Ensure 2 decimal places
                />
            </div>
        </section>
    );
};

export default PendingSummary;
