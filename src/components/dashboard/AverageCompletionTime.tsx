import React from "react";

interface AverageCompletionTimeProps {
    averageCompletionTime: number; // In hours
}

const AverageCompletionTime: React.FC<AverageCompletionTimeProps> = ({
    averageCompletionTime,
}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Average Completion Time
            </h3>
            <p className="text-lg text-gray-600">
                {averageCompletionTime} hours
            </p>
        </div>
    );
};

export default AverageCompletionTime;
