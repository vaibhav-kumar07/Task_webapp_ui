"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
    usermgmt: <Users />,
    project: <FileText />,
    stores: <Store />,
    party: <Building2 />,
    transaction: <ArrowLeftRight />,
    checklist: <NotepadText />,
};

interface NavItemProps {
    icon: IconKey;
    title: string;
    url: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, title, url }) => {
    const pathName = usePathname();
    const isActiveMenu = pathName?.includes(url);
    const activeClass = "text-gray-700 bg-gray-100";

    return (
        <li
            className={cn(
                "text-gray-600 border-b md:border-none hover:bg-gray-100 transition-all duration-300",
                isActiveMenu ? activeClass : "",
            )}
        >
            <Link
                href={url || pathName}
                className="flex gap-2 p-4 items-center font-lato transition-all duration-300"
            >
                <div className=" group-hover:flex group-hover:items-center group-hover:justify-center ">
                    {icons[icon]}
                </div>
                <div className="hidden group-hover:flex md:w-4/6 transition-all duration-300">
                    <Label className="pl-2 cursor-pointer">{title}</Label>
                </div>
            </Link>
        </li>
    );
};

export default NavItem;
