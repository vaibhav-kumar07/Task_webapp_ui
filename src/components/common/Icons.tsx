import {
    CalendarIcon,
    ClipboardList,
    EyeIcon,
    File,
    PencilIcon,
    PlusCircle,
    Search,
    Trash2,
    Video,
    X,
    Asterisk,
    XSquare,
} from "lucide-react";

import { cn } from "@/lib/utils";
import CommonTooltip from "@/components/common/Tooltip";

interface IIcons {
    [key: string]: (
        className?: string,
        onClick?: () => void,
        props?: any,
    ) => JSX.Element;
}

export default function Icons({
    iconName,
    className,
    onClick,
}: {
    iconName: string;
    className?: string;
    onClick?: () => void;
}) {
    return icons[iconName](className, onClick);
}

const mainThemeColor = "text-purple-500";

const icons: IIcons = {
    eye: (className?: string, onClick?: () => void) => (
        <CommonTooltip text="View Details">
            <EyeIcon
                className={cn("w-6 h-6  mx-auto", mainThemeColor, className)}
                onClick={onClick}
            />
        </CommonTooltip>
    ),
    edit: (className?: string, onClick?: () => void) => (
        <CommonTooltip text="Edit">
            <PencilIcon
                className={cn("w-5 h-5 mx-auto", mainThemeColor, className)}
                onClick={onClick}
            />
        </CommonTooltip>
    ),
    add: (className?: string, onClick?: () => void) => (
        <PlusCircle
            className={cn(
                "w-6 h-6 text-purple-500 mx-auto",
                mainThemeColor,
                className,
            )}
            onClick={onClick}
        />
    ),
    delete: (className?: string, onClick?: () => void) => (
        <CommonTooltip text="Delete">
            <Trash2
                className={cn("w-5 h-5 text-red-500 mx-auto", className)}
                onClick={onClick}
            />
        </CommonTooltip>
    ),
    calender: (className?: string) => (
        <CommonTooltip text="Select a Date Range" className="text-background">
            <CalendarIcon
                className={cn("w-5 h-5 text-black mx-auto", className)}
            />
        </CommonTooltip>
    ),
    close: (className?: string, onClick?: () => void) => (
        <XSquare
            className={cn("w-6 h-6 text-slate-600 ", className, mainThemeColor)}
            onClick={onClick}
        />
    ),

    search: (className?: string, onClick?: () => void) => {
        return (
            <CommonTooltip text="Search" className="text-background">
                <Search
                    className={cn(
                        "p-2 h-9 w-9 text-purple-500 cursor-pointer ",
                        className,
                        mainThemeColor,
                    )}
                    onClick={onClick}
                />
            </CommonTooltip>
        );
    },
    X: (className?: string, onClick?: () => void) => {
        return (
            <X
                className={cn(
                    "h-5 w-5  cursor-pointer",
                    mainThemeColor,
                    className,
                )}
                onClick={onClick}
            />
        );
    },
    required: (className?: string) => {
        return <Asterisk className={cn("h-5 w-5 text-red-500", className)} />;
    },

    unassign: (className?: string, onClick?: () => void) => {
        return (
            <CommonTooltip text="Unassign" className="text-red-500">
                <Trash2
                    className={cn("w-5 h-5 text-red-500 mx-auto", className)}
                    onClick={onClick}
                />
            </CommonTooltip>
        );
    },
    video: (className?: string, onClick?: () => void) => {
        return (
            <Video
                className={cn("w-5 h-5  mx-auto", className)}
                onClick={onClick}
            />
        );
    },
    document: (className?: string, onClick?: () => void) => {
        return (
            <File
                className={cn("w-5 h-5  mx-auto", className)}
                onClick={onClick}
            />
        );
    },
    questionnaire: (className?: string, onClick?: () => void) => {
        return (
            <ClipboardList
                className={cn("w-5 h-5  mx-auto", className)}
                onClick={onClick}
            />
        );
    },
};
