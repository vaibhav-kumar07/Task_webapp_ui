"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

interface FormDropDownWithSearchProps {
    isDisabled?: boolean;
    readonly options: any;
    placeholder: string;
    className?: string;
    idKey: string;
    nameKey: string;
    onSelectionChange: (updatedArray: any[]) => void;
    onTextInputChange: (text: string) => void;
    selectMultiple?: boolean;
}

export default function FormDropDownWithSearch(
    props: FormDropDownWithSearchProps,
) {
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    // Must be deleted once
    // https://github.com/JedWatson/react-select/issues/5459 is fixed.
    useEffect(() => setIsMounted(true), []);

    const list = props.options.map((option: any) => ({
        value: option[props.idKey],
        label: option[props.nameKey],
    }));

    const handleSelectionChange = (selected: any) => {
        setSelectedOptions(selected);
        const updatedArray = convertToOriginalFormat(
            selected,
            props.idKey,
            props.nameKey,
        );
        props.onSelectionChange(updatedArray);
    };
    const handleEnteredInput = (e: string | undefined) => {
        if (e) {
            props.onTextInputChange(e);
        } else props.onTextInputChange("");
    };

    const placeholder =
        selectedOptions.length > 1
            ? selectedOptions.map((option: any) => option.label).join(", ")
            : props.placeholder;

    return (
        <>
            {isMounted ? (
                <Select
                    isDisabled={props.isDisabled ?? false}
                    closeMenuOnSelect={!(props.selectMultiple ?? true)}
                    // closeMenuOnSelect={false}
                    components={animatedComponents}
                    value={selectedOptions}
                    isMulti={props.selectMultiple || false}
                    options={list}
                    placeholder={placeholder}
                    className={cn("text-gray-600 text-sm", props.className)}
                    onChange={handleSelectionChange}
                    onInputChange={handleEnteredInput}
                />
            ) : null}
        </>
    );
}

interface OriginalData {
    value: string;
    label: string;
}

function convertToOriginalFormat(
    originalData: OriginalData | OriginalData[],
    idKey: string,
    nameKey: string,
) {
    if (Array.isArray(originalData)) {
        return originalData.map((item) => ({
            [idKey]: item.value,
            [nameKey]: item.label,
        }));
    } else {
        return [
            {
                [idKey]: originalData.value,
                [nameKey]: originalData.label,
            },
        ];
    }
}
