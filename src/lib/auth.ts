import * as FetchUtils from "@/lib/common/fetch-utils";
import Logger from "@/utils/logger";

const logger = new Logger("lib/auth");

const apiUrl = `${process.env.NEXT_PUBLIC_URL}/auth`


export async function registertUser(payload: {
    name: string;
    email: string;
    password: string;
}): Promise<{ token: string }> {
    console.log("payload", payload);
    const response = await FetchUtils.post(`${apiUrl}/register`, payload, {
        isWithToken: false,
        isWithCache: false,
    });
    logger.log("response register user", "debug", response);
    return response;
}

export async function loginUser(payload: {
    email: string;
    password: string;
}): Promise<{ token: string }> {
    const response = await FetchUtils.post(`${apiUrl}/login`, payload, {
        isWithToken: false,
        isWithCache: false,
    });
    logger.log("response login user", "debug", response);
    return response;
}


export async function authorize(): Promise<{ token: string }> {

    const response = await FetchUtils.get(`${apiUrl}/validate`, {
        isWithToken: true,
        isWithCache: false,
    });
    logger.log("response login user", "debug", response);
    return response;
}

