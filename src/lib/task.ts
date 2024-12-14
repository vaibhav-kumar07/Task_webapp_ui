
import * as FetchUtils from "@/lib/common/fetch-utils";
import Logger from "@/utils/logger";
import { IResponse, QueryParameters } from "@/types/common";
import qs from "query-string";
import { ITaskStatus, StatsSummaryProps, TaskParams } from "@/types/task";
import { convertToGMT } from "@/utils/dateutils";

const logger = new Logger("lib/user");
const revalidateTag = "tasks";
const apiUrl = `${process.env.NEXT_PUBLIC_URL}/tasks`

export const createTask = async (payload: {
    title: string;
    startTime: string;
    endTime: string;
    priority: string;
    status: ITaskStatus
}): Promise<{ _id: string }> => {
    // Convert date fields to GMT
    const body = {
        title: payload.title,
        priority: payload.priority,
        start_time: convertToGMT(payload.startTime),
        end_time: convertToGMT(payload.endTime),
        status: payload.status
    };
    const response = await FetchUtils.post(
        `${apiUrl}`,
        { ...body },
        {
            isWithToken: true,
            isWithCache: false,
            cacheTags: [revalidateTag]
        }
    );

    return response;
};
export const getTasks = async (params: TaskParams): Promise<IResponse> => {
    const response = await FetchUtils.get(
        `${apiUrl}?${buildQueryString(params)}`,
        {
            isWithToken: true,
            isWithCache: false,
            cacheTags: [revalidateTag],
        },
    );

    return response as IResponse;
};


export const getStats = async (): Promise<StatsSummaryProps> => {
    const response = await FetchUtils.get(
        `${apiUrl}/stats`,
        {
            isWithToken: true,
            isWithCache: false,
            cacheTags: [revalidateTag],
        },
    );
    console.log("response", response)

    return response.data as StatsSummaryProps
};


export const updateTask = async (
    _id: string,
    payload: {
        title: string;
        startTime: string;
        endTime: string;
        priority: string;
        status: ITaskStatus
    }
): Promise<{ _id: string }> => {
    const body = {
        title: payload.title,
        priority: payload.priority,
        start_time: convertToGMT(payload.startTime),
        end_time: convertToGMT(payload.endTime),
        status: payload.status
    };
    const response = await FetchUtils.put(
        `${apiUrl}/${_id}`,
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
export const deleteTask = async (id: string): Promise<{ message: string }> => {
    const response = await FetchUtils.deleteData(
        `${apiUrl}/${id}`,
        {
            isWithToken: true,
            isWithCache: false,
            cacheTags: [revalidateTag],
        },
    );
    logger.log("response update user pin", "debug", response);
    return response;
};




const buildQueryString = (params: TaskParams) => {
    const queryParams: QueryParameters = {};
    queryParams["searchText"] = params.searchText;
    queryParams["sort"] = `${params.sortColumn}:${params.sortOrder} `;
    queryParams["pagination[pageSize]"] = params?.rowsPerPage?.toString();
    queryParams["pagination[page]"] = params?.page?.toString();
    queryParams["filters[priority][$eq]"] = params?.priority;
    //   queryParams["filters[batch_id][$eq]"] = params.batchId?.toString();
    queryParams["filters[status][$eq]"] = params.status?.toString() || "";

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



