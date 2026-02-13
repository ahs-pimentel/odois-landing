import { cn } from "@/lib/utils";

export function Logo({
  variant = "default",
  className,
}: {
  variant?: "default" | "white";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-bold text-xl tracking-tight",
        variant === "white" ? "text-white" : "text-primary",
        className
      )}
    >
      ÓDOIS
    </span>
  );
}
