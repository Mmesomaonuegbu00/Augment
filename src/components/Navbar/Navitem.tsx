import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface NavitemProps {
  title: string;
  address: string;
  icon?: IconType; 
}

const Navitem: React.FC<NavitemProps> = ({ title, address, icon: Icon }) => {
  return address === "/Program" ? (
    <span className="flex items-center gap-2 cursor-pointer">
         <p className="font-sans relative text-base w-fit 
          after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-lime-600
          after:scale-x-0 after:origin-right after:transition-transform after:duration-300 
          hover:after:scale-x-100  pb-1 ml-2  sm:ml-10 lg:ml-0">
          {title}
        </p>
      {Icon && <Icon />}
     
    </span>
  ) : (
    <Link href={address} className="flex items-center gap-2">
      {Icon && <Icon />}
      <p className="font-sans relative text-base w-fit 
          after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-lime-600
          after:scale-x-0 after:origin-right after:transition-transform after:duration-300 
          hover:after:scale-x-100  pb-1 ml-2  sm:ml-10 lg:ml-0">
          {title}
        </p>
    </Link>
  );
};

export default Navitem;
