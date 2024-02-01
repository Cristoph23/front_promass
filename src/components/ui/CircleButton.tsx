import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
}

export const CircleButton: React.FC<ButtonProps> = ({
  color = "primary",
  children,
  ...props
}) => {
  let buttonColorClass = "";

  switch (color) {
    case "primary":
      buttonColorClass = "bg-blue-500 hover:bg-blue-700";
      break;
    case "secondary":
      buttonColorClass = "bg-gray-500 hover:bg-gray-700";
      break;
    case "success":
      buttonColorClass = "bg-green-500 hover:bg-green-700";
      break;
    case "danger":
      buttonColorClass = "bg-red-500 hover:bg-red-700";
      break;
    default:
      buttonColorClass = "bg-blue-500 hover:bg-blue-700";
  }
  return (
    <button
      className={`rounded-full text-xs p-2 text-center inline-flex items-center mx-1 text-white font-bold ${buttonColorClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CircleButton;
