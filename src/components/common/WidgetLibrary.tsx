import StatusWidget from "./StatusWidget";

const widgets: any = {
    statusWidget: () => {
        return <StatusWidget />;
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
