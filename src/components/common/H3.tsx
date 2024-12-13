import { cn } from "@/lib/utils";

export default function H3(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "text-xl font-extrabold tracking-tight lg:text-2xl",
        props.className
      )}
    />
  );
}
