import React, { Children } from "react";

type ButtonProps = {
  type?: "primary" | "danger";
  text?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  shape?: "round" | "circle" | "default";
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ shape, icon, type, children, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        className={`border border-gray-500 py-2 px-4
            ${type === "primary" && "text-white bg-blue-500"}
            ${type === "danger" && "text-white bg-red-500"}
            ${shape === "round" && "rounded-full"}
            ${shape === "circle" && "rounded-full w-10 h-10"}
            ${shape === "default" && "rounded-md"}
    `}
        onClick={onClick}
      >
        {icon && icon}
        {children}
      </button>
    </div>
  );
};

export default Button;
