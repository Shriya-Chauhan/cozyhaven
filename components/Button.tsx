import React from 'react';
import Image from 'next/image'; // Ensure you import Image from 'next/image'

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  className?: string; // Add className prop
  full?: boolean; // Add full prop
};

const Button = ({ type, title, icon, variant,className, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${className} ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
