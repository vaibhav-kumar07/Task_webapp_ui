import PageHeader from "@/components/common/PageHeader";
import PendingSummary from "@/components/dashboard/PendingSummary";
import PriorityStats from "@/components/dashboard/PriorityStats";
import TaskOverview from "@/components/dashboard/TaskOverview";
import { getStats } from "@/lib/task";

export default async function Home() {
    const {
        total_tasks,
        completed_percentage,
        pending_percentage,
        pending_summary,
        priority_stats,
        average_completion_time,
    } = await getStats();

    return (
        <div className="w-full space-y-6 p-10 bg-white rounded-lg shadow-lg">
            <PageHeader label="DashBoard" />
            {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8"> */}
            <TaskOverview
                totalTasks={total_tasks}
                completedPercentage={completed_percentage}
                pendingPercentage={pending_percentage}
                averageCompletionTime={average_completion_time}
            />
            <PendingSummary
                pendingTasks={pending_summary.pending_tasks}
                totalTimeLapsed={pending_summary.total_time_lapsed}
                totalTimeEstimated={pending_summary.total_time_estimated}
            />
            {/* </div> */}
            <PriorityStats priorityStats={priority_stats} />
        </div>
    );
}
