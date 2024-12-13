import React from "react";
import RegisterForm from "@/components/register/RegisterForm";
import ImageSection from "@/components/auth-forms/ImageSection";
import FormContainer from "@/components/auth-forms/FormContainer";

const Register = async () => {
    return (
        <div className="text-3xl flex items-center h-screen w-full">
            <ImageSection />
            <div className="relative h-screen flex flex-col justify-center items-center mx-auto">
                {/* <LogoSection /> */}
                <FormContainer title="Register">
                    <RegisterForm />
                </FormContainer>
            </div>
        </div>
    );
};

export default Register;
