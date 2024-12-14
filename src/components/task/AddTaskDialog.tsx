"use client";
import { Label } from "../common/Label";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CommonButton from "../common/Button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import AddTaskForm from "./AddAndEditTaskForm";
import { cn } from "@/lib/utils";
import { createTaskHandler } from "@/actions/task";
import CommonToast from "../common/Toast";

const AddTaskDialog = ({ className }: { className?: string }) => {
    const [isLoading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { successToast } = CommonToast();

    // Function to handle task submission
    const handleTaskSubmit = async (taskDetails: any) => {
        try {
            setLoading(true);
            const result = await createTaskHandler(taskDetails);
            if (result.isError) {
                setLoading(false);
            } else {
                setLoading(false);
                successToast("Task created successfully!");
                setIsOpen(false);
            }
        } catch (error) {
            console.error("Task creation error:", error);
            setLoading(false);
        }
    };

    return (
        <>
            <CommonButton
                variant="outline"
                className={cn(
                    " bg-[#5195A6] hover:bg-[#437c8b] px-3 py-4 rounded-md flex gap-1",
                    className,
                )}
                onClick={() => setIsOpen(true)} // Open dialog
            >
                <Plus size={16} className="text-background" />
                <Label className="cursor-pointer text-background" size={"xs"}>
                    Add Task
                </Label>
            </CommonButton>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-lg rounded-lg md:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                    </DialogHeader>
                    {/* Pass the onTaskSubmit handler to AddTaskForm */}
                    <AddTaskForm
                        isLoading={isLoading}
                        onTaskSubmit={handleTaskSubmit} // Handle task submission
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AddTaskDialog;
