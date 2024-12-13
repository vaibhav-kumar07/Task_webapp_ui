import { getSideNavItems } from "@/lib/navigation";
import NavItem from "@/components/navbar/NavItem";
import { getCookieValue } from "@/lib/common/cookie-utils";
import { Role } from "@/types/users";

const NavList = () => {
    const role = getCookieValue("role");
    const navItems = getSideNavItems(role as Role);

    return (
        <section className="sticky left-0 md:border h-full w-16 group-hover:w-60 bg-white transition-all duration-300">
            <ul className="flex flex-col">
                {navItems.map((item: any) => (
                    <NavItem
                        title={item.title}
                        icon={item.icon}
                        key={item.title}
                        url={item.path}
                    />
                ))}
            </ul>
        </section>
    );
};

export default NavList;
