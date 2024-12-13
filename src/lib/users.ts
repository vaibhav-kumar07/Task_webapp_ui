import { Role, UserParams } from "@/types/users";
import * as FetchUtils from "@/lib/common/fetch-utils";
import Logger from "@/utils/logger";
import { getCookieValue } from "./common/cookie-utils";
import { IResponse, QueryParameters } from "@/types/common";
import qs from "query-string";

const logger = new Logger("lib/user");
const revalidateTag = "users";
const adminApiUrl = `${process.env.NEXT_PUBLIC_KHATA_URL}/admin/users`;
const ownerApiUrl = `${process.env.NEXT_PUBLIC_KHATA_URL}/owner/users`;

const getRedirectUrl = (role: string): string => {
    return role === Role.Owner ? ownerApiUrl : adminApiUrl;
};

export const createUser = async (payload: {
    code: string;
    pin: string;
}): Promise<{ _id: string }> => {
    const role = getCookieValue("role");
    const response = await FetchUtils.post(getRedirectUrl(role), payload, {
        isWithToken: true,
        isWithCache: false,
        cacheTags: [revalidateTag],
    });
    logger.log("response create user", "debug", response);
    return response;
};

export const getUsers = async (params: UserParams): Promise<IResponse> => {
    const role = getCookieValue("role");
    const response = await FetchUtils.get(
        `${getRedirectUrl(role)}?${buildQueryString(params)}`,
        {
            isWithToken: true,
            isWithCache: false,
            cacheTags: [revalidateTag],
        },
    );
    logger.log(
        "response get users",
        "debug",
        typeof response.data[0].created_at,
    );
    return response as IResponse;
};

export const updateUserStatus = async (payload: {
    _id: string;
    isActive: boolean;
}): Promise<{ _id: string }> => {
    const role = getCookieValue("role");
    const body = { is_active: payload.isActive };
    const response = await FetchUtils.patch(
        `${getRedirectUrl(role)}/${payload._id}/status`,
        body,
        {
            isWithToken: true,
            isWithCache: false,
            cacheTags: [revalidateTag],
        },
    );

    return response;
};

//write a function to update user pin
export const resetUserPin = async (payload: {
    code: string;
    pin: string;
}): Promise<{ message: string }> => {
    const response = await FetchUtils.patch(
        `${adminApiUrl}/resetpin`,
        payload,
        {
            isWithToken: true,
            isWithCache: false,
            cacheTags: [revalidateTag],
        },
    );
    logger.log("response update user pin", "debug", response);
    return response;
};

export async function forgotPin(): Promise<{ message: string }> {
    const device_id = getCookieValue("deviceid");
    const response = await FetchUtils.patch(
        `${adminApiUrl}/forgetpin`,
        { device_id },
        {
            isWithToken: false,
            isWithCache: false,
            cacheTags: [],
        },
    );
    logger.log("response forgot pin", "debug", response);
    return response;
}

export function getUserRole(): string {
    const role = getCookieValue("role");
    if (role === Role.Owner) {
        return Role.Owner;
    } else if (role === Role.Admin) {
        return Role.Admin;
    } else if (role === Role.Accountant) {
        return Role.Accountant;
    }
    return "";
}

const buildQueryString = (params: UserParams) => {
    const queryParams: QueryParameters = {};
    queryParams["searchText"] = params.searchText;
    queryParams["sort"] = `${params.sortColumn}:${params.sortOrder} `;
    queryParams["pagination[pageSize]"] = params?.rowsPerPage?.toString();
    queryParams["pagination[page]"] = params?.page?.toString();
    queryParams["filters[role][$eq]"] = params.role?.toString();
    //   queryParams["filters[batch_id][$eq]"] = params.batchId?.toString();
    queryParams["filters[is_active][$eq]"] = params.isActive?.toString() || "";

    //   let deliveryDateEnd = params.deliveryDateEnd;
    //   if (!deliveryDateEnd) {
    //     deliveryDateEnd = params.deliveryDateStart;
    //   }
    //   if (params.deliveryDateStart) {
    //     queryParams["filters[updated_on][$between]"] =
    //       "dt" + params.deliveryDateStart + "," + deliveryDateEnd;
    //   }

    return qs.stringify(queryParams, {
        arrayFormat: "comma",
        skipNull: true,
        skipEmptyString: true,
        encode: false,
    });
};
