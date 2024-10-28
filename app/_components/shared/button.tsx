import { cn } from "@/app/lib/utils";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: "white" | "secondary";
  size?: string;
  className?: string;
};

const Button = ({ onClick, children, color, size, className }: ButtonProps) => {
  const colorType = (() => {
    switch (color) {
      case "white":
        return "border-white text-white";
      default:
        return "border-secondary text-secondary";
    }
  })();

  const sizeType = (() => {
    switch (size) {
      case "md":
        return "p-3";
      case "lg":
        return "p-4";
      case "custom":
        return "px-6 py-5";
      default:
        return "p-3";
    }
  })();

  return (
    <button
      onClick={onClick}
      className={cn(
        colorType,
        sizeType,
        className,
        "rounded-lg border-2 text-md font-medium transition-all hover:shadow-lg active:shadow-none"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
