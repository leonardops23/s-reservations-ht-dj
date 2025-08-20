import React from "react";

interface CustomButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 bg-bg-hover-search hover:bg-blue-600 text-white
        rounded-xl transition-colors duration-300 cursor-pointer focus:outline-none
        focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
