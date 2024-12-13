import { Label } from "@/components/common/Label";
import { cn } from "@/lib/utils";

export default function PageHeader({
    label,
    className,
    labelClass,
}: {
    label: string;
    className?: string;
    labelClass?: string;
}) {
    return (
        <div
            className={cn(
                " flex justify-start md:justify-center md:block pt-1 md:pb-6 pb-2  md:px-0",
                className,
            )}
        >
            <Label
                variant="semibold"
                className={cn("text-xl md:text-2xl font-inter", labelClass)}
            >
                {label}
            </Label>
        </div>
    );
}
