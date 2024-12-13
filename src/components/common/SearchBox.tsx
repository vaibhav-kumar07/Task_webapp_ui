"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
    useURLParams,
    useGetSearchParamValue,
} from "@/components/hooks/request";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
interface SearchBoxProps {
    placeholder?: string;
    className?: string;
}
export default function SearchBox(props: SearchBoxProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [error, setError] = useState(false);
    const router = useRouter();
    const searchText = useGetSearchParamValue("q", "");
    const { appendSearchParams, removeSearchParams } = useURLParams();

    const handleSearch = () => {
        // if (!isValidSearchText(searchQuery)) {
        //   setError(true);
        //   return;
        // }

        setError(false);
        router.push(appendSearchParams("q", searchQuery));
    };

    useEffect(() => {
        setSearchQuery(searchText);
    }, [searchText]);

    function clearSearch() {
        setError(false);
        setSearchQuery("");
        router.push(removeSearchParams("q"));
    }

    function toggleSearchBox() {
        clearSearch();
        setIsOpen(!isOpen);
    }

    const errorClass = error ? "border-red-500 border-2 animate-shake" : "";
    const openClass = isOpen ? "w-full md:w-80 mr-1" : "w-0 px-0 border-0";
    return (
        <div className={`relative md:ml-0 flex items-center  max-w-xl `}>
            <Input
                className={cn(
                    ` transition-all duration-500 active:outline-none focus:outline-none focus-visible:ring-0 flex-1 h-[30px]`,
                    errorClass + " " + openClass,
                )}
                type="text"
                placeholder={props.placeholder || "Search..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={(event) => {
                    if (event.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <SearchIcon onClick={toggleSearchBox} />
            <ClearIcon searchText={searchQuery} onClick={clearSearch} />
        </div>
    );
}
function SearchIcon({ onClick }: { onClick: () => void }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            className=" border flex justify-center items-center p-1 rounded-md  "
        >
            <Search
                onClick={() => onClick()}
                size={20}
                className="md:w-5 md:h-5 w-6 h-6 "
            />
        </motion.div>
    );
}

function ClearIcon({
    searchText,
    onClick,
}: {
    searchText: string;
    onClick: () => void;
}) {
    return (
        <>
            {searchText && (
                <div className="absolute right-7 pr-6 cursor-pointer">
                    <X className="w-4 h-4" onClick={() => onClick()} />
                </div>
            )}
        </>
    );
}
