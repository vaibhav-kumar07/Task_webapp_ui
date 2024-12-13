"use client";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";
import {
    Users,
    Store,
    ArrowLeftRight,
    Building2,
    FileText,
    NotepadText,
} from "lucide-react";

export type IconKey =
    | "usermgmt"
    | "project"
    | "stores"
    | "party"
    | "transaction"
    | "checklist";

const icons: Record<IconKey, JSX.Element> = {
    usermgmt: <Users size={25} />,
    project: <FileText size={25} />,
    stores: <Store size={25} />,
    party: <Building2 size={25} />,
    transaction: <ArrowLeftRight size={25} />,
    checklist: <NotepadText size={25} />,
};

interface MobileNavItemProps {
    icon: IconKey;
    title: string;
    url: string;
    handleClose: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
    icon,
    title,
    url,
    handleClose,
}) => {
    const router = useRouter();
    const pathName = usePathname();
    const isActiveMenu = pathName?.includes(url);
    const activeClass = "text-gray-700 bg-gray-100";
    function handleLink() {
        handleClose();
        router.push(url || pathName);
    }

    return (
        <div
            // onClick={handleLink}
            onClick={() => handleLink()}
            className={cn(
                "text-gray-600 col-span-6 border-b hover:bg-gray-100 transition-all duration-300  space-x-4 p-4 flex items-center",
                isActiveMenu ? activeClass : "",
            )}
        >
            <div className="col-span-2 ">{icons[icon]}</div>
            <Label className="font-lato text-gray-700 col-span-4">
                {title}
            </Label>
        </div>
    );
};

export default MobileNavItem;
