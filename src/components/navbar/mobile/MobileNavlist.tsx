import MobileNavItem, { IconKey } from "./MobileNavitem";

interface MobileNavListProps {
    navItems: Array<{ title: string; icon: IconKey; path: string }>;
    sheetClose: () => void;
}

const MobileNavList: React.FC<MobileNavListProps> = ({
    navItems,
    sheetClose,
}) => {
    return (
        <section className="sticky left-0 h-full w-full bg-white">
            <ul className="w-full grid grid-cols-6 ">
                {navItems.map((item) => (
                    <MobileNavItem
                        title={item.title}
                        icon={item.icon}
                        key={item.title}
                        url={item.path}
                        handleClose={sheetClose}
                    />
                ))}
            </ul>
        </section>
    );
};

export default MobileNavList;
