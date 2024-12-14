"use server";
import { loginUser, registertUser } from "@/lib/auth";
import {
    deleteCookie,
    setCookie,
} from "@/lib/common/cookie-utils";

export async function registerUserHandler(payload: {
    name: string;
    email: string;
    password: string;
}) {
    const result = await registertUser(payload);
    if (result && result.token) {
        setCookie("token", result.token);

    }
    return result;
}

export async function loginUserHandler(payload: { email: string, password: string }) {

    const result = await loginUser(payload);
    if (result && result.token) {
        setCookie("token", result.token);

    }
    return result;

}

export async function setDeviceIdHandler(deviceId: string) {
    setCookie("deviceid", deviceId);
}

export async function logoutUserHandler() {
    setCookie("token", "");

}

export async function clearCookie(key: string) {
    deleteCookie(key);
}
