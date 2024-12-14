"use client";
import { Pencil } from "lucide-react";
import React, { useState } from "react";
import CommonButton from "../common/Button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import AddAndEditTaskForm from "./AddAndEditTaskForm";
import { cn } from "@/lib/utils";
import CommonToast from "../common/Toast";
import { ITask } from "@/types/task";
import { updateTaskHandler } from "@/actions/task";

const EditTaskDialog = ({
    className,
    task,
}: {
    className?: string;
    task: ITask;
}) => {
    const [isLoading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { successToast } = CommonToast();

    // Function to handle task update submission
    const handleTaskUpdate = async (updatedTaskDetails: any) => {
        try {
            setLoading(true);
            const result = await updateTaskHandler(
                task._id as string,
                updatedTaskDetails,
            );
            if (result.isError) {
                setLoading(false);
            } else {
                setLoading(false);
                setIsOpen(false);
                successToast("Task updated successfully!");
            }
        } catch (error) {
            console.error("Task update error:", error);
            setLoading(false);
        }
    };

    return (
        <>
            <CommonButton
                variant="outline"
                className={cn("border-none", className)}
                onClick={() => setIsOpen(true)}
            >
                <Pencil size={16} className="" />
            </CommonButton>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-lg rounded-lg md:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Edit Task</DialogTitle>
                    </DialogHeader>

                    <AddAndEditTaskForm
                        defaultValues={{
                            title: task.title,
                            startTime: task.original_start_time as string,
                            endTime: task.original_end_time as string,
                            status: task.status,
                            priority: task.priority as any,
                        }}
                        isLoading={isLoading}
                        onTaskSubmit={handleTaskUpdate}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditTaskDialog;
