"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const ClearFilters = ({ className }: { className?: string }) => {
    const router = useRouter();
    const pathname = usePathname();

    const clearFiltersHandler = () => {
        router.push(pathname);
    };
    return (
        <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            className={cn(
                "bg-white text-foreground shadow-none border rounded-md h-[30px] px-1 hover:bg-muted flex items-center",
                className,
            )}
            onClick={clearFiltersHandler}
        >
            <X size={20} />
        </motion.div>
    );
};

export default ClearFilters;
