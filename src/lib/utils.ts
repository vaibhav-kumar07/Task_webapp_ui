import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
const regexForSearch = /^[a-zA-Z0-9 ]{3,}$/;
export function isValidSearchText(searchText: string) {
    console.log("searchText", searchText);
    const isValid = regexForSearch.test(searchText);
    console.log("isValid", isValid);
    return isValid;
}
