"use client"
import React from 'react';
import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  onClick?: () => void;
  href?: string; 
};

const Button = ({ type, title, icon, variant, onClick, href }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); 
    } else if (href) {
      window.location.href = href; 
    } else {
      const pdfUrl = '/Douidy_Sifeddine_CV.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Douidy_Sifeddine_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      className={`flexCenter gap-2 mx-2 rounded-full border ${variant} w-[180px] h-[40px]`}
      type={type}
      onClick={handleClick} 
    >
      <label className="font-[500] whitespace-nowrap cursor-pointer">{title}</label>
      {icon && <Image src={icon} alt={title} height={50} width={20} />}
    </button>
  );
};

export default Button;
