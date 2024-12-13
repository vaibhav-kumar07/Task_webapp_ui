"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type ExpandableProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
    triggerClass?: string;
    contentClass?: string;
    className?: string;
};

const Expandable: React.FC<ExpandableProps> = ({
    trigger,
    content,
    className,
    triggerClass,
    contentClass,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cn("w-full overflow-hidden", className)}>
            {/* Trigger: Only visible on small screens, not on md and above */}
            <button
                onClick={handleToggle}
                className={cn("w-full md:hidden", triggerClass)}
            >
                {trigger}
            </button>
            {/* Content: Always visible on md and above, can be toggled on smaller screens */}
            <div
                className={cn(
                    "w-full",
                    // For small screens (below md), apply transition and animation
                    "md:hidden transition-all duration-300 ease-in-out",
                    contentClass,
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
                    // For medium screens (md and above), remove animation and ensure it's always visible
                    "md:block md:max-h-none md:opacity-100 md:transition-none",
                )}
                style={{ overflow: "hidden" }}
            >
                {content}
            </div>
        </div>
    );
};

export default Expandable;
