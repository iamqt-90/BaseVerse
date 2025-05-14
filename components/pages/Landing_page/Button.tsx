"use client";
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
  const baseStyles = "font-semibold text-white text-center rounded-lg";
  const variantStyles = {
    primary: "bg-indigo-950 px-16 pt-3.5 pb-6 text-xl leading-none",
    secondary: "bg-slate-900 px-12 pt-2.5 pb-6 text-base leading-6",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
