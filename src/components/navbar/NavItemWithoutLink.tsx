"use client";

import {
  KeyRound,
  LockIcon,
  UsersIcon,
  FileTextIcon,
  LucideFileQuestion,
  ScrollText,
  BellPlus,
  ShieldAlert,
  GraduationCap,
  Contact2,
  ClipboardList,
  UserCog,
  FileSignature,
  School,
  BookOpenText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";

type IconType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
const icons: IconType = {
  usermgmt: <UserCog />,
  roles: <UsersIcon />,
  permissions: <KeyRound />,
  configurations: <LockIcon />,
  logs: <FileTextIcon />,
  questionBank: <LucideFileQuestion />,
  questionPaper: <ClipboardList />,
  notifications: <BellPlus />,
  audit: <ScrollText />,
  error: <ShieldAlert />,
  batch: <GraduationCap />,
  students: <Contact2 />,
  assessment: <FileSignature />,
  school: <School />,
  academics: <BookOpenText />,
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavItem = ({ icon, title }: any) => {
  return (
    <li
      className={cn(
        "flex gap-2 text-gray-600 mx-2 px-1 hover:bg-gray-100 hover:cursor-pointer rounded items-center  font-sans"
      )}
    >
      <div className="w-6 h-6 text-sm mr-1">{icons[icon]}</div>
      <div className="lg:w-4/5  md:hidden lg:flex">
        <Label className={cn("hover:cursor-pointer ")}>{title}</Label>
      </div>
    </li>
  );
};

export default NavItem;
