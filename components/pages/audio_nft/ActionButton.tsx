"use client";
import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: string;
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  onClick
}) => {
  const baseStyles = "flex gap-4 items-center px-6 py-4 font-medium text-center rounded-lg";

  const variantStyles = {
    primary: "bg-indigo-800 text-white border border-indigo-700",
    secondary: "border border-indigo-700 text-white bg-indigo-950",
    danger: "border border-orange-600 text-orange-600"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {icon && (
        <img
          src={icon}
          className="object-contain shrink-0 self-start mt-1.5 aspect-[0.64] w-[7px]"
          alt=""
        />
      )}
      {children}
    </button>
  );
};
