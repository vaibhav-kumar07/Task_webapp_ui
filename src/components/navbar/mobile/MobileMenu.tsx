"use client";
import { useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";

import MobileNavList from "./MobileNavlist";
import { IconKey } from "../NavItem";
import MobileAppHeader from "./MobileAppHeader";

interface MobileMenuProps {
    navItems: Array<{ title: string; icon: IconKey; path: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    function handleClose() {
        setIsOpen((isOpen) => !isOpen);
    }
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button onClick={() => setIsOpen(true)}>
                    <MenuIcon size={35} />
                </button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className="p-0 max-w-[60%] bg-background"
                showCloseButton={false}
            >
                <SheetHeader className="text-left  p-3 border-b shadow-md">
                    <SheetTitle className="w-full flex items-center justify-between pr-4">
                        <MobileAppHeader />
                        <SheetClose asChild onClick={() => setIsOpen(false)}>
                            <button>
                                <X className="w-8 h-8 text-gray-600" />
                            </button>
                        </SheetClose>
                    </SheetTitle>
                </SheetHeader>
                <MobileNavList navItems={navItems} sheetClose={handleClose} />
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
