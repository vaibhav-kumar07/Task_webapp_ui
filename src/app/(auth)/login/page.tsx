import React from "react";
import ImageSection from "@/components/auth-forms/ImageSection";
import FormContainer from "@/components/auth-forms/FormContainer";
import LoginForm from "@/components/login/LoginForm";

export default async function Login() {
    return (
        <div className="text-3xl flex items-center h-screen w-full">
            <ImageSection />
            <div className="relative h-screen flex flex-col justify-center items-center mx-auto">
                {/* <LogoSection /> */}
                <FormContainer title="Login">
                    <LoginForm />
                </FormContainer>
            </div>
        </div>
    );
}
