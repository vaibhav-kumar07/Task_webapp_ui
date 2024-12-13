import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface CommonTooltipProps {
    children: React.ReactNode;
    text: string | React.ReactNode;
    className?: string;
}

export default function CommonTooltip(props: CommonTooltipProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild className="cursor-pointer">
                    {props.children}
                </TooltipTrigger>
                <TooltipContent>
                    <div
                        className={cn(
                            "flex flex-col text-primary",
                            props.className,
                        )}
                    >
                        <span>{props.text}</span>
                    </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
