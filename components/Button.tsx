import React from 'react';
import Image from 'next/image'; // Ensure you import Image from 'next/image'

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  className?: string; // Add className prop
  full?: boolean; // Add full prop
  href?: string;
  onClick?: () => void; // Add onClick prop for click handler
};

const Button = ({ type, title, icon, variant, className='', full=false, href, onClick }: ButtonProps) => {
  return (
    <a 
      href={href} 
      className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''} ${className}`} 
      onClick={onClick}
    >
      <button type={type} className="flex items-center">
        {icon && <Image src={icon} alt={title} width={24} height={24} className="icon" />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </button>
    </a>
  );
};

export default Button;
