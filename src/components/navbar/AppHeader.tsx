// AppHeader.tsx
import Image from "next/image";
import Link from "next/link";
import { Label } from "../common/Label";

const AppHeader = () => {
    return (
        <div>
            <Link
                className="flex gap-2 md:px-2.5  md:py-3 md:border-r bg-white w-16 group-hover:w-60 transition-all duration-300  md:rounded-none"
                href="/"
            >
                <div className="w-10 flex-shrink-0 ">
                    {/* Fixed width for image container */}
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={42}
                        height={42}
                        className="object-contain"
                    />
                </div>
                <Label
                    className="flex md:hidden  md:group-hover:flex items-center transition-all duration-300 cursor-pointer"
                    size="lg"
                    variant="bold"
                >
                    Khata
                </Label>
            </Link>
        </div>
    );
};

export default AppHeader;
