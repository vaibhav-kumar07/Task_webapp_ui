import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "../common/Label";
import LogoutCard from "./LogoutCard";

interface SidebarProfileProps {
    role?: string;
}

const Profile = ({ role }: SidebarProfileProps) => {
    return (
        <div className="flex gap-2  py-3 border-r bg-white w-16 group-hover:w-60 transition-all duration-300 rounded-br-md md:rounded-none items-center cursor-pointer ">
            <div className="w-16 flex-shrink-0 flex items-center justify-center">
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <HoverCard>
                <HoverCardTrigger>
                    <Label
                        className="hidden group-hover:flex   group-hover:w-60  text-gray-600  transition-opacity duration-300 cursor-pointer  "
                        variant={"semibold"}
                    >
                        {role}
                    </Label>
                </HoverCardTrigger>
                <HoverCardContent className="w-60 lg:w-60 md:w-14 p-1 cursor-pointer ">
                    <LogoutCard role={role} />
                </HoverCardContent>
            </HoverCard>
        </div>
    );
};

export default Profile;
