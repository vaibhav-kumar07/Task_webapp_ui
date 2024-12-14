


export enum ITaskStatus {
    PENDING = 'pending',
    FINISHED = 'finished',
}




export interface ITask {
    _id?: string;
    title: string;
    start_time: string;
    end_time: string;
    original_start_time: string;
    original_end_time: string
    priority: string;
    status: ITaskStatus;
    created_at: string;
    created_by: string
    updated_at: string
    updated_by: string
}

export interface ITaskFilters {
    priority?: string;
    status?: ITaskStatus;
    start_date?: Date;
    end_date?: Date;
}

export interface ITaskStatistics {
    total_tasks: number;
    completed_percentage: number;
    pending_percentage: number;
    time_lapsed_by_priority: Record<number, number>;
    balance_estimated_time_by_priority: Record<number, number>;
    average_completion_time: number;
}

export interface TaskParams {
    page?: number;
    rowsPerPage?: number;
    searchText?: string;
    status?: string;
    sortOrder?: string;
    sortColumn?: string;
    priority?: string
}
export const TaskPriorityOptions = [
    {
        label: "1",
        value: "1"
    },
    {
        label: "2",
        value: "2"
    },
    {
        label: "3",
        value: "3"
    },
    {
        label: "4",
        value: "4"
    }, {
        label: "5",
        value: "5"
    }
]

export const TaskStatusOptions = [
    {
        label: "Pending",
        value: ITaskStatus.PENDING
    },
    {
        label: "Finished",
        value: ITaskStatus.FINISHED
    },

]

export interface StatsSummaryProps {
    total_tasks: number;
    completed_percentage: number;
    pending_percentage: number;
    pending_summary: {
        pending_tasks: number;
        total_time_lapsed: number; // In hours
        total_time_estimated: number; // In hours
    };
    priority_stats: {
        pendingCount: number;
        timeLapsed: number; // In hours
        estimatedTimeToFinish: number; // In hours
    }[];
    average_completion_time: number; // In hours
}