"use server";
import { setCookie } from "@/lib/common/cookie-utils";
import {
    createUser,
    resetUserPin,
    forgotPin,
    updateUserStatus,
} from "@/lib/users";

export async function createUserHandler(
    payload: any,
): Promise<
    | { _id: string; isError: false }
    | { code: string; message: string; isError: true }
> {
    try {
        const { _id } = await createUser(payload);
        return { _id, isError: false };
    } catch (error: any) {
        console.error("Error in createUserHandler:", error);
        return {
            code: error.message,
            message: error.message,
            isError: true,
        };
    }
}

export async function updateUserStatusHandler(
    id: string,
    isActive: boolean,
): Promise<
    | { _id: string; isError: false }
    | { code: string; message: string; isError: true }
> {
    try {
        const { _id } = await updateUserStatus({ _id: id, isActive });
        return { _id, isError: false };
    } catch (error: any) {
        console.error("Error in updateUserStatusHandler:", error);
        return {
            code: error.message,
            message: error.message,
            isError: true,
        };
    }
}

export async function resetPinHandler(
    code: string,
    pin: string,
): Promise<{ message: string; isError: boolean }> {
    try {
        const { message } = await resetUserPin({ code, pin });
        return { message, isError: false };
    } catch (error: any) {
        console.error("Error in updateUserStatusHandler:", error);
        return {
            message: error.message,
            isError: true,
        };
    }
}

export async function ForgotPinHandler(): Promise<{
    message: string;
    isError: boolean;
}> {
    try {
        const response = await forgotPin();
        return response as { message: string; isError: boolean };
    } catch (error: any) {
        console.error("Error in updateUserStatusHandler:", error);
        return {
            message: error.message,
            isError: true,
        };
    }
}

export async function LogoutHandler() {
    try {
        console.log("LogoutHandler");
        setCookie("token", "");
    } catch (error: any) {
        console.error("Error in updateUserStatusHandler:", error);
        return {
            code: error.message,
            message: error.message,
            isError: true,
        };
    }
}
