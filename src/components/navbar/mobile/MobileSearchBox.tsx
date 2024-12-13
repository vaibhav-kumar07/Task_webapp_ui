"use client";
import SearchBox from "@/components/common/SearchBox";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileSearchBox() {
    const pathname = usePathname();
    const pages = ["users", "transactions", "projects", "parties"];
    const showSearchBox = pages.includes(pathname.split("/")[1]);

    return (
        <div
            className={` z-20 bg-background flex items-center ml-auto pr-3 ${
                showSearchBox ? "flex " : "hidden"
            }`}
        >
            {showSearchBox && <SearchBox />}
        </div>
    );
}
