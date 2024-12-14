import React from "react";

interface PriorityStat {
    _id?: string;
    pendingCount: number;
    timeLapsed: number; // In hours
    estimatedTimeToFinish: number; // In hours
}

interface PriorityStatsProps {
    priorityStats: PriorityStat[];
}

const PriorityStats: React.FC<PriorityStatsProps> = ({ priorityStats }) => {
    // console.log("priroirty stats", priorityStats);
    return (
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Priority Stats
            </h3>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Priority
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Pending Count
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Time Lapsed (Hours)
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                            Estimated Time to Finish (Hours)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {priorityStats.map((priority) => (
                        <tr key={priority._id} className="even:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                                {priority._id}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                                {priority.pendingCount}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                                {priority.timeLapsed.toFixed(2)}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                                {priority.estimatedTimeToFinish.toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriorityStats;
