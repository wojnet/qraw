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
      className="w-full px-3 py-2 rounded-md group flex justify-start items-center select-none hover:bg-neutral-50 transition-colors duration-150"
    >
      <span className="text-gray-700 group-hover:text-gray-900 text-sm transition-colors">
        {label}
      </span>
    </Link>
  );
}

export default NavigationSubItem;