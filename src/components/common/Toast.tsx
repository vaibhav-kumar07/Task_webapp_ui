import { useToast } from "@/components/hooks/use-toast";

const CommonToast = () => {
  const { toast } = useToast();

  const successToast = (message: string) => {
    toast({
      variant: "success",
      description: `${message}`,
    });
  };
  const failureToast = (message: string) => {
    toast({
      variant: "destructive",
      description: `${message}`,
    });
  };
  return { successToast, failureToast };
};

export default CommonToast;
