"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { loginUserHandler } from "@/actions/auth";
import { useRouter } from "next/navigation";
import CommonToast from "../common/Toast";
import CommonButton from "../common/Button";
import { useState } from "react";

const FormSchema = z.object({
    email: z
        .string()
        .nonempty("Email is required")
        .email("Invalid email format"),
    password: z
        .string()
        .nonempty("Password is required")
        .min(6, "Password must be at least 6 characters long"),
});

const LoginForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { successToast, failureToast } = CommonToast();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setIsLoading(true);
            const response = await loginUserHandler(data);
            if (response && response.token) {
                successToast("Login Successful");
                setIsLoading(false);
                router.push("/dashboard");
            }
        } catch (error: any) {
            failureToast(error);
            setIsLoading(false);
            console.error("Error during login:", error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-foreground">
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-foreground">
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <CommonButton
                    type="submit"
                    loading={isLoading}
                    className="w-full py-4 tracking-wide"
                >
                    Login
                </CommonButton>
            </form>
        </Form>
    );
};

export default LoginForm;
