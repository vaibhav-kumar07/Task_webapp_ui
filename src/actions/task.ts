"use server";
import {
    createTask,
    updateTask,
    deleteTask,
} from "@/lib/task";

export async function createTaskHandler(
    payload: any,
): Promise<
    | { _id: string; isError: false }
    | { code: string; message: string; isError: true }
> {
    try {
        const { _id } = await createTask(payload);
        return { _id, isError: false };
    } catch (error: any) {
        console.error("Error in createUserHandler:", error);
        return {
            code: error.message,
            message: error.message,
            isError: true,
        };
    }
}

export async function updateTaskHandler(
    id: string,
    payload: any
): Promise<
    | { _id: string; isError: false }
    | { code: string; message: string; isError: true }
> {
    try {
        const { _id } = await updateTask(id, payload);
        return { _id, isError: false };
    } catch (error: any) {
        console.error("Error in updateUserStatusHandler:", error);
        return {
            code: error.message,
            message: error.message,
            isError: true,
        };
    }
}

export async function DeleteTaskHandler(
    id: string
): Promise<{ message: string; isError: boolean }> {
    try {
        const { message } = await deleteTask(id);
        return { message, isError: false };
    } catch (error: any) {

        return {
            message: error.message,
            isError: true,
        };
    }
}


