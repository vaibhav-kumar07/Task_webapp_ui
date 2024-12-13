import React from "react";
import Image from "next/image";

const ImageSection = () => {
    return (
        <div className="w-3/5 hidden md:flex justify-center items-center border-r-2 h-full bg-gray-100">
            <Image
                src="/expense-management.gif"
                alt="logo"
                width={700}
                height={700}
            />
        </div>
    );
};

export default ImageSection;
