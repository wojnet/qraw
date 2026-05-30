import Link from 'next/link';
import { FC } from 'react';

interface NavigationSubItemProps {
  href: string;
  label: string;
}

const NavigationSubItem: FC<NavigationSubItemProps> = ({ href, label }) => {
  return (
    <Link 
      href={href} 
      className="w-full p-2 group flex justify-start items-center select-none"
    >
      <span className="text-gray-800 group-hover:opacity-80 transition-opacity">
        {label}
      </span>
    </Link>
  );
}

export default NavigationSubItem;