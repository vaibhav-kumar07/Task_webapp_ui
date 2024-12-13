"use client"; // Error boundaries must be Client Components
import { logoutUserHandler } from "@/actions/auth";
import CommonButton from "@/components/common/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

// interface GlobalErrorProps {
//   error: Error;
// }

export default function GlobalError({ error }: { error: Error }) {
  const router = useRouter();
  console.log("error in error page", error);
  async function onClick() {
    await logoutUserHandler();
    router.push("/login");
  }

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl font-bold text-destructive">
                <AlertCircle className="mr-2 h-6 w-6" />
                Error Occurred
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                We&apos;re sorry, but something went wrong. Please try again or
                return to the login page.
              </p>
              <p className="mt-4 text-center text-red-500 capitalize">
                {error.message}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <CommonButton className="bg-[#5195A6]" onClick={onClick}>
                Go to Login Page
              </CommonButton>
            </CardFooter>
          </Card>
        </div>
      </body>
    </html>
  );
}
