import { Role } from "@/types/users";
import { IconKey } from "@/components/navbar/NavItem";
const ownerNavItems = [
    {
        title: "Users",
        icon: "usermgmt" as IconKey,
        path: "/users",
    },
    {
        title: "Stores",
        icon: "stores" as IconKey,
        path: "/stores",
    },
    {
        title: "Projects",
        icon: "project" as IconKey,
        path: "/projects",
    },
    {
        title: "Parties",
        icon: "party" as IconKey,
        path: "/parties",
    },
    {
        title: "Transactions",
        icon: "transaction" as IconKey,
        path: "/transactions",
    },
    {
        title: "Reports",
        icon: "checklist" as IconKey,
        path: "/reports",
    },
];

const adminNavItems = [
    {
        title: "Users",
        icon: "usermgmt" as IconKey,
        path: "/users",
    },
    {
        title: "Stores",
        icon: "stores" as IconKey,
        path: "/stores",
    },
    {
        title: "Projects",
        icon: "project" as IconKey,
        path: "/projects",
    },
    {
        title: "Parties",
        icon: "party" as IconKey,
        path: "/parties",
    },
];

const accountantNavItems = [
    // {
    //     title: "Stores",
    //     icon: "stores" as IconKey,
    //     path: "/stores",
    // },
    {
        title: "Parties",
        icon: "party" as IconKey,
        path: "/parties",
    },

    {
        title: "Projects",
        icon: "project" as IconKey,
        path: "/projects",
    },
    {
        title: "Transactions",
        icon: "transaction" as IconKey,
        path: "/transactions",
    },
    {
        title: "Reports",
        icon: "checklist" as IconKey,
        path: "/reports",
    },
];

export function getSideNavItems(role: Role) {
    switch (role) {
        case Role.Owner:
            return ownerNavItems;
        case Role.Admin:
            return adminNavItems;
        case Role.Accountant:
            return accountantNavItems;
    }
}
