export interface IPaginationMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
    totalOutward: number;
    totalInward: number;
}
export interface IResponse {
    data: any;
    meta: IPaginationMeta;
}

export interface QueryParameters {
    [key: string]: string | undefined | string[];
}
