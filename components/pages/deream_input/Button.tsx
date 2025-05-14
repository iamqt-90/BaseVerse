import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-10 pt-3.5 pb-7
        text-white text-base
        rounded-2xl
        shadow-[0px_8px_32px_rgba(67,24,209,0.2)]
        ${className}
      `}
    >
      {children}
    </button>
  );
};
