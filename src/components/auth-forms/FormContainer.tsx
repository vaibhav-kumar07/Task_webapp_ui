import React from "react";
import { Label } from "../common/Label";

interface FormContainerProps {
    title: string;
    children: React.ReactNode;
    code?: string;
}

const FormContainer = ({ title, children }: FormContainerProps) => {
    return (
        <div className="p-10 md:border rounded-2xl md:shadow-lg min-w-[400px] flex flex-col ">
            <Label size={"xl"} variant={"extrabold"}>
                {title}
            </Label>
            <section className="mt-2"> {children}</section>
        </div>
    );
};

export default FormContainer;
