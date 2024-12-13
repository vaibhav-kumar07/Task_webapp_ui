import { useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

export function useURLParams() {
    const searchParams = useSearchParams()!;
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    const removeQueryString = useCallback(
        (name: string) => {
            const params = new URLSearchParams(searchParams);
            params.delete(name);
            return params.toString();
        },
        [searchParams],
    );

    const createQueryStringMany = useCallback(
        (inputParams: { name: string; value: string }[]) => {
            const params = new URLSearchParams(searchParams);
            inputParams.forEach((param) => {
                params.set(param.name, param.value);
            });

            return params.toString();
        },
        [searchParams],
    );

    const appendSearchParams = (paramKey: string, paramValue: string) => {
        return pathname + "?" + createQueryString(paramKey, paramValue);
    };

    const removeSearchParams = (paramKey: string) => {
        return pathname + "?" + removeQueryString(paramKey);
    };
    const addMultpleSearchParams = (
        params: { name: string; value: string }[],
    ) => {
        return pathname + "?" + createQueryStringMany(params);
    };

    const handleAppendAndRemoveParams = ({
        appendKey,
        removeKey,
    }: {
        appendKey: { key: string; value: string };
        removeKey: { key: string };
    }) => {
        const params = new URLSearchParams(searchParams);

        // Append key/value if provided
        if (appendKey) {
            params.set(appendKey.key, appendKey.value);
        }

        // Remove key if provided
        if (removeKey) {
            params.delete(removeKey.key);
        }

        // Return the updated query string
        return pathname + "?" + params.toString();
    };

    return {
        appendSearchParams,
        removeSearchParams,
        addMultpleSearchParams,
        handleAppendAndRemoveParams,
    };
}

export function useGetSearchParamValue(
    paramKey: string,
    defaultValue: string = "",
) {
    const searchParams = useSearchParams()!;
    const paramValue = (searchParams.get(paramKey) as string) || defaultValue;
    return paramValue;
}
