// SideNavbar.tsx
import AppHeader from "@/components/navbar/AppHeader";
import Profile from "@/components/navbar/Profile";
import { cn } from "@/lib/utils";
import { getCookieValue } from "@/lib/common/cookie-utils";
import NavList from "./Navlist";

interface NavbarLayoutProps {
    className?: string;
}

const SideNavbar = (props: NavbarLayoutProps) => {
    const role = getCookieValue("role");
    return (
        <div className="sticky top-0  md:h-screen group ">
            <div
                className={cn(
                    "h-full sticky top-0 transition-all duration-300 ease-in-out w-14 group-hover:w-60",
                    props.className,
                )}
            >
                <AppHeader />
                <NavList />
                <div className="flex-grow" />
                <Profile role={role} />
            </div>
        </div>
    );
};

export default SideNavbar;
