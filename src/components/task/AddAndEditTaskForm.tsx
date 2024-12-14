"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import moment from "moment-timezone";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CommonButton from "../common/Button";
import { Switch } from "@/components/ui/switch";
import { ITaskStatus } from "@/types/task";

// Zod Schema Definition
const formSchema = z
    .object({
        title: z.string().nonempty({ message: "Task title is required" }),
        startTime: z
            .string()
            .nonempty({ message: "Start time is required" })
            .refine((value) => moment(value).isAfter(moment()), {
                message: "Start time cannot be in the past",
            }),
        endTime: z.string().nonempty({ message: "End time is required" }),
        priority: z.enum(["1", "2", "3", "4", "5"], {
            required_error: "Priority is required",
        }),
        status: z.enum([ITaskStatus.PENDING, ITaskStatus.FINISHED], {
            required_error: "Status is required",
        }),
    })
    .superRefine((data, ctx) => {
        // Cross-field validation
        if (moment(data.endTime).isBefore(moment(data.startTime))) {
            ctx.addIssue({
                code: "custom", // Add the required code
                path: ["endTime"],
                message: "End time must be after start time",
            });
        }
        if (moment(data.endTime).isBefore(moment())) {
            ctx.addIssue({
                code: "custom", // Add the required code
                path: ["endTime"],
                message: "End time must be in the future",
            });
        }
    });

interface AddTaskFormProps {
    onTaskSubmit: (taskDetails: {
        title: string;
        startTime: string;
        endTime: string | null;
        status: string;
        priority: string;
    }) => void;
    isLoading: boolean;
    defaultValues?: Partial<z.infer<typeof formSchema>>;
}

export default function AddAndEditTaskForm({
    isLoading,
    onTaskSubmit,
    defaultValues,
}: AddTaskFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            priority: "1",
            status: ITaskStatus.PENDING,
            ...defaultValues,
            startTime: defaultValues?.startTime
                ? moment(defaultValues.startTime).format("YYYY-MM-DDTHH:mm")
                : undefined,
            endTime: defaultValues?.endTime
                ? moment(defaultValues.endTime).format("YYYY-MM-DDTHH:mm")
                : "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        onTaskSubmit({
            ...values,
            endTime: values.endTime || "",
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 py-5 grid grid-row-4"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Task Title</FormLabel>
                            <FormControl>
                                <Input
                                    className="cursor-pointer"
                                    placeholder="Enter task title"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="startTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Start Time</FormLabel>
                                <FormControl>
                                    <Input
                                        className="cursor-pointer"
                                        type="datetime-local"
                                        placeholder="Enter start time"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="endTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>End Time</FormLabel>
                                <FormControl>
                                    <Input
                                        type="datetime-local"
                                        placeholder="Enter end time"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Priority (1-5)</FormLabel>
                                <FormControl>
                                    <select
                                        className="border border-gray-300 rounded-md p-2 w-full"
                                        {...field}
                                    >
                                        <option value="1">1 (Highest)</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5 (Lowest)</option>
                                    </select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mb-2">Status</FormLabel>
                                <FormControl>
                                    <div className="flex items-center gap-4">
                                        <Switch
                                            checked={
                                                field.value ===
                                                ITaskStatus.FINISHED
                                            }
                                            onCheckedChange={(checked) =>
                                                field.onChange(
                                                    checked
                                                        ? ITaskStatus.FINISHED
                                                        : ITaskStatus.PENDING,
                                                )
                                            }
                                        />
                                        <span>
                                            {field.value ===
                                            ITaskStatus.FINISHED
                                                ? ITaskStatus.FINISHED
                                                : ITaskStatus.PENDING}
                                        </span>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <CommonButton
                    loading={isLoading}
                    type="submit"
                    className="flex ml-auto py-4 px-4"
                >
                    Submit
                </CommonButton>
            </form>
        </Form>
    );
}
