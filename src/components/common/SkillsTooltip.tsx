import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface SkillsTooltipProps {
    children: React.ReactNode;
    text: string;
    className?: string;
}

export function SkillsTooltip(props: SkillsTooltipProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{props.children}</TooltipTrigger>
                <TooltipContent className="bg-background border ">
                    <div
                        className={cn(
                            "flex flex-col gap-1  text-foreground",
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
