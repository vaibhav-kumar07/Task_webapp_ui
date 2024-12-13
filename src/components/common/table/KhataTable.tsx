import { Table } from "@/components/ui/table";
import { Role } from "@/types/users";
// import KhataTableHeader from "@/components/common/table/KhataTableHeader";
// import KhataTableBody from "@/components/common/table/KhataTableBody";

export interface ITableMetadata {
    columnName: string;
    headerLabel?: string;
    sortable?: boolean;
    defaultSortColumn?: boolean;
    columnClass?: string;
    cellClass?: string;
    defaultSortOrder?: "asc" | "desc";
    type?:
        | "date"
        | "datetime"
        | "time"
        | "currency"
        | "number"
        | "string"
        | "icon"
        | "stringWithIcon"
        | "widget";
    icon?: IIcon;
    widgetName?: string;
    allowedRoles?: Role[];
    sortableIconClass?: string;
    showColumnLabel?: boolean;
    showColon?: boolean;
    cellContainerClass?: string;
    widgetClass?: string;
}

export interface IIcon {
    name: string;
    className?: string;
    onClick?: () => void;
}

export default function KhataTable({
    data,
}: //   metadata,
{
    data: any;
    metadata: ITableMetadata[];
}) {
    return (
        <div>
            {data?.length > 0 && (
                <Table className="rounded-lg w-full ">
                    {/* <KhataTableHeader metadata={metadata} />
          <KhataTableBody data={data} metadata={metadata} /> */}
                </Table>
            )}
        </div>
    );
}
