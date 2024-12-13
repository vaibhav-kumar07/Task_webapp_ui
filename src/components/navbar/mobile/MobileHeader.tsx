import React from "react";
import AppHeader from "../AppHeader";
import MobileMenu from "./MobileMenu";
import { getCookieValue } from "@/lib/common/cookie-utils";
import { getSideNavItems } from "@/lib/navigation";
import { Role } from "@/types/users";
import MobileSearchBox from "./MobileSearchBox";

const MobileHeader = () => {
    const role = getCookieValue("role");
    const navItems = getSideNavItems(role as Role);
    return (
        <div className="sticky top-0 flex items-center shadow-md  border-b  bg-background py-3 gap-2 px-2">
            <MobileMenu navItems={navItems} />
            <AppHeader />
            <MobileSearchBox />
        </div>
    );
};

export default MobileHeader;
