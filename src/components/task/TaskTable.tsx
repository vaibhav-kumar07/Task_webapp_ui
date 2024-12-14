import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";
import { ITableMetadata } from "../common/table/Table";
import TableHeader from "../common/table/TableHeader";
import TableRow from "../common/table/TableRow";
import { ITask } from "@/types/task";
import { formatDateToIST } from "@/utils/dateutils";

interface TaskTableProps {
    tasks: ITask[];
    className?: string;
}

const usersMetadata: ITableMetadata[] = [
    {
        columnName: "_id",
        headerLabel: "Task Id",

        columnClass:
            " w-full lg:w-3/12 text-left font-semibold md:pl-4 text-muted-foreground",
        cellClass: "w-full lg:w-3/12 text-left font-semibold md:pl-2 truncate",
        // type: "widget",
        // widgetName: "userName",
    },
    {
        columnName: "title",
        headerLabel: "Name",
        sortable: true,
        defaultSortOrder: "asc",
        columnClass:
            " w-full lg:w-2/12 text-left font-semibold  text-muted-foreground",
        cellClass: "w-full lg:w-2/12 text-left font-semibold capitalize ",
        // type: "widget",
        // widgetName: "userName",
    },
    {
        columnName: "start_time",
        headerLabel: "Start Time",
        sortable: true,
        defaultSortOrder: "asc",
        columnClass: "w-full lg:w-2/12 text-left text-muted-foreground",
        cellClass: "w-full lg:w-2/12 justify-between ",
    },
    {
        columnName: "end_time",
        headerLabel: "End Time",
        sortable: true,
        columnClass: "w-full lg:w-2/12 text-left text-muted-foreground",
        cellClass: "w-full lg:w-2/12 ",
    },
    {
        columnName: "priority",
        headerLabel: "Priority",
        sortable: false,
        columnClass: "w-full lg:w-1/12  text-muted-foreground",
        cellClass: "w-full lg:w-1/12 ",
        // type: "widget",
        // widgetName: "userStatusWidget",
    },
    {
        columnName: "status",
        headerLabel: "Status",
        sortable: false,
        columnClass: "w-full lg:w-2/12 md:text-center  text-muted-foreground",
        cellClass: "w-full lg:w-2/12 capitalize",
        type: "widget",
        widgetName: "taskStatusWidget",
    },

    {
        columnName: "",
        headerLabel: "Edit",
        sortable: false,
        columnClass: "w-full lg:w-1/6 md:text-center text-muted-foreground",
        cellClass: "w-full md:w-1/6 md:text-center ",
        type: "widget",
        widgetName: "actionTaskWidget",
    },
];

export default function TasksTable(props: TaskTableProps) {
    return (
        <div
            className={cn(
                " w-full flex flex-col gap-4 md:gap-0 overflow-hidden  ",
                props.className,
            )}
        >
            <TableHeader
                metadata={usersMetadata}
                className="border-t text-muted-foreground rounded-t-md md:px-0 md:py-2 md:gap-0 bg-gray-100"
            />
            {props.tasks?.length ? (
                props.tasks?.map((task: ITask) => {
                    const data = {
                        ...task,
                        original_start_time: task.start_time,
                        original_end_time: task.end_time,
                        created_at: `${formatDateToIST(task.created_at)}`,
                        start_time: `${formatDateToIST(
                            task.start_time as string,
                        )}`,
                        end_time: `${formatDateToIST(task.end_time as string)}`,
                    };

                    return (
                        <TableRow
                            key={task._id}
                            data={data}
                            metadata={usersMetadata}
                            className="w-full border-x-0 border-b-0  px-4 py-1 md:py-0  md:px-0 "
                        />
                    );
                })
            ) : (
                <div className="py-2 align-middle mx-auto">
                    <Label className="text-gray-500" variant="semibold">
                        No Data found with the matching criteria
                    </Label>
                </div>
            )}
        </div>
    );
}
