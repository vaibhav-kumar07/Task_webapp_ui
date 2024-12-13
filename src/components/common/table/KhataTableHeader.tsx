import SortableHeaderCell from "@/components/common/table/SortableHeaderCell";
import { ITableMetadata } from "@/components/common/table/KhataTable";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";

export default function KhataTableHeader({
    metadata,
    className,
}: {
    metadata: ITableMetadata[];
    className?: string;
}) {
    return (
        <div
            className={cn(
                "bg-gray-200 md:flex  md:items-center  md:py-1 hidden rounded-t-sm  ",
                className,
            )}
        >
            {metadata.map((meta, index) =>
                meta.sortable ? (
                    <SortableHeaderCell
                        key={index}
                        columnName={meta.columnName}
                        label={meta.headerLabel || ""}
                        defaultSortColumn={meta.defaultSortColumn}
                        defaultSortOrder={meta.defaultSortOrder}
                        className={cn("hidden lg:table-cell", meta.columnClass)}
                        iconClass={meta.sortableIconClass}
                    />
                ) : (
                    <Label
                        key={index}
                        variant={"semibold"}
                        size={"sm"}
                        className={cn(
                            "font-semibold text-sm ",
                            meta.columnClass,
                        )}
                    >
                        {meta.headerLabel}
                    </Label>
                ),
            )}
        </div>
    );
}
