import EditTaskDialog from "../task/EditTaskDialog";
import TaskStatusWidget from "../task/widget/TaskStatusWidget";
import StatusWidget from "./StatusWidget";

const widgets: any = {
    statusWidget: () => {
        return <StatusWidget />;
    },
    taskStatusWidget: (value: string, rowData: any) => {
        return <TaskStatusWidget value={value} rowData={rowData} />;
    },
    editTaskWidget: (value: string, rowData: any) => {
        console.log("rowData", rowData);
        return <EditTaskDialog task={rowData} />;
    },
};
export default function WidgetLibrary({
    widgetName,
    value,
    rowData,
}: {
    widgetName: string;
    value: string;
    rowData?: any;
    className?: string;
}) {
    return widgets[widgetName](value, rowData);
}
