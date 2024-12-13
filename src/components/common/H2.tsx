import { cn } from "@/lib/utils";

export default function H2(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "text-2xl font-extrabold tracking-tight lg:text-3xl",
        props.className
      )}
    />
  );
}
