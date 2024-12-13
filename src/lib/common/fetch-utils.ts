import "server-only"; // https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
import { revalidateTag } from "next/cache";
import { getCookieValue } from "./cookie-utils";
import Logger from "@/utils/logger";

export type RequestOptions = {
    isWithToken: boolean;
    isWithCache?: boolean;
    cacheTags?: string[];
};

const logger = new Logger("lib/common/FetchUtils");

export const get = async (url: string, requestOptions: RequestOptions) => {
    try {
        // Create the  input for the next fetch request
        const requestInput: any = _getRequestInput("GET", null, requestOptions);

        logger.log(
            "requestInput in FetchUtils for GET url: ",
            "debug",
            url,
            requestInput,
        );
        const rawResponse = await fetch(url, requestInput);

        const result = (await rawResponse.json()) || {};
        if (!rawResponse.ok) {
            throw new Error(`${result.message}`);
        }
        // logger.log("response in FetchUtils for GET url: ", "debug", url, result);
        return result;
    } catch (e) {
        const error = e as Error;
        logger.log(
            "Error in FetchUtils for url: ",
            "error",
            url,
            error.message,
        );
        throw e;
    }
};

export const post = async (
    url: string,
    body: any,
    requestOption: RequestOptions,
) => {
    try {
        //
        const requestInput: any = _getRequestInput("POST", body, requestOption);
        logger.log(
            "requestInput in FetchUtils for POST url: ",
            "debug",
            url,
            body,
            requestInput,
        );

        const rawResponse = await fetch(url, requestInput);

        const result = (await rawResponse.json()) || {};

        if (!rawResponse.ok) {
            throw new Error(`${result.message} `);
        }
        if (requestOption.cacheTags && requestOption.cacheTags.length > 0) {
            requestOption.cacheTags.forEach((tag) => {
                revalidateTag(tag);
            });
        }

        return result;
    } catch (e) {
        const error = e as Error;
        logger.log(
            "Error in catch block FetchUtils for url: ",
            "error",
            url,
            error.message,
            error,
        );
        throw e;
    }
};

export const patch = async (
    url: string,
    body: any,
    requestOption: RequestOptions,
) => {
    try {
        //
        const requestInput: any = _getRequestInput(
            "PATCH",
            body,
            requestOption,
        );
        logger.log(
            "requestInput in FetchUtils for PATCH url: ",
            "debug",
            url,
            body,
            requestInput,
        );

        const rawResponse = await fetch(url, requestInput);

        const result = (await rawResponse.json()) || {};
        if (!rawResponse.ok) {
            throw new Error(
                `${rawResponse.status}: ${rawResponse.statusText} : ${result.message} `,
            );
        }
        if (requestOption.cacheTags && requestOption.cacheTags.length > 0) {
            requestOption.cacheTags.forEach((tag) => {
                revalidateTag(tag);
            });
        }
        logger.log(
            "response in FetchUtils for PATCH url: ",
            "debug",
            url,
            body,
            result,
        );
        return result;
    } catch (e) {
        const error = e as Error;
        logger.log(
            "Error in FetchUtils for url: ",
            "debug",
            url,
            error.message,
        );
        throw e;
    }
};

export const deleteData = async (
    url: string,
    requestOption: RequestOptions,
    body?: any,
) => {
    try {
        //
        const requestInput: any = _getRequestInput(
            "DELETE",
            body,
            requestOption,
        );

        const rawResponse = await fetch(url, requestInput);

        const result = (await rawResponse.json()) || {};
        if (!rawResponse.ok) {
            throw new Error(
                `${rawResponse.status}: ${rawResponse.statusText} : ${result.message} `,
            );
        }
        if (requestOption.cacheTags && requestOption.cacheTags.length > 0) {
            requestOption.cacheTags.forEach((tag) => {
                revalidateTag(tag);
            });
        }
        logger.log(
            "response in FetchUtils for DELETE url: ",
            "debug",
            url,
            body,
            result,
        );
        return result;
    } catch (e) {
        const error = e as Error;
        logger.log(
            "Error in FetchUtils for url: ",
            "debug",
            url,
            error.message,
        );
        throw e;
    }
};

const _getRequestInput = (
    method: string,
    body: any,
    options: RequestOptions,
) => {
    const requestInput: any = {};
    requestInput.method = method;
    if (body) {
        requestInput.body = body ? JSON.stringify(body) : null;
    }

    if (options.isWithToken) {
        const token = _getAccessToken();
        if (!token) {
            throw new Error("Token not found");
        }
        requestInput.headers = {
            Authorization: `Bearer ${_getAccessToken()}`,
        };
    }
    if (options.isWithCache) {
        requestInput.next = { tags: options.cacheTags };
    } else {
        requestInput.cache = "no-cache";
    }

    requestInput.headers = {
        "Content-Type": "application/json",
        ...requestInput.headers,
    };
    return requestInput;
};

export const _getAccessToken = (): string => {
    const token = getCookieValue("token");
    return token;
};
