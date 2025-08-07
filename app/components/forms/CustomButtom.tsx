import React from "react";

interface CustomButtomProps {
  label: string
}

const CustomButtom: React.FC<CustomButtomProps> = ({ label }) => {
  return (
    <div className="w-full py-4 bg-bg-hover-search hover:bg-bg-hover-search text-white rounded-xl transition cursor-pointer">
      {label}
    </div>
  )
}

export default CustomButtom;
