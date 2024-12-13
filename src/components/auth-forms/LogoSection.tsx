import React from "react";
import Image from "next/image";
import H2 from "@/components/common/H2";

const LogoSection = () => {
    return (
        <div className="absolute top-20 left-0 right-0 mx-auto space-y-4 hidden md:block">
            <div className="flex justify-center items-center gap-4">
                <Image src="/logo.png" alt="logo" width={75} height={75} />
                <H2 className="text-center">Task App</H2>
            </div>
        </div>
    );
};

export default LogoSection;
